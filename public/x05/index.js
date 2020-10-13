(function () {
  my.viewmodel = {
    id: ko.observable('123'),
    model: {
      code: ko.observable('314ce'),
      name: ko.observable('Taylor 314 ce')
    },
    salePrice: ko.observable(1995),
    isReadOnly: ko.observable(false),
    allowEditing: ko.observable(false)
  };
  ko.applyBindings(my.viewmodel);
}());
