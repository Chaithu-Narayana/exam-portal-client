import { ExamPortalClientPage } from './app.po';

describe('exam-portal-client App', () => {
  let page: ExamPortalClientPage;

  beforeEach(() => {
    page = new ExamPortalClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
