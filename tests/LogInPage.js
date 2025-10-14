import { expect } from '@playwright/test';

export class LogInPage {
    constructor(page) {
        this.page = page;
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.userNameInput = page.getByRole('textbox', { name: 'Username' });
        this.signInButton = page.getByRole('button', { name: 'Sign in' });
        this.projects = page.getByRole('heading', { name: 'Projects' })
    }

    async Login(userName, password) {
        await this.page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
        await this.userNameInput.fill(userName);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
        await expect(this.projects).toBeVisible();
    }
}