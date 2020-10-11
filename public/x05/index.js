/* eslint-disable no-param-reassign */
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

  // NOTE: I am showing 2 ways to handle "this" with a computed observable.
  // 1st way is to pass in what "this should" represent.
  // 2nd way is to skip it, and use a variable that is scoped
  // outside of the computed function.

  // The ViewModel
  my.vm = {
    product: ko.observable(
      new my.Product()
        .shortDescription('Taylor Koa Series K66ce')
        .salePrice(4199)
        .photo('Taylor Koa Series K66ce Grand Symphony 12-String Cutaway Acoustic Electric Guitar.png')
    ),
    quantity: ko.observable(2)
  };

  /// ////////////////////////////////////////////////
  // read/write computed
  /// ////////////////////////////////////////////////
  my.vm.extendedPrice = ko.computed({
    read() {
      const extPrice = this.product()
        ? this.product().salePrice() * parseInt(`0${this.quantity()}`, 10)
        : 0;
      return `$${extPrice.toFixed(2)}`;
    },
    write(val) {
      val = parseFloat(val.replace(/[^.\d]/g, ''));
      val = Number.isNaN(val) ? 0 : val;
      const unitPrice = val / this.quantity();
      this.product().salePrice(unitPrice);
    },
    owner: my.vm
  });

  ko.applyBindings(my.vm);
}());
