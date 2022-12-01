describe('Payment card', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../../actionwords.js').Actionwords);
  });

  it('Add correct not exist card from menu (2)', function () {
    // TODO: Implement action: "Enter to app and log in"
    // TODO: Implement action: "Select correct address"
    // TODO: Implement action: "Go to menu of profile"
    // TODO: Implement action: "Go to menu of cards"
    // TODO: Implement result: "Should display cards if you have"
    // TODO: Implement action: "Click on Add"
    // TODO: Implement result: "Open adding card page"
    // TODO: Implement action: "Enter correct data of card"
    // TODO: Implement action: "Click on Continue"
    // TODO: Implement result: "Open OTP page"
    // TODO: Implement action: "Click correct otp code"
    // TODO: Implement action: "Click on Add"
    // TODO: Implement result: "Should added that card and go to menu of cards"
    throw 'Not implemented';
  });

  it('Add incorrect not exist card from menu (2)', function () {
    // TODO: Implement action: "Enter to app and log in"
    // TODO: Implement action: "Select correct adress"
    // TODO: Implement action: "Go to menu profile"
    // TODO: Implement action: "Go to menu of cards"
    // TODO: Implement action: "Click on Add"
    // TODO: Implement action: "Enter incorrect data of card"
    // TODO: Implement action: "Click on Continue"
    // TODO: Implement result: "Should display error message and stay on that page"
    throw 'Not implemented';
  });

  it('Enter incorrect otp code with not exist card (2)', function () {
    // TODO: Implement action: "Enter to app and log in"
    // TODO: Implement action: "Select correct adress"
    // TODO: Implement action: "Go to menu of profile"
    // TODO: Implement action: "Go to menu of cards"
    // TODO: Implement result: "Should be list of your cards if you have"
    // TODO: Implement action: "Click on Add"
    // TODO: Implement result: "Open adding card page"
    // TODO: Implement action: "Enter correct data of card"
    // TODO: Implement action: "Click on Continue"
    // TODO: Implement result: "Open otp page"
    // TODO: Implement action: "Enter incorrect otp code"
    // TODO: Implement result: "Display error message and stay on that page"
    throw 'Not implemented';
  });

  it('Add exist card from menu of profile (2)', function () {
    // TODO: Implement action: "Enter to app and log in"
    // TODO: Implement action: "Select correct adress"
    // TODO: Implement action: "Go to menu of profile"
    // TODO: Implement action: "Go to menu of cards"
    // TODO: Implement result: "Open list of cards if you have"
    // TODO: Implement action: "Click on Add"
    // TODO: Implement result: "Open adding card page"
    // TODO: Implement action: "Enter correct data of card, that doesn't exist"
    // TODO: Implement action: "Click on Continue"
    // TODO: Implement result: "Open otp page"
    // TODO: Implement action: "Enter correct otp code"
    // TODO: Implement action: "Click on Add"
    // TODO: Implement result: "Should be added that card and open menu of cards"
    // TODO: Implement action: "Click on Add"
    // TODO: Implement action: "Enter data of that card what you added before"
    // TODO: Implement action: "Click on Continue"
    // TODO: Implement result: "Display error message. that card is exist and stay on that page"
    throw 'Not implemented';
  });

  it('Add not exist card from order page (2)', function () {
    // TODO: Implement action: "Enter to app and log in"
    // TODO: Implement action: "Select correct address "
    // TODO: Implement action: "Enter to any restaurant "
    // TODO: Implement result: "Open restaurant page"
    // TODO: Implement action: "Add any product"
    // TODO: Implement action: "Click on Create product"
    // TODO: Implement result: "Go to previous page before confirm order"
    // TODO: Implement action: "Click on Continue"
    // TODO: Implement result: "Open Confirm page"
    // TODO: Implement action: "Click on Payment type"
    // TODO: Implement result: "Display pop up list with cards, if you have"
    // TODO: Implement action: "Click on Add new card"
    // TODO: Implement result: "Open adding card page"
    // TODO: Implement action: "Enter correct not exist card info"
    // TODO: Implement result: "Click on Continue"
    // TODO: Implement action: "Enter correct OTP code"
    // TODO: Implement action: "Click on Continue"
    // TODO: Implement result: "Go to confirm page of order and display successfuly"
    throw 'Not implemented';
  });

  it('Delete card (2)', function () {
    // TODO: Implement action: "Enter to app and log in"
    // TODO: Implement action: "Select correct address"
    // TODO: Implement action: "Go to menu of profile"
    // TODO: Implement action: "Go to menu of cards"
    // TODO: Implement action: "Add any exist card"
    // TODO: Implement result: "Should be in list on menu of cards"
    // TODO: Implement action: "Click on \"x\" "
    // TODO: Implement result: "Display dialog to confirm to delete"
    // TODO: Implement action: "Click on Delete"
    // TODO: Implement result: "Must be deleted and stay on that page"
    throw 'Not implemented';
  });
});
