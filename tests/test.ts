import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	// There's possibly a zero width em dash in "Československý", hence the regex
	await expect(page.getByRole('heading', { name: /Česko.?slovenský herní archiv/ })).toBeVisible();
});

test('feed.xml loads without error', async ({ page }) => {
	const response = await page.goto('/feed.xml');
	expect(response?.status()).toBe(200);
});