(function () {
  my.viewmodel = {
    id: ko.observable('123'),
    model: {
      code: ko.observable('314ce'),
      name: ko.observable('Taylor 314 ce')
    },
    salePrice: ko.observable(1995),
    isInStock: ko.observable(true),
    colors: [
      { key: 'BR', name: 'brown' },
      { key: 'BU', name: 'blue' },
      { key: 'BK', name: 'black' }
    ],
    selectedColorForRadio: ko.observable(),
    selectedColor: ko.observable(),
    selectedColorsForDropdown: ko.observableArray([])
  };
  ko.applyBindings(my.viewmodel);
}());
