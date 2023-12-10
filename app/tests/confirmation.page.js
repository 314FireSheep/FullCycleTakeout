import { Selector } from 'testcafe';
import { ComponentIDs, PageIDs } from '../imports/ui/utilities/ids';
import { resultPage } from './result.page';

class ConfirmationPage {
  constructor() {
    this.pageId = `#${PageIDs.confirmationPage}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Checks this page is displayed, then adds a new project */
  async confirmation(testController) {
    //await testController.wait(1000);
    await this.isDisplayed(testController);
    await testController.click(Selector('#cashBut'));
    await testController.click(Selector('.swal-button--confirm'));
    await testController.wait(5000);
  }
}

export const confirmationPage = new ConfirmationPage();
