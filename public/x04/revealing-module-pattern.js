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
    const lines = ko.observableArray([new my.LineItem()]);
    const grandTotal = ko.computed(() => {
      let total = 0;
      $.each(lines(), function () {
        total += this.extendedPrice();
      });
      return total;
    });
    function addLine() {
      lines.push(new my.LineItem());
    }
    function removeLine(line) {
      lines.remove(line);
    }
    function loadProducts() {
      $.each(my.sampleData.data.Products, (i, p) => {
        products.push(new my.Product()
          .id(p.Id)
          .salePrice(p.SalePrice)
          .photo(p.Photo)
          .shortDescription(p.Model.Name));
      });
    }
    return {
      products, lines, grandTotal, addLine, removeLine, loadProducts
    };
  }());

  my.vm.loadProducts();
  ko.applyBindings(my.vm);
}());
