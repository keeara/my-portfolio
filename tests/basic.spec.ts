import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  // The site header (h1) lives in layout.tsx
  await expect(page.getByRole('heading', { name: 'Francesco Chiaramonte' })).toBeVisible();
});

test('career page loads', async ({ page }) => {
  await page.goto('/career');
  await expect(page).toHaveURL(/.*career/);
});

test('projects page lists MinimalFace', async ({ page }) => {
  await page.goto('/projects');
  await expect(page.getByRole('heading', { name: 'MinimalFace' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
    'href',
    'https://github.com/keeara/MinimalFace',
  );
});
