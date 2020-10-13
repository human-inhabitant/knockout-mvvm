(function () {
  my.viewmodel = {
    // text/html
    id: ko.observable('123'),
    model: {
      code: ko.observable('314ce'),
      name: ko.observable('Taylor 314 ce')
    },

    // value & valueUpdate
    salePrice: ko.observable(1995)

  };
  ko.applyBindings(my.viewmodel);
}());
