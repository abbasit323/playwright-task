import { Locator, Page } from '@playwright/test';

export class DashboardPage {
  // Reusable selectors based on stable data-testid attributes.
  readonly dashboardHeading: Locator;
  readonly welcomeMessage: Locator;
  readonly schedulePickupLink: Locator;
  readonly logoutButton: Locator;

  constructor(private readonly page: Page) {
    this.dashboardHeading = page.locator('[data-testid="dashboard-heading"]');
    this.welcomeMessage = page.locator('[data-testid="welcome-message"]');
    this.schedulePickupLink = page.locator('[data-testid="schedule-pickup-link"]');
    this.logoutButton = page.locator('[data-testid="logout-button"]');
  }

  async isLoaded(): Promise<boolean> {
    return this.dashboardHeading.isVisible();
  }

  async getWelcomeMessage(): Promise<string | null> {
    return this.welcomeMessage.textContent();
  }

  async openSchedulePickup(): Promise<void> {
    await this.schedulePickupLink.click();
  }

  async logout(): Promise<void> {
    await this.logoutButton.click();
  }
}