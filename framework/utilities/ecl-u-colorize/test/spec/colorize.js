describe('colorize', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 600,
      height: 800,
    });

    // Go to url
    browser.url(`ecl-u-colorize.html`);
    // Make sure the browser has finished painting
    browser.pause(500);
  });

  // Normal state
  context('with plain state', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({ name: 'colorize' });
      expect(screenshots).to.matchReference();
    });
  });
});
