import { expect, test, type Page } from "@playwright/test";

/**
 * The archived copy is served by the Wayback Machine, which is replaced here with two pages
 * linking to each other, so that the tests don't depend on it
 */
const ARCHIVED_PAGE = (title: string, link: string) =>
    `<!doctype html><title>${title}</title><h1>${title}</h1><a href="${link}">${link}</a>`;

test.beforeEach(async ({ page }) => {
    await page.route("https://web.archive.org/**", (route) =>
        route.fulfill({
            contentType: "text/html",
            body: route.request().url().endsWith("/second-page")
                ? ARCHIVED_PAGE("Second page", "/")
                : ARCHIVED_PAGE("First page", "/second-page"),
        }),
    );

    // Any website's page has the archived copy
    await page.goto("/projects/bulanci/webs/");
    const href = await page
        .locator("a")
        .evaluateAll((links) =>
            links
                .map((link) => link.getAttribute("href") ?? "")
                .find((href) => /\/projects\/bulanci\/webs\/\d+-/.test(href)),
        );
    await page.goto(href!);
    await expect(page.getByRole("button", { name: "Otevřít archivovanou kopii" })).toBeVisible();
});

const maximizeButton = (page: Page) => page.getByRole("button", { name: "Maximalizovat okno" });
const restoreButton = (page: Page) => page.getByRole("button", { name: "Obnovit velikost okna" });
const frame = (page: Page) => page.getByTitle(/^Archivovaná kopie webu/);

async function expectMaximized(page: Page) {
    await expect(restoreButton(page)).toBeVisible();
    const viewport = page.viewportSize()!;
    await expect(frame(page)).toHaveAttribute("width", String(viewport.width));
    // The page behind is covered, so it can't be scrolled or reached with the keyboard
    expect(await page.evaluate(() => getComputedStyle(document.documentElement).overflow)).toBe(
        "hidden",
    );
    expect(await page.evaluate(() => !!document.querySelector("header")?.closest("[inert]"))).toBe(
        true,
    );
}

async function expectRestored(page: Page) {
    await expect(maximizeButton(page)).toBeVisible();
    await expect(frame(page)).toHaveAttribute("width", "800");
    expect(await page.evaluate(() => !!document.querySelector("[inert]"))).toBe(false);
}

/** Marks the frame element, to tell whether it was replaced, which would load it again */
const markFrame = (page: Page) =>
    frame(page).evaluate((element) => (element.dataset.testMarker = "original"));
const expectSameFrame = (page: Page) =>
    expect(frame(page)).toHaveAttribute("data-test-marker", "original");

test("maximizing opens the archived copy and fills the window", async ({ page }) => {
    await maximizeButton(page).click();
    await expectMaximized(page);
    await expect(page.frameLocator("iframe").getByRole("heading")).toHaveText("First page");
});

test("the window is restored in place, keeping the loaded copy", async ({ page }) => {
    await maximizeButton(page).click();
    await expectMaximized(page);
    await markFrame(page);

    await restoreButton(page).click();
    await expectRestored(page);
    await expectSameFrame(page);
    // No history entry is left behind, so going back leaves the page
    await page.goBack();
    await expect(page).toHaveURL(/\/projects\/bulanci\/webs\/$/);
});

test("Escape, Back and double-clicking the title bar restore the window", async ({ page }) => {
    await maximizeButton(page).click();
    await expectMaximized(page);
    await markFrame(page);

    await page.keyboard.press("Escape");
    await expectRestored(page);

    await maximizeButton(page).click();
    await expectMaximized(page);
    await page.evaluate(() => history.back());
    await expectRestored(page);

    await page.getByText(/– Webový archiv$/).dblclick();
    await expectMaximized(page);
    await page.getByText(/– Webový archiv$/).dblclick();
    await expectRestored(page);

    await expectSameFrame(page);
});

test("restoring after browsing the archived site keeps its page", async ({ page }) => {
    await maximizeButton(page).click();
    await expectMaximized(page);
    await markFrame(page);

    await page.frameLocator("iframe").getByRole("link").click();
    await expect(page.frameLocator("iframe").getByRole("heading")).toHaveText("Second page");

    await restoreButton(page).click();
    await expectRestored(page);
    await expectSameFrame(page);
    await expect(page.frameLocator("iframe").getByRole("heading")).toHaveText("Second page");
});

test("minimize restores the window, then closes the copy", async ({ page }) => {
    await maximizeButton(page).click();
    await expectMaximized(page);

    const minimize = page.getByRole("button", { name: "Minimalizovat okno" });
    await minimize.click();
    await expectRestored(page);

    await minimize.click();
    await expect(frame(page)).toHaveCount(0);
    await expect(page.getByRole("button", { name: "Otevřít archivovanou kopii" })).toBeFocused();
});

test("closing the maximized window goes back to the screenshot", async ({ page }) => {
    await maximizeButton(page).click();
    await expectMaximized(page);

    await page.getByRole("button", { name: "Zavřít archivovanou kopii" }).click();
    await expect(frame(page)).toHaveCount(0);
    await expect(maximizeButton(page)).toBeVisible();
    await expect(page.getByRole("button", { name: "Otevřít archivovanou kopii" })).toBeFocused();
});

test("on a narrow screen, the maximized copy is scaled down to fit", async ({ page }) => {
    await page.setViewportSize({ width: 400, height: 800 });
    await maximizeButton(page).click();
    await expect(restoreButton(page)).toBeVisible();
    await expect(frame(page)).toHaveAttribute("width", "800");
    await expect(frame(page)).toHaveCSS("transform", "matrix(0.5, 0, 0, 0.5, 0, 0)");
});
