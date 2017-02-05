import { MyFourthAppPage } from './app.po';

describe('my-fourth-app App', function() {
  let page: MyFourthAppPage;

  beforeEach(() => {
    page = new MyFourthAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
