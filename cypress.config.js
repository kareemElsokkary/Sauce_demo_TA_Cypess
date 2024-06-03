//const { defineConfig } = require('cypress');
module.exports = {
viewportHeight:1000,
viewportWidth:1620,
chromeWebSecurity: false,
video:false,

  e2e: {
    CYPRESS_CACHE_DISABLED: true,
 baseUrl:'https://www.saucedemo.com',
 // excludeSpecPattern: ['**/1-getting-started','**/2-advanced-examples'],
  specPattern:'cypress/e2e/**/*.{js,jsx,ts,tsx}',
 //   specPattern:'cypress/e2e/**/*.*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
