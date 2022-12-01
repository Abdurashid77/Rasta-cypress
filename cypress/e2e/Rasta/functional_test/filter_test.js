describe('Filter', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../../actionwords.js').Actionwords);
  });

  it('Filter by company category in home page (1)', function () {
    // Given Open rasta client app
    this.actionwords.openRastaClientApp();
    // When login with existing phone number
    this.actionwords.loginWithExistingPhoneNumber();
    // And enter correct OTP
    this.actionwords.enterCorrectOTP();
    // And Select correct adress or add it
    this.actionwords.selectCorrectAdressOrAddIt();
    // Then should open home page and show all restaurants by region
    this.actionwords.shouldOpenHomePageAndShowAllRestaurantsByRegion();
    // When filter by one category
    this.actionwords.filterByOneCategory();
    // Then restaurants should be filtered by selected category
    this.actionwords.restaurantsShouldBeFilteredBySelectedCategory();
    // And should show filtered restaurants count
    this.actionwords.shouldShowFilteredRestaurantsCount();
  });

  it('Filter by multiple company categories in home page (1)', function () {
    // Given Open rasta client app
    this.actionwords.openRastaClientApp();
    // When login with existing phone number
    this.actionwords.loginWithExistingPhoneNumber();
    // And enter correct OTP
    this.actionwords.enterCorrectOTP();
    // And Select correct adress or add it
    this.actionwords.selectCorrectAdressOrAddIt();
    // Then should open home page and show all restaurants by region
    this.actionwords.shouldOpenHomePageAndShowAllRestaurantsByRegion();
    // When filter by multiple category
    this.actionwords.filterByMultipleCategory();
    // Then restaurants should be filtered by selected categories
    this.actionwords.restaurantsShouldBeFilteredBySelectedCategories();
    // And should show filtered restaurants count
    this.actionwords.shouldShowFilteredRestaurantsCount();
  });

  it('Filter by delivery-time in home page (1)', function () {
    // Given Open rasta client app
    this.actionwords.openRastaClientApp();
    // When login with existing phone number
    this.actionwords.loginWithExistingPhoneNumber();
    // And enter correct OTP
    this.actionwords.enterCorrectOTP();
    // And Select correct adress or add it
    this.actionwords.selectCorrectAdressOrAddIt();
    // Then should open home page and show all restaurants by region
    this.actionwords.shouldOpenHomePageAndShowAllRestaurantsByRegion();
    // When filter by delivery time
    this.actionwords.filterByDeliveryTime();
    // Then restaurants should be filtered by selected delivery-time
    this.actionwords.restaurantsShouldBeFilteredBySelectedDeliverytime();
    // And should show filtered restaurants count
    this.actionwords.shouldShowFilteredRestaurantsCount();
  });

  it('Filter by delivery-time&category in home page (1)', function () {
    // Given Open rasta client app
    this.actionwords.openRastaClientApp();
    // When login with existing phone number
    this.actionwords.loginWithExistingPhoneNumber();
    // And enter correct OTP
    this.actionwords.enterCorrectOTP();
    // And Select correct adress or add it
    this.actionwords.selectCorrectAdressOrAddIt();
    // Then should open home page and show all restaurants by region
    this.actionwords.shouldOpenHomePageAndShowAllRestaurantsByRegion();
    // When filter by delivery time
    this.actionwords.filterByDeliveryTime();
    // And select company category
    this.actionwords.selectCompanyCategory();
    // Then restaurants should be filtered by selected delivery-time and company category
    this.actionwords.restaurantsShouldBeFilteredBySelectedDeliverytimeAndCompanyCategory();
    // And should show filtered restaurants count
    this.actionwords.shouldShowFilteredRestaurantsCount();
  });

  it('Filter by company category in search page (1)', function () {
    // Given Open rasta client app
    this.actionwords.openRastaClientApp();
    // When login with existing phone number
    this.actionwords.loginWithExistingPhoneNumber();
    // And enter correct OTP
    this.actionwords.enterCorrectOTP();
    // And Select correct adress or add it
    this.actionwords.selectCorrectAdressOrAddIt();
    // Then should open home page and show all restaurants by region
    this.actionwords.shouldOpenHomePageAndShowAllRestaurantsByRegion();
    // When go to the search page
    this.actionwords.goToTheSearchPage();
    // And filter by one category
    this.actionwords.filterByOneCategory();
    // Then restaurants should be filtered by selected category
    this.actionwords.restaurantsShouldBeFilteredBySelectedCategory();
  });

  it('Filter by products category in restaurant page (1)', function () {
    // Given Open rasta client app
    this.actionwords.openRastaClientApp();
    // When login with existing phone number
    this.actionwords.loginWithExistingPhoneNumber();
    // And enter correct OTP
    this.actionwords.enterCorrectOTP();
    // And Select correct adress or add it
    this.actionwords.selectCorrectAdressOrAddIt();
    // Then should open home page and show all restaurants by region
    this.actionwords.shouldOpenHomePageAndShowAllRestaurantsByRegion();
    // When go to the restaurant page
    this.actionwords.goToTheRestaurantPage();
    // And select products category
    this.actionwords.selectProductsCategory();
    // Then should be scroll down to products list by selected category
    this.actionwords.shouldBeScrollDownToProductsListBySelectedCategory();
  });

  it('Filter by products category from list in restaurant page (1)', function () {
    // Given Open rasta client app
    this.actionwords.openRastaClientApp();
    // When login with existing phone number
    this.actionwords.loginWithExistingPhoneNumber();
    // And enter correct OTP
    this.actionwords.enterCorrectOTP();
    // And Select correct adress or add it
    this.actionwords.selectCorrectAdressOrAddIt();
    // Then should open home page and show all restaurants by region
    this.actionwords.shouldOpenHomePageAndShowAllRestaurantsByRegion();
    // When go to the restaurant page
    this.actionwords.goToTheRestaurantPage();
    // And click filter button
    this.actionwords.clickFilterButton();
    // Then should show a list of all categories with the number of products included
    this.actionwords.shouldShowAListOfAllCategoriesWithTheNumberOfProductsIncluded();
    // And select products category
    this.actionwords.selectProductsCategory();
    // Then should be scroll down to products list by selected category
    this.actionwords.shouldBeScrollDownToProductsListBySelectedCategory();
  });
});
