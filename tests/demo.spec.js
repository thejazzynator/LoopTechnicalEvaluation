// @ts-check
import { test, expect } from '@playwright/test';
import { WebApplication } from './WebAppPage.js'; 
import { MobileApplication } from './MobileAppPage.js'; 
import { LogInPage } from './LogInPage.js'; 


test.beforeEach(async ({ page }) => {
  const logIn = new LogInPage(page);
  await logIn.Login('admin', 'password123')
});

test('Test Case 1', async ({ page }) => {

  const todoColumn = new WebApplication(page);
  await todoColumn.VerifyTestCaseOne();
});

test('Test Case 2', async ({ page }) => {

  const todoColumn = new WebApplication(page);
  await todoColumn.VerifyTestCaseTwo();
});

test('Test Case 3', async ({ page }) => {
  const inProgressColumn = new WebApplication(page);
  await inProgressColumn.VerifyTestCaseThree();

});

test('Test Case 4', async ({ page }) => {

  const todoColumn = new MobileApplication(page);

  await todoColumn.ClickmobileApp()
  await todoColumn.VerifyTestCaseFour();
});

test('Test Case 5', async ({ page }) => {

  const inProgressColumn =  new MobileApplication(page);
  await inProgressColumn.ClickmobileApp();
  await inProgressColumn.VerifyTestCaseFive();


});

test('Test Case 6', async ({ page }) => {

   const done = new MobileApplication(page);
   await done.ClickmobileApp();
   await done.VerifyTestCaseSix();
});
