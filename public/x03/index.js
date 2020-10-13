(function () {
  my.viewmodel = {
    // text/html
    id: ko.observable('123'),
    model: {
      code: ko.observable('314ce'),
      name: ko.observable('Taylor 314 ce')
    },

    // value & valueUpdate
    salePrice: ko.observable(1995),

    // checkboxes and radio buttons
    isInStock: ko.observable(true),
    selectedColorForRadio: ko.observable(),
    colors: [
      { key: 'BR', name: 'Brown' },
      { key: 'BL', name: 'Blue' },
      { key: 'BK', name: 'Black' }
    ]
  };
  ko.applyBindings(my.viewmodel);
}());
