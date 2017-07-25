import { SupFrontEndPage } from './app.po';

describe('sup-front-end App', () => {
  let page: SupFrontEndPage;

  beforeEach(() => {
    page = new SupFrontEndPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
