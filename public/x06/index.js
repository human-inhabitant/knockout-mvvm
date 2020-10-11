$(function () {
  const photoPath = '/assets/img/';

  // Product construction
  const Product = function () {
    this.id = ko.observable();
    this.salePrice = ko.observable();
    this.photo = ko.observable();
    this.itemNumber = ko.observable();
    this.description = ko.observable();
    this.photoUrl = ko.computed(function () {
      return photoPath + this.photo();
    }, this);
  };

  my.vm = {
    // observable array of products
    products: ko.observableArray([]),
    selectedProducts: ko.observableArray([]),
    itemToAdd: ko.observable(''),

    // loading the observable array with sample data
    load() {
      $.each(my.sampleData.data.Products, (i, p) => {
        my.vm.products.push(new Product()
          .id(p.Id)
          .salePrice(p.SalePrice)
          .photo(p.Photo)
          .itemNumber(p.ItemNumber)
          .description(p.Description));
      });
    }
  };

  /// //////////////////////////////////
  // Add an item code
  my.vm.addItem = function () {
    if (my.vm.itemToAdd() !== '') {
      my.vm.products.push(new Product().description(my.vm.itemToAdd()));
    }
    my.vm.itemToAdd('');
  };
  /// //////////////////////////////////

  /// //////////////////////////////////
  // Removal code
  my.vm.productsAreSelected = ko.computed(() => my.vm.selectedProducts().length > 0);
  my.vm.removeSelected = function () {
    my.vm.products.removeAll(my.vm.selectedProducts());
    my.vm.selectedProducts([]);
  };
  /// //////////////////////////////////

  /// //////////////////////////////////
  // Sorting code
  my.vm.productsExist = ko.computed(() => my.vm.products().length > 0);
  my.vm.sortProducts = function () {
    my.vm.products.sort((left, right) => {
      const l = left.description().toLowerCase();
      const r = right.description().toLowerCase();
      // eslint-disable-next-line no-nested-ternary
      return ((l === r) ? 0 : ((l < r) ? -1 : 1));
    });
  };
  /// //////////////////////////////////

  my.vm.load();
  ko.applyBindings(my.vm);
});
