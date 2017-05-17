import { Proyangular01Page } from './app.po';

describe('proyangular01 App', () => {
  let page: Proyangular01Page;

  beforeEach(() => {
    page = new Proyangular01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
