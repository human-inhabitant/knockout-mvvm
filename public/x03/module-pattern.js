/* eslint-disable no-undef */
(function () {
  const photoPath = '/assets/img/';

  my.formatCurrency = function (value) {
    return `$${value.toFixed(2)}`;
  };

  my.Product = function () {
    this.id = ko.observable();
    this.salePrice = ko.observable();
    this.photo = ko.observable();
    this.shortDescription = ko.observable();
    this.photoUrl = ko.computed(function () {
      return photoPath + this.photo();
    }, this);
  };

  my.LineItem = function () {
    const self = this;
    self.product = ko.observable();
    self.quantity = ko.observable(1); // default
    self.extendedPrice = ko.computed(() => (self.product() ? self.product().salePrice() * parseInt(`0${self.quantity()}`, 10) : 0));
  };

  my.vm = (function () {
    const products = ko.observableArray([]);
    return {
      products,
      lines: ko.observableArray([new my.LineItem()]),
      addLine() {
        const x = this;
        x.lines.push(new my.LineItem());
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
  }());

  my.vm.grandTotal = ko.computed(function () {
    let total = 0;
    $.each(this.lines(), function () {
      total += this.extendedPrice();
    });
    return total;
  }, my.vm);

  my.vm.loadProducts();
  ko.applyBindings(my.vm);
}());
