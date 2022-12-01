describe('Order', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../../actionwords.js').Actionwords);
  });

  it('Active order (1)', function () {
    // When order is active, it should show its status at the moment.
    // TODO: Implement action: "Enter to app and log in successfully, if you are not logged in"
    // TODO: Implement action: "Select correct adress or add it"
    // TODO: Implement action: "Create order"
    // TODO: Implement action: "Go to history page"
    // TODO: Implement result: "There is tab bar with two list: actual/non-actual order"
    // TODO: Implement action: "Click on active order"
    // TODO: Implement result: "There should be map(there is location of restaurant and order), status of order, cheque of order"
    // TODO: Implement action: "Confirm that order from vendor app"
    // TODO: Implement result: "Status should be in and switch on two icons in client app"
    // TODO: Implement action: "Confirm order from courier app and take it from restaurant"
    // TODO: Implement result: "Status should be in Order is in a way and switch on three icons"
    // TODO: Implement result: "Finish order from courier app"
    // TODO: Implement result: "That order should disappear from active orders"
    throw 'Not implemented';
  });

  it('Inactive order (history) (1)', function () {
    // You can look at the past orders. There should in two statuses (success, cancel)
    // TODO: Implement action: "Enter to app and log in successfully, if you are not logged in"
    // TODO: Implement action: "Select correct adress or add it"
    // TODO: Implement action: "Create usually order and finish it success"
    // TODO: Implement action: "Go to history of orders"
    // TODO: Implement action: "Click on last order"
    // TODO: Implement result: "There should be map, status, rate, cheque, button and date of created order"
    throw 'Not implemented';
  });

  it('Order with stock product (1)', function () {
    // TODO: Implement action: "Enter to app and log in successfully, if you are not logged in"
    // TODO: Implement action: "Select correct adress or add it"
    // TODO: Implement action: "Enter to restaurant, which has stock on product"
    // TODO: Implement action: "Choose product, which has stock"
    // TODO: Implement action: "Should be right cost with stock"
    // TODO: Implement action: "Click on it and go to confirm page"
    // TODO: Implement result: "The price must calculate correct with stock"
    // TODO: Implement result: "Create order and finish it success"
    // TODO: Implement result: "Last price must be correct with stock product"
    throw 'Not implemented';
  });

  it('Order with stock on delivery (1)', function () {
    // TODO: Implement action: "Enter to app and log in successfully, if you are not logged in"
    // TODO: Implement action: "Select correct adress or add it"
    // TODO: Implement action: "Choose restaurant, that has stock on delivery"
    // TODO: Implement action: "Select  any product and go to confirm page"
    // TODO: Implement result: "There should be correct price on stock"
    // TODO: Implement action: "Finish order successfully"
    // TODO: Implement result: "Cost must be correct"
    throw 'Not implemented';
  });

  it('Order with stock on delivery and product (1)', function () {
    // TODO: Implement action: "Enter to app and log in successfully, if you are not logged in"
    // TODO: Implement action: "Select correct address"
    // TODO: Implement action: "Enter to restaurant that has stock on product and delivery"
    // TODO: Implement action: "Select that product that has stock"
    // TODO: Implement action: "Click on Make order"
    // TODO: Implement action: "Click on Continue"
    // TODO: Implement result: "There should be confirm page. In confirm page must be correct cost"
    // TODO: Implement action: "Create order and finish it success"
    // TODO: Implement result: "After finish order, there should be correct cost in history"
    throw 'Not implemented';
  });

  it('Order with promo on product (%) (1)', function () {
    // TODO: Implement action: "Create promo with % on admin panel"
    // TODO: Implement action: "Enter to app and log in"
    // TODO: Implement action: "Select correct address"
    // TODO: Implement action: "Enter to restaurant that has promo"
    // TODO: Implement action: "Click that product that has promo"
    // TODO: Implement action: "Click on Make order"
    // TODO: Implement action: "Click on Continue"
    // TODO: Implement result: "There should be button for promo"
    // TODO: Implement action: "Click on promo button"
    // TODO: Implement action: "Enter the correct promo code"
    // TODO: Implement action: "Click on Apply"
    // TODO: Implement result: "Open confirm page with new price"
    // TODO: Implement result: "It should correct count price on product"
    // TODO: Implement action: "Click on Confirm"
    // TODO: Implement action: "Finish order successfully"
    // TODO: Implement result: "The price should be correct according to promo"
    throw 'Not implemented';
  });

  it('Order with promo on delivery (%) (1)', function () {
    // TODO: Implement action: "Create promo on delivery from admin panel"
    // TODO: Implement action: "Enter to app and log in"
    // TODO: Implement action: "Select correct address"
    // TODO: Implement action: "Enter to that restaurant that has promo"
    // TODO: Implement action: "Add that product that has promo"
    // TODO: Implement action: "Click on Make order"
    // TODO: Implement action: "Click on Continue"
    // TODO: Implement result: "Should be button for promo "
    // TODO: Implement action: "Click on Add promo"
    // TODO: Implement result: "Open promo dialog"
    // TODO: Implement action: "Enter correct promo"
    // TODO: Implement action: "Click on apply"
    // TODO: Implement result: "Open confirm page with new price on delivey"
    // TODO: Implement action: "Click on Confirm"
    // TODO: Implement action: "Finish order successfully"
    // TODO: Implement result: "The price must be correct according to promo"
    throw 'Not implemented';
  });

  it('Order with promo to another product (%) (1)', function () {
    // TODO: Implement action: "Create promo from admin panel"
    // TODO: Implement action: "Enter to app and log in"
    // TODO: Implement action: "Select correct address"
    // TODO: Implement action: "Enter to that restaurant that has promo"
    // TODO: Implement action: "Add that product that has not promo"
    // TODO: Implement action: "Click on Make order"
    // TODO: Implement result: "Should be only that product that has not promo"
    // TODO: Implement action: "Click on Continue"
    // TODO: Implement action: "Open confirm page. Should be button for promo"
    // TODO: Implement action: "Click on Add promo"
    // TODO: Implement result: "Open promo dialog"
    // TODO: Implement action: "Enter correct promo"
    // TODO: Implement action: "Click on Apply"
    // TODO: Implement result: "Display error message and stay on that dialog"
    throw 'Not implemented';
  });

  it('Order with another restaurant (%) (1)', function () {
    // TODO: Implement action: "Create promo from admin panel"
    // TODO: Implement action: "Enter to app and log in"
    // TODO: Implement action: "Select correct address"
    // TODO: Implement action: "Enter to that restaurant that has not promo"
    // TODO: Implement action: "Add any product "
    // TODO: Implement action: "Click on Make order"
    // TODO: Implement action: "Click on Continue"
    // TODO: Implement result: "Open confirm page. There should be button for promo"
    // TODO: Implement action: "Click on Add promo"
    // TODO: Implement result: "Open promo dialog"
    // TODO: Implement action: "Enter correct promo"
    // TODO: Implement action: "Click on Aplly"
    // TODO: Implement result: "Display error message and stay on that dialog"
    throw 'Not implemented';
  });

  it('Order with wrong promo on correct product (1)', function () {
    // TODO: Implement action: "Create promo from admin panel"
    // TODO: Implement action: "Enter to app and log in"
    // TODO: Implement action: "Select correct address"
    // TODO: Implement action: "Enter to restaurant that has promo"
    // TODO: Implement action: "Add that product that has promo"
    // TODO: Implement action: "Click on Make order"
    // TODO: Implement action: "Click on Continue"
    // TODO: Implement result: "Open confirm page. There should be button for promo "
    // TODO: Implement action: "Click on Add promo "
    // TODO: Implement result: "Open dialog of promo"
    // TODO: Implement action: "Enter incorrect promo"
    // TODO: Implement action: "Click on Apply"
    // TODO: Implement result: "Display error message and stay on that dialog"
    throw 'Not implemented';
  });

  it('Order with not actual promo (expiration) (1)', function () {
    // TODO: Implement action: "Create promo from admin panel with old date "
    // TODO: Implement action: "Enter to app and log in"
    // TODO: Implement action: "Select correct address"
    // TODO: Implement action: "Enter to restaurant that has promo"
    // TODO: Implement action: "Add that product that has promo"
    // TODO: Implement action: "Click on Make order"
    // TODO: Implement action: "Click on Continue"
    // TODO: Implement result: "Open confirm page. There should be button for promo"
    // TODO: Implement action: "Click on Add promo"
    // TODO: Implement result: "Open promo dialog"
    // TODO: Implement action: "Enter correct promo"
    // TODO: Implement action: "Click on Apply"
    // TODO: Implement result: "Display error message and stay on that dialog"
    throw 'Not implemented';
  });

  it('Order with some products on promo (1)', function () {
    // TODO: Implement action: "Create promo from admin panel on one product "
    // TODO: Implement action: "Enter to app and log in "
    // TODO: Implement action: "Select correct address"
    // TODO: Implement action: "Enter to restaurant that has promo"
    // TODO: Implement action: "Add product that has promo"
    // TODO: Implement action: "Add product that has not promo"
    // TODO: Implement action: "Click on Make order"
    // TODO: Implement action: "Click on Continue"
    // TODO: Implement result: "Open confirm page with button on promo"
    // TODO: Implement action: "Click on Add promo"
    // TODO: Implement result: "Open dialog of promo"
    // TODO: Implement action: "Enter correct promo"
    // TODO: Implement action: "Click on Apply"
    // TODO: Implement result: "Open confirm page with correct price"
    // TODO: Implement result: "The promo should be work only on that product that ha promo"
    // TODO: Implement action: "Create order"
    // TODO: Implement action: "Finish it successfully"
    // TODO: Implement result: "The price should be correct according to promo"
    throw 'Not implemented';
  });

  it('Order with card that has enough money (1)', function () {
    // TODO: Implement action: "Enter to app and log in"
    // TODO: Implement action: "Select correct address"
    // TODO: Implement action: "Add card with enough money"
    // TODO: Implement action: "Enter to any restaurant"
    // TODO: Implement action: "Add any product"
    // TODO: Implement action: "Click on Make order"
    // TODO: Implement action: "Click on Continue"
    // TODO: Implement result: "Open confirm page. There should be button for choose payment type"
    // TODO: Implement action: "Click on Payment type"
    // TODO: Implement action: "Click on Card"
    // TODO: Implement result: "Should be chosen card type "
    // TODO: Implement action: "Select card"
    // TODO: Implement action: "Click on Confirm"
    // TODO: Implement result: "Should display animation in a few seconds, then created order"
    // TODO: Implement action: "Finish order successfully"
    // TODO: Implement result: "Order must be finish"
    throw 'Not implemented';
  });

  it('Order with card with doesn\'t have enough money (1)', function () {
    // TODO: Implement action: "Enter to app and log in"
    // TODO: Implement action: "Select correct address"
    // TODO: Implement action: "Add card that has not enough money"
    // TODO: Implement action: "Enter to any restaurant "
    // TODO: Implement action: "Add any product"
    // TODO: Implement action: "Click on Make order"
    // TODO: Implement action: "Click on Continue"
    // TODO: Implement result: "Open confirm page"
    // TODO: Implement action: "Click on Payment type"
    // TODO: Implement action: "Click card"
    // TODO: Implement action: "Select card"
    // TODO: Implement action: "Click on Confirm"
    // TODO: Implement result: "Should be animation for a few seconds, then display error mesage"
    throw 'Not implemented';
  });

  it('Order with 0 som (1)', function () {
    // TODO: Implement action: "Enter to app and log in"
    // TODO: Implement action: "Select correct address"
    // TODO: Implement action: "Enter to any restaurant"
    // TODO: Implement result: "Internet should be slow"
    // TODO: Implement action: "Click on any product that has some options, but native cost is 0 som"
    // TODO: Implement action: "Click on Add quickly"
    // TODO: Implement action: "Click on Make order"
    // TODO: Implement action: "Should be option and real cost (not 0)"
    // TODO: Implement action: "Click on Continue"
    // TODO: Implement result: "Should be cost correctly"
    // TODO: Implement action: "Click on Confirm"
    // TODO: Implement result: "Should created order with correct cost"
    // TODO: Implement action: "Finish order successfully"
    // TODO: Implement result: "Should finish order correctly without 0 som"
    throw 'Not implemented';
  });

  it('Promo with wrong and correct (1)', function () {
    // TODO: Implement action: "Create promo from admin panel"
    // TODO: Implement action: "Enter to app and log in successfully, if you are not logged in"
    // TODO: Implement action: "Enter to that restaurant that has promo"
    // TODO: Implement action: "Add that product that has product"
    // TODO: Implement action: "Go to confirm page"
    // TODO: Implement result: "Should be button to add promo"
    // TODO: Implement action: "Enter wrong promo"
    // TODO: Implement result: "Display error message"
    // TODO: Implement action: "Immediately enter correct promo"
    // TODO: Implement result: "Display success message"
    throw 'Not implemented';
  });
});
