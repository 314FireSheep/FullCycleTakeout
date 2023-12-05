import { Selector } from 'testcafe';
import { ComponentIDs, PageIDs } from '../imports/ui/utilities/ids';

class SearchPage {
  constructor() {
    this.pageId = `#${PageIDs.searchPage}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Checks this page is displayed, then adds a new project */
  async search(testController, searchValue) {
    await this.isDisplayed(testController);
    await testController.typeText(`#${ComponentIDs.searchForm}`, searchValue);
    await testController.click(Selector('#searchBut'));
    await testController.wait(6000);
  }
}

export const searchPage = new SearchPage();
