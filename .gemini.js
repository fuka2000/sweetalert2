module.exports = {
  rootUrl: 'https://limonte.github.io/sweetalert2/',
  gridUrl: 'http://127.0.0.1:4444/wd/hub',
  screenshotsDir: './test/gemini/screens',

  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
}
