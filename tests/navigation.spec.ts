import { test, expect } from '@playwright/test';

test.describe('Navigation and UI', () => {
  test('should navigate between Home and Career', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Check Home page content
    await expect(page.getByRole('heading', { name: 'About me' })).toBeVisible();

    // Navigate to Career
    await page.getByRole('link', { name: 'Career' }).click();
    await expect(page).toHaveURL(/.*career/);

    // Check Career page content
    await expect(page.getByRole('heading', { name: 'Ongoing Job' })).toBeVisible();

    // Navigate back to About me
    await page.getByRole('link', { name: 'About me' }).click();
    await expect(page).toHaveURL(/http:\/\/localhost:3000\/?$/);
    await expect(page.getByRole('heading', { name: 'About me' })).toBeVisible();
  });

  test('should have working social links', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const linkedinLink = page.getByRole('link', { name: 'LinkedIn' });
    await expect(linkedinLink).toBeVisible();
    await expect(linkedinLink).toHaveAttribute('href', /linkedin.com/);
    await expect(linkedinLink).toHaveAttribute('target', '_blank');
  });
});
