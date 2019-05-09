
import { CourseModulePage } from './app.po';

describe('course-module App', () => {
  let page: CourseModulePage;

  beforeEach(() => {
    page = new CourseModulePage();
  });

  it('should display message asking user to select a task', () => {
    page.navigateTo();
    expect(page.getContent().getText()).toEqual('Select a task from the left.');
  });

  it('should open a task', function() {
    page.navigateTo();

    page.selectTask(1);

    expect(page.getAppModuleDetailTitle()).toEqual("Task 1: Crash Course on Accounting");
    expect(page.hasAnswerBox()).toBeTruthy()
  });
});
