import { BigideaPage } from './app.po';

describe('bigidea App', function() {
  let page: BigideaPage;

  beforeEach(() => {
    page = new BigideaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
