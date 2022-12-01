describe('Region', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../../actionwords.js').Actionwords);
  });

  it('Add two address with correct region (new user) (1)', function () {
    // TODO: Implement action: "Enter to app with new user "
    // TODO: Implement result: "Display pop up list to add address"
    // TODO: Implement action: "Add new address in correct region"
    // TODO: Implement result: "Display banners, collections, restaurant of that region"
    // TODO: Implement action: "Click on address on main page"
    // TODO: Implement result: "Display pop up list"
    // TODO: Implement action: "Click on add address"
    // TODO: Implement action: "Add new address and select it"
    // TODO: Implement result: "Display banners, collections, restaurant of that region"
    throw 'Not implemented';
  });

  it('Add two address with incorrect region (new user) (1)', function () {
    // TODO: Implement action: "Enter to app with new user"
    // TODO: Implement result: "Display pop up list"
    // TODO: Implement action: "Click on Add address"
    // TODO: Implement action: "Add address of incorrect region and select it"
    // TODO: Implement result: "Display error message that service is not working in that region"
    // TODO: Implement action: "Add another address with incorrect region select it"
    // TODO: Implement result: "Display error message that service is not working in that region"
    throw 'Not implemented';
  });

  it('Change region to correct region (1)', function () {
    // TODO: Implement action: "Enter to app and log in"
    // TODO: Implement action: "Select correct address"
    // TODO: Implement action: "Add another address of correct region"
    // TODO: Implement action: "Go to main page"
    // TODO: Implement action: "Swipe to end of list"
    // TODO: Implement action: "Select another region"
    // TODO: Implement result: "Banners, collections, restaurants must be of that region which address you selected"
    throw 'Not implemented';
  });

  it('Change region to incorrect region (1)', function () {
    // TODO: Implement action: "Enter to app and log in"
    // TODO: Implement action: "Select correct address"
    // TODO: Implement action: "Swipe to end list "
    // TODO: Implement action: "Click on address on main page"
    // TODO: Implement action: "Add new address of incorrect region"
    // TODO: Implement action: "Select it"
    // TODO: Implement result: "Display error message and ask another address"
    throw 'Not implemented';
  });

  it('Mock location with correct region (1)', function () {
    // TODO: Implement action: "Enter to mock location app"
    // TODO: Implement action: "Select correct region by fake gps"
    // TODO: Implement action: "Enter to app and log in"
    // TODO: Implement action: "Select that region what in by fake gps"
    // TODO: Implement action: "Create order "
    // TODO: Implement action: "Finish it"
    // TODO: Implement result: "App must be work correctly"
    throw 'Not implemented';
  });

  it('Mock location with incorrect region (1)', function () {
    // TODO: Implement action: "Enter to mock location app"
    // TODO: Implement action: "Select incorrect region"
    // TODO: Implement action: "Enter to app and log in successfully, if you are not logged in"
    // TODO: Implement action: "Select that address what is in fake gps"
    // TODO: Implement result: "Display error message that there is not service in that region"
    throw 'Not implemented';
  });

  it('Change address with active keyboard (1)', function () {
    // TODO: Implement action: "Enter to app and log in successfully, if you are not logged in"
    // TODO: Implement action: "Select correct address"
    // TODO: Implement action: "Go to search page"
    // TODO: Implement action: "Search exist product and click on it"
    // TODO: Implement action: "Go to main page"
    // TODO: Implement action: "Select another address"
    // TODO: Implement result: "Should be changed address"
    throw 'Not implemented';
  });

  it('Default address (1)', function () {
    // TODO: Implement action: "Enter to app and log in successfully, if you are not logged in"
    // TODO: Implement action: "Select correct address"
    // TODO: Implement action: "Create order and finish it"
    // TODO: Implement action: "Kill app and enter againg"
    // TODO: Implement result: "Display window that ask your address"
    // TODO: Implement action: "Click on No"
    // TODO: Implement result: "Should pop up list and checked correct address"
    throw 'Not implemented';
  });
});
