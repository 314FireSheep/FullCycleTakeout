import { Selector } from 'testcafe';
import { PageIDs } from '../imports/ui/utilities/ids';

class OrderPage {
  constructor() {
    this.pageId = `#${PageIDs.orderPage}`;
    this.pageID2 = `#${PageIDs.confirmationPage}`;
    this.pageSelector = Selector(this.pageId);
    this.pageSelector2 = Selector(this.pageID2);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async isDisplayedSecond(testController) {
    await testController.expect(this.pageSelector2.exists).ok();
  }

  //
  // /** Checks this page is displayed, then adds a new project */
  // async addProject(testController) {
  //   const name = `radgrad-${new Date().getTime()}`;
  //   const picture = 'https://www.radgrad.org/img/radgrad_logo.png';
  //   const homepage = 'https://radgrad.org';
  //   const description = 'Growing awesome computer scientists, one graduate at a time.';
  //   await this.isDisplayed(testController);
  //   // Define the new project
  //   await testController.typeText(`#${ComponentIDs.addProjectFormName}`, name);
  //   await testController.typeText(`#${ComponentIDs.addProjectFormPicture}`, picture);
  //   await testController.typeText(`#${ComponentIDs.addProjectFormHomePage}`, homepage);
  //   await testController.typeText(`#${ComponentIDs.addProjectFormDescription}`, description);
  //
  //   // Select two interests.
  //   const interestsSelector = Selector(`#${ComponentIDs.addProjectFormInterests} div.form-check input`);
  //   await testController.click(interestsSelector.nth(0));
  //   await testController.click(interestsSelector.nth(8));
  //
  //   await testController.click(`#${ComponentIDs.addProjectFormSubmit} input.btn.btn-primary`);
  //   await testController.click(Selector('.swal-button--confirm'));
  // }
  async confirmation(testController) {
    await this.isDisplayed(testController);
    await testController.click(Selector('#orderBut'));
  }

  async confirmationSecond(testController) {
    await this.isDisplayedSecond(testController);
    await testController.click(Selector('#cashBut'));
    await testController.click(Selector('.swal-button--confirm'));
  }
}

export const orderPage = new OrderPage();
