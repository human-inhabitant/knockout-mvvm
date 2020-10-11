/* eslint-disable no-undef */
(function () {
  my.vm = {
    products: ko.observableArray(['Guitars', 'Capos', 'Straps', 'Picks']),
    selectedProducts: ko.observableArray([]),
    itemToAdd: ko.observable(''),
    itemToAddViaSplice: ko.observable(''),
    replacementItem: ko.observable(''),
    itemToAddViaUnshift: ko.observable('')
  };

  my.vm.addItem = function () {
    // Prevent blanks and duplicates
    if ((my.vm.itemToAdd() !== '')
      && (my.vm.products.indexOf(my.vm.itemToAdd()) < 0)) {
      my.vm.products.push(my.vm.itemToAdd());
    }
    my.vm.itemToAdd('');
  };

  my.vm.productsExist = ko.computed(function () {
    return this.products().length > 0;
  }, my.vm);

  my.vm.productsAreSelected = ko.computed(function () {
    return this.selectedProducts().length > 0;
  }, my.vm);

  my.vm.canAddViaSplice = ko.computed(function () {
    return this.productsAreSelected() && this.itemToAddViaSplice();
  }, my.vm);

  my.vm.canReplace = ko.computed(function () {
    return this.productsAreSelected() && this.replacementItem();
  }, my.vm);

  my.vm.canAddViaUnshift = ko.computed(function () {
    // return this.itemToAddViaUnshift();
    return this.itemToAddViaUnshift().length > 0;
  }, my.vm);

  my.vm.sortProducts = function () {
    my.vm.products.sort(
      (left, right) => (left.toLowerCase() === right.toLowerCase()
        ? 0 : (left.toLowerCase() < right.toLowerCase() ? -1 : 1))
    );
  };

  my.vm.reverseProducts = function () {
    my.vm.products.reverse();
  };

  my.vm.spliceProduct = function () {
    if (!my.vm.productsAreSelected()) { return; }
    const start = my.vm.products().indexOf(my.vm.selectedProducts()[0]);
    my.vm.products.splice(start, 0, my.vm.itemToAddViaSplice());
    my.vm.itemToAddViaSplice('');
  };

  my.vm.replaceProduct = function () {
    if (!my.vm.productsAreSelected()) { return; }
    my.vm.products.replace(my.vm.selectedProducts()[0], my.vm.replacementItem());
    my.vm.selectedProducts.push(my.vm.replacementItem());
    my.vm.replacementItem('');
  };

  my.vm.unshiftProduct = function () {
    my.vm.products.unshift(my.vm.itemToAddViaUnshift());
    my.vm.itemToAddViaUnshift('');
  };

  my.vm.shiftProduct = function () {
    const item = my.vm.products.shift();
  };

  my.vm.popProduct = function () {
    const item = my.vm.products.pop();
  };

  my.vm.removeSelected = function () {
    my.vm.products.removeAll(my.vm.selectedProducts());
    my.vm.selectedProducts([]);
  };

  ko.applyBindings(my.vm);
}());
