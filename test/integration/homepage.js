'use strict';
const assert = require('assert');
// const webdriver = require('selenium-webdriver');


describe('Welcome page, button functionality', function(){
    browser.url('/');

  it('should be able to grab the page title', function(){
  	var title = browser.getTitle();
  	assert.equal(title, 'Pomodoro');
  });
});
//   it('should have a paragraph tag to display the remaining countdown time', function() {
//     var timer = browser.element('.display-count-down');
//     assert(timer.isExisting(''));
//   });
//
//   // it('timer button should not have class pause on game start', function() {
//   //   var buttonStatus = browser.isEnabled('#start-button');
//   //   assert.equal(buttonStatus, true);
//   // });
//
//   // it('pause button should be disabled on game start', function() {
//   //   var buttonStatus = browser.isEnabled('#pause-button');
//   //   assert.equal(buttonStatus, false);
//   // });
//
//   it('start button should be hidden on click of start button', function() {
//     browser.click('.start-button');
//     assert.equal(('.start-button').isDisplayed(), false);
//   });
//
//   it('pause button should be hidden on click of pause button', function() {
//     browser.click('.pause-button');
//     assert.isVisible('.pause-button');
//   });
//
//   it('resume button should be hidden on click of resume button', function() {
//     browser.click('.resume-button');
//     assert.property(('.resume-button').hide(), true);
//   });
//
//   it('pause button enabled on click of start button', function() {
//     browser.click('.start-button');
//     var buttonStatus = browser.isEnabled('.pause-button');
//     assert.equal(buttonStatus, true);
//   });
//
//   it('should have an input for setting break time', function() {
//     var pomodoroTimeInput = browser.element('#focus-time-input');
//     assert(pomodoroTimeInput.isExisting(''));
//   });
//
//   it('should have an input for setting break time', function() {
//     var breakTimeInput = browser.element('#break-time-input');
//     assert(breakTimeInput.isExisting(''));
//   });
//
//   it('should register the value of the input for setting pomodoro focus time', function() {
//     var pomodoroTimeInput = browser.element('#focus-time-input');
//     pomodoroTimeInput.setValue(25);
//     assert.equal(pomodoroTimeInput.getValue(), 25);
//   });
//
//   it('should register the value of the input for setting pomodoro break time', function() {
//     var breakTimeInput = browser.element('#break-time-input');
//     breakTimeInput.setValue(5);
//     assert.equal(breakTimeInput.getValue(), 5);
//   });
// });
