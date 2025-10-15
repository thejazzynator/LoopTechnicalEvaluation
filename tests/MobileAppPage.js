import { expect } from '@playwright/test';

export class MobileApplication {
    constructor(page) {
        this.page = page;
        this.toDoColumn = page.locator('div:has(> h2:text("To Do"))');
        this.inProgressColumn = page.locator('div:has(> h2:text("In Progress (1)"))');
        this.doneColumn = page.locator('div:has(> h2:text("Done (1)"))');
        this.mobileApp = page.getByRole('button', { name: 'Mobile Application Native mobile app development' });
        this.banner = page.getByRole('banner').getByRole('heading', { name: 'Mobile Application' });
    }

    async ClickmobileApp() {
        await expect(this.mobileApp).toBeVisible();
        await this.mobileApp.click();
    }

    async VerifyTestCaseFour() {
        await expect(this.banner).toBeVisible();
        await expect(this.toDoColumn.getByRole('heading', { level: 2, name: 'To Do (1)' })).toBeVisible();
        await expect(this.toDoColumn.getByRole('heading', { level: 3, name: 'Push notification system' })).toBeVisible();
        await expect(this.toDoColumn.getByText('Feature')).toBeVisible();
        await expect(this.toDoColumn.getByText('High Priority')).toHaveCount(0);
    }
    async VerifyTestCaseFive() {
        await expect(this.banner).toBeVisible();
        await expect(this.inProgressColumn.getByRole('heading', { level: 2, name: 'In Progress (1)' })).toBeVisible();
        await expect(this.inProgressColumn.getByRole('heading', { level: 3, name: 'Offline mode' })).toBeVisible();
        await expect(this.inProgressColumn.getByText('Feature')).toBeVisible();
        await expect(this.inProgressColumn.getByText('High Priority')).toBeVisible();
        await expect(this.inProgressColumn.getByText('Design').first()).toHaveCount(0);
    }

    async VerifyTestCaseSix() {
        await expect(this.banner).toBeVisible();
        await expect(this.doneColumn.getByRole('heading', { level: 2, name: 'Done (1)' })).toBeVisible();
        await expect(this.doneColumn.getByRole('heading', { level: 3, name: 'App icon design' })).toBeVisible();
        await expect(this.doneColumn.getByText('Design').first()).toBeVisible();
        await expect(this.toDoColumn.getByText('High Priority')).toHaveCount(0);
    }
}