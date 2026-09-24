import { expect, test } from '@playwright/test';
import testData from './fixtures/testData.json';
import { DashboardPage } from './pages/DashboardPage';
import { LoginPage } from './pages/LoginPage';

const loginUrl = process.env.LOGIN_URL;

test.skip(!loginUrl, 'LOGIN_URL environment variable is required.');

test('valid user logs in using fixture data', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goto(loginUrl!);

  await loginPage.login(
    testData.login.valid.username,
    testData.login.valid.password
  );

  await expect(dashboardPage.dashboardHeading).toBeVisible();
});