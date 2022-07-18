const { defineConfig } = require("cypress");

module.exports = defineConfig({

  	

  e2e: {
    setupNodeEvents(on, config) {
      defaultCommandTimeout: 10000;
  	  pageLoadTimeout: 60000;
  
      // implement node event listeners here
    },
  },
});
