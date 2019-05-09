import { browser, by, element, ExpectedConditions } from 'protractor';

export class CourseModulePage {
  navigateTo() {
    return browser.get('/');
  }

  getContent() {
    return element(by.id('content'));
  }

  getAppModuleDetailTitle() {
    return element(by.css("#content app-moduledetail h1")).getText();
  }

  hasAnswerBox() {
    return element(by.css("#content app-moduledetail textarea")).isPresent();
  }

  selectTask(n: number) {
    var task = element(by.css(`#sidebar .module li:nth-of-type(${n}) span`));
    task.click();

    var waitFor = element(by.css('#content h1'));
    browser.wait(ExpectedConditions.presenceOf(waitFor), 5000, 'Element taking too long to appear in the DOM');
  }
}
