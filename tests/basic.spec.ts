import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  // According to memory, the site header with h1 is in layout.tsx
  // We check for the name which should be unique
  await expect(page.getByRole('heading', { name: 'Francesco Chiaramonte' })).toBeVisible();
});

test('career page loads', async ({ page }) => {
  await page.goto('/career');
  await expect(page).toHaveURL(/.*career/);
});
