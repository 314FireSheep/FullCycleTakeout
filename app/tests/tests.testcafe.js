import { Selector } from 'testcafe';
import { landingPage } from './landing.page';
import { signInPage } from './signin.page';
import { signOutPage } from './signout.page';
import { navBar } from './navbar.component';
import { searchPage } from './search.page';
import { resultPage } from './result.page';
import { orderPage } from './order.page';
import { historyPage } from './history.page';
import { returnPage } from './return.page';
/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', adminUser: 'admin@foo.com', password: 'changeme' };
const testid = { id: 'ad69woXDwujkQzb4e' };

fixture('FireSheep localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signInPage.signin(testController, credentials.username, credentials.password);
  await navBar.logout(testController);
  await signOutPage.isDisplayed(testController);
});

test('Test that order creation process works along with pages with it', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signInPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoOrderPage(testController);
  await orderPage.confirmation(testController);
  await orderPage.confirmationSecond(testController);
  await resultPage.isDisplayed(testController);
  await navBar.gotoHistoryPage(testController);
  await historyPage.isDisplayed(testController);
});

test('Test that search page works and functions', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signInPage.signin(testController, credentials.adminUser, credentials.password);
  await navBar.gotoSearchPage(testController);
  await searchPage.search(testController, testid.id);
});

test('Test that return page and function works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signInPage.signin(testController, credentials.adminUser, credentials.password);
  await navBar.gotoSearchPage(testController);
  const firstTdFirstTr = Selector('tbody tr:first-child td:first-child').innerText;
  const text = await firstTdFirstTr;
  await searchPage.search(testController, text);
  await returnPage.isDisplayed(testController);
  await returnPage.returnOrder(testController);
});
