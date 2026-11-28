import { expect, test, type Page } from "@playwright/test";

/** The web player isn't part of the website (nginx serves it in production) */
async function stubPlayer(page: Page) {
    await page.route("**/play/bulanci/**", (route) =>
        route.fulfill({ contentType: "text/html", body: "<title>player</title>" }),
    );
}

test.beforeEach(async ({ page }) => stubPlayer(page));

test("the Play page starts the game without letting it play sound", async ({ page }) => {
    await page.goto("/projects/bulanci/play/");
    await expect(page.getByRole("link", { name: "Hrát", exact: true })).toHaveClass(/active/);

    const frame = page.locator(".game iframe");
    await expect(frame).toHaveAttribute("src", "/play/bulanci/?autostart=1");
    await expect(frame).not.toHaveAttribute("allow", /autoplay/);
});

test("maps from the galleries load into the game", async ({ page }) => {
    await page.goto("/projects/bulanci/play/");
    const galleries = page.locator(".gallery");
    await expect(galleries).toHaveCount(2);

    const random = galleries.nth(1).locator(".name");
    await expect(random).toHaveCount(10);
    const before = await random.allTextContents();
    await page.getByRole("button", { name: "Zamíchat" }).click();
    await expect.poll(() => random.allTextContents()).not.toEqual(before);

    const name = (await galleries.nth(0).locator(".name").first().textContent())!.trim();
    await galleries
        .nth(0)
        .getByRole("button", { name: `Hrát mapu ${name}` })
        .click();
    const frame = page.locator(".game iframe");
    await expect(frame).toHaveAttribute("src", /^\/play\/bulanci\/\?maps=.+\.eap&autostart=1$/);
    // Choosing a map is a click, so the game may play sound right away
    await expect(frame).toHaveAttribute("allow", /autoplay/);
    await expect(page.locator(".chosen")).toContainText(name);

    await page.getByRole("button", { name: "Hrát bez ní" }).click();
    await expect(frame).toHaveAttribute("src", "/play/bulanci/?autostart=1");
});

test("a link to a map's page with ?play starts the game", async ({ page }) => {
    await page.goto("/projects/bulanci/maps/efdeb835-edam/?play");
    await expect(page.locator(".screenshot iframe")).toHaveCount(1);
    await expect(page.getByRole("heading", { name: "Ovládání" })).toBeVisible();

    await page.getByRole("button", { name: "Zpět na snímek" }).click();
    await expect(page).toHaveURL(/\/efdeb835-edam\/$/);
    await page.getByRole("button", { name: "Hrát", exact: true }).click();
    await expect(page).toHaveURL(/\/efdeb835-edam\/\?play$/);
});

test("the Bulánci page links to the Play page", async ({ page }) => {
    await page.goto("/projects/bulanci/");
    await page.getByRole("link", { name: "Zahrajte si Bulánky v prohlížeči" }).click();
    await expect(page).toHaveURL(/\/projects\/bulanci\/play\/$/);
});
