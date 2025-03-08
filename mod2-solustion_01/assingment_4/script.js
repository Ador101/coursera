(function (global) {
  var dc = {};

  // TODO: STEP 0 - Fetch all categories
  dc.loadRandomCategory = function () {
    $dc.getAllCategories().then(function (categories) {
      // TODO: STEP 1 - Select a random category
      var randomIndex = Math.floor(Math.random() * categories.length);
      var randomCategory = categories[randomIndex];

      // TODO: STEP 2 - Update the randomCategoryShortName property
      dc.randomCategoryShortName = randomCategory.short_name;

      // TODO: STEP 3 - Load menu items for the random category
      $dc.loadMenuItems(dc.randomCategoryShortName);
    }).catch(function (error) {
      console.error("Error fetching categories: ", error);
    });
  };

  // Expose dc to the global object
  global.$dc = dc;
})(window);