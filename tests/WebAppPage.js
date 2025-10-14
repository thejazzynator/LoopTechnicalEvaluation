import { expect } from '@playwright/test';

export class WebApplication {
    constructor(page) {
        this.page = page;
        this.toDoColumn = page.locator('div:has(> h2:text("To Do"))');
        this.inProgressColumn = page.locator('div:has(> h2:text("In Progress (1)"))');
        this.banner = page.getByRole('banner').getByRole('heading', { name: 'Web Application' });

    }

    async VerifyTestCaseOne() {
        await expect(this.banner).toBeVisible();
        await expect(this.toDoColumn.getByRole('heading', { level: 2, name: 'To Do (2)' })).toBeVisible();
        await expect(this.toDoColumn.getByRole('heading', { level: 3, name: 'Implement user authentication' })).toBeVisible();
        await expect(this.toDoColumn.getByText('Feature')).toBeVisible();
        await expect(this.toDoColumn.getByText('High Priority')).toBeVisible();
    }
    async VerifyTestCaseTwo() {
        await expect(this.banner).toBeVisible();
        await expect(this.toDoColumn.getByRole('heading', { level: 2, name: 'To Do (2)' })).toBeVisible();
        await expect(this.toDoColumn.getByRole('heading', { level: 3, name: 'Fix navigation bug' })).toBeVisible();
        await expect(this.toDoColumn.getByText('Bug').first()).toBeVisible();
    }

    async VerifyTestCaseThree() {
        //await expect(this.banner).toBeVisible();
        await expect(this.inProgressColumn.getByRole('heading', { level: 2, name: 'In Progress (1)' })).toBeVisible();
        await expect(this.inProgressColumn.getByRole('heading', { level: 3, name: 'Design system updates' })).toBeVisible();
        await expect(this.inProgressColumn.getByText('Design').first()).toBeVisible();
    }
}