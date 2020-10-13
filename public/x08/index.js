/* eslint-disable no-undef */
(function () {
  my.viewmodel = {
    id: ko.observable('123'),
    model: {
      code: ko.observable('314ce'),
      name: ko.observable('Taylor 314 ce')
    },
    salePrice: ko.observable(1995),
    profit: ko.observable(-7000)
  };
  ko.applyBindings(my.viewmodel);
}());
