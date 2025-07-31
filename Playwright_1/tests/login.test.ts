import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa.app.psynap-sys.com/auth/login');
  await page.getByRole('textbox', { name: 'Email' }).click({
    modifiers: ['ControlOrMeta']
  });
   await page.getByRole('textbox', { name: 'Organization' }).fill(' test');
  await page.getByRole('textbox', { name: 'Email' }).fill('sainath.gaikwad+4@thinkitive.com');
  await page.getByRole('textbox', { name: 'Organization' }).click();
   await page.getByRole('textbox', { name: 'Password' }).click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByRole('textbox', { name: 'Password' }).fill('Sai1234#');
  await page.getByRole('button', { name: 'Sign In' }).click();
});