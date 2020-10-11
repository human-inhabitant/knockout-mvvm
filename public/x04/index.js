(function () {
  const photoPath = '/assets/img/';

  // function helper
  my.formatCurrency = function (value) {
    return `$${value.toFixed(2)}`;
  };

  // for creating Product Models
  my.Product = function () {
    this.id = ko.observable();
    this.salePrice = ko.observable();
    this.photo = ko.observable();
    this.shortDescription = ko.observable();
    this.photoUrl = ko.computed(function () {
      return photoPath + this.photo();
    }, this);
  };

  // for creating LineItem objects
  my.LineItem = function () {
    const self = this;
    self.product = ko.observable();
    self.quantity = ko.observable(1); // default
    self.extendedPrice = ko.computed(() => (self.product() ? self.product().salePrice() * parseInt(`0${self.quantity()}`, 10) : 0));
  };
  // NOTE: I am showing 2 ways to handle "this" with a computed observable.
  // 1st way is to pass in what "this should" represent.
  // 2nd way is to skip it, and use a variable that is scoped
  // outside of the computed function.

  // The ViewModel
  my.vm = {
    products: ko.observableArray([]),
    lines: ko.observableArray([new my.LineItem()]),
    addLine() {
      my.vm.lines.push(new my.LineItem());
    },
    removeLine(line) {
      my.vm.lines.remove(line);
    },
    loadProducts() {
      $.each(my.sampleData.data.Products, (i, p) => {
        my.vm.products.push(new my.Product()
          .id(p.Id)
          .salePrice(p.SalePrice)
          .photo(p.Photo)
          .shortDescription(p.Model.Name));
      });
    }
  };

  // Computed observable function.
  // We append it to the ViewModel here.
  my.vm.grandTotal = ko.computed(function () {
    let total = 0;
    $.each(this.lines(), function () {
      // "this" is part of the inner function
      total += this.extendedPrice();
    });
    return total;
  }, my.vm);

  my.vm.loadProducts();
  ko.applyBindings(my.vm);
}());
