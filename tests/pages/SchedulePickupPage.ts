import { Locator, Page } from '@playwright/test';

export class SchedulePickupPage {
  // Stable ID and role selectors from Clean Citi Service's booking form.
  readonly serviceSelect: Locator;
  readonly phoneInput: Locator;
  readonly preferredDateInput: Locator;
  readonly preferredTimeInput: Locator;
  readonly scheduleNowButton: Locator;

  constructor(private readonly page: Page) {
    this.serviceSelect = page.locator('#service');
    this.phoneInput = page.locator('#phone');
    this.preferredDateInput = page.locator('#date');
    this.preferredTimeInput = page.locator('#time');
    this.scheduleNowButton = page.getByRole('button', {
      name: 'Schedule Now'
    });
  }

  async goto(): Promise<void> {
    await this.page.goto('https://www.cleancitiservice.com/book-now.php');
  }

  async schedulePickup(
    service: string,
    phone: string,
    date: string,
    time: string
  ): Promise<void> {
    await this.serviceSelect.selectOption({ label: service });
    await this.phoneInput.fill(phone);
    await this.preferredDateInput.fill(date);
    await this.preferredTimeInput.fill(time);
    await this.scheduleNowButton.click();
  }
}