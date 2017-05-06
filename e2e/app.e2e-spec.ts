import { KendoChartsPage } from './app.po';

describe('kendo-charts App', () => {
  let page: KendoChartsPage;

  beforeEach(() => {
    page = new KendoChartsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
