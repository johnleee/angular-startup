import { AngularStartupPage } from './app.po';

describe('angular-startup App', () => {
  let page: AngularStartupPage;

  beforeEach(() => {
    page = new AngularStartupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
