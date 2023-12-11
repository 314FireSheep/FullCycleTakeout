import { Selector } from 'testcafe';
import { PageIDs } from '../imports/ui/utilities/ids';

class ResultPage {
  constructor() {
    this.pageId = `#${PageIDs.resultPage}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.wait(5000);
    await testController.expect(this.pageSelector.exists).ok();
  }

  async returnOrder(testController) {
    await testController.click(Selector('#returnOrder'));
  }
}

export const resultPage = new ResultPage();
