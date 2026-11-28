import { readFileSync } from "fs";
import { expect, test } from "@playwright/test";

/**
 * The map files are on coruscant; the tests get small stand-ins for two of them from
 * tests/fixtures/coruscant (see playwright.config.ts)
 */
const EDAM = { id: "efdeb835", file: "edam.eap" };
const ACKBAR = { id: "5b336c97", file: "Ackbar_'s_Academy.eap" };
/** A duplicate of another map, which isn't published on its own */
const DUPLICATE_ID = "eb0a7ec8";

const fixture = (file: string): Buffer =>
    readFileSync(`tests/fixtures/coruscant/bulanci-maps/${file}`);
const fileUrl = (id: string): string => `/projects/bulanci/maps/files/${id}.eap`;

test("a map's file downloads under its original name", async ({ request }) => {
    for (const { id, file } of [EDAM, ACKBAR]) {
        const response = await request.get(fileUrl(id));
        expect(response.status()).toBe(200);
        expect(response.headers()["content-disposition"]).toContain(
            `filename*=UTF-8''${encodeURIComponent(file).replace("'", "%27")}`,
        );
        expect(response.headers()["accept-ranges"]).toBe("bytes");
        expect(await response.body()).toEqual(fixture(file));
    }
});

test("a map's file supports Range requests, as the web player needs", async ({ request }) => {
    const whole = fixture(EDAM.file);

    const start = await request.get(fileUrl(EDAM.id), { headers: { Range: "bytes=0-99" } });
    expect(start.status()).toBe(206);
    expect(start.headers()["content-range"]).toBe(`bytes 0-99/${whole.length}`);
    expect(await start.body()).toEqual(whole.subarray(0, 100));

    const end = await request.get(fileUrl(EDAM.id), { headers: { Range: "bytes=-50" } });
    expect(end.status()).toBe(206);
    expect(await end.body()).toEqual(whole.subarray(whole.length - 50));

    const beyond = await request.get(fileUrl(EDAM.id), {
        headers: { Range: `bytes=${whole.length}-` },
    });
    expect(beyond.status()).toBe(416);
});

test("only published maps have a file", async ({ request }) => {
    for (const url of [
        fileUrl(DUPLICATE_ID),
        fileUrl("00000000"),
        "/projects/bulanci/maps/files/edam.eap",
    ]) {
        expect((await request.get(url)).status(), url).toBe(404);
    }
});

test("the map's page links to its file", async ({ page }) => {
    await page.goto(`/projects/bulanci/maps/${EDAM.id}-edam/`);
    const link = page.getByRole("link", { name: /^Stáhnout/ });
    await expect(link).toHaveAttribute("href", fileUrl(EDAM.id));
    const [download] = await Promise.all([page.waitForEvent("download"), link.click()]);
    expect(download.suggestedFilename()).toBe(EDAM.file);
});

test("Play starts the web player with the map in place of the screenshot", async ({ page }) => {
    // The player isn't part of the website (nginx serves it in production)
    await page.route("**/play/bulanci/**", (route) =>
        route.fulfill({ contentType: "text/html", body: "<title>player</title>" }),
    );
    await page.goto(`/projects/bulanci/maps/${EDAM.id}-edam/`);
    await page.getByRole("button", { name: "Hrát" }).click();

    const frame = page.locator(".screenshot iframe");
    await expect(frame).toHaveAttribute(
        "src",
        `/play/bulanci/?maps=${encodeURIComponent(fileUrl(EDAM.id))}&autostart=1`,
    );
    await expect(page.locator(".screenshot img")).toHaveCount(0);

    await page.getByRole("button", { name: "Zpět na snímek" }).click();
    await expect(frame).toHaveCount(0);
    await expect(page.locator(".screenshot img")).not.toHaveCount(0);
});
