const {Given, Then, When, Before} = require('@cucumber/cucumber');
const { assert } = require('nightwatch');

Given('I open flipkart home page', async function() {
    //browser.window.maximize();
    await browser.url('https://www.flipkart.com/');
    await browser.waitForElementVisible('._2KpZ6l._2doB4z').click('._2KpZ6l._2doB4z');
    
  });

  When('I search for {string}', async function(searchTerm) {
     await browser.waitForElementVisible('._3OO5Xc ._3704LK',15000)
    .setValue('._3OO5Xc ._3704LK', [searchTerm, browser.Keys.ENTER]);
  });

  Then('Verify {string} is displayed in results',async function(expectedValue) {
     allElements=  await browser.waitForElementVisible('._13oc-S ._4rR01T')
    //.findElements('._13oc-S ._4rR01T')
    .assert.textContains('._13oc-S ._4rR01T',expectedValue);
    //  console.log(result.value)
     
    //  await allElements.forEach(function(element) {
    //  //console.log( element.getText());
    //     browser.elementIdText(element.getId(), function(textResult) {
    //       const text = textResult.value;
    //       browser.assert.textContains(text,expectedValue);
    //     });
    //   });
  });
  