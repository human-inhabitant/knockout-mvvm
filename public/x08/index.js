/* eslint-disable no-undef */
(function () {
  const my = {};

  // The "Models"

  // The Product function creates new Product Models.
  // In this case, we use a function to create the Car Model to make
  // it easier to extend with a computed member. The properties are
  // observables, but they only need to be if they should notify their changes.
  my.Car = function () {
    const self = this;
    self.key = ko.observable();
    self.color = ko.observable();
    self.year = ko.observable();
    self.modelKey = ko.observable();
    self.desc = ko.computed(() => `${self.year()} ${self.color()}`, self);
  };

  // Set up the Models.
  // We use object literals here to show another way to create Models.
  // Properties are not observable in this case. Depends if you want
  // them to notify of changes.
  my.data = (function () {
    const
      allMakes = ko.observableArray([
        { name: 'Lexus', key: 'L' },
        { name: 'BMW', key: 'B' }]);
    const allModels = ko.observableArray([
      { name: 'ISF', makeKey: 'L', key: '1' },
      { name: 'IS350', makeKey: 'L', key: '2' },
      { name: 'ES350', makeKey: 'L', key: '3' },
      { name: 'Z3', makeKey: 'B', key: '4' },
      { name: 'i335', makeKey: 'B', key: '5' },
      { name: 'i735', makeKey: 'B', key: '6' }]);
    const allCars = ko.observableArray([
      new my.Car().key('ASD928K1').color('red').year(2008)
        .modelKey('1'),
      new my.Car().key('KJAS90U2').color('red').year(2011)
        .modelKey('1'),
      new my.Car().key('J89J1233').color('black').year(2009)
        .modelKey('1'),
      new my.Car().key('Y8M34N9').color('blue').year(2008)
        .modelKey('1'),
      new my.Car().key('ASD3DFG2').color('yellow').year(2008)
        .modelKey('2'),
      new my.Car().key('ASDF23RF').color('red').year(2007)
        .modelKey('2'),
      new my.Car().key('SGS4SDG4').color('white').year(2009)
        .modelKey('3'),
      new my.Car().key('KJD347D3').color('blue').year(2010)
        .modelKey('3'),
      new my.Car().key('D9F8R7E7').color('yellow').year(2012)
        .modelKey('4'),
      new my.Car().key('K3K4L6S9').color('red').year(2009)
        .modelKey('4'),
      new my.Car().key('W1M3L4K2').color('black').year(2007)
        .modelKey('5'),
      new my.Car().key('UU33KK22').color('blue').year(2004)
        .modelKey('5'),
      new my.Car().key('ASD098K2').color('purple').year(2008)
        .modelKey('6'),
      new my.Car().key('LKJ123H4').color('red').year(2011)
        .modelKey('6')
    ]);
    return {
      allMakes,
      allModels,
      allCars
    };
  }());

  // The ViewModel
  my.viewmodel = (function () {
    const makes = my.data.allMakes; // Lexus, Toyota, etc.
    const selectedMake = ko.observable('');
    const selectedModel = ko.observable('');
    const selectedCar = ko.observable('');
    // Get the list of Models for the selected Make
    const models = ko.computed(() => {
      if (!selectedMake()) {
        return null;
      }
      const filter = selectedMake().key.toLowerCase();
      return ko.utils.arrayFilter(my.data.allModels(), (item) => {
        const itemkey = item.makeKey.toLowerCase();
        return ko.utils.stringStartsWith(itemkey, filter);
        // return itemkey.substring(0, filter.length) === filter;
      });
    }, this);
      // Get the list of Cars for the sleected Model
    const cars = ko.computed(() => {
      if (!selectedModel()) {
        return null;
      }
      const filter = selectedModel().key.toLowerCase();
      return ko.utils.arrayFilter(my.data.allCars(), (item) => {
        const itemkey = item.modelKey().toLowerCase();
        return ko.utils.stringStartsWith(itemkey, filter);
        // return itemkey.substring(0, filter.length) === filter;
      });
    }, this);
    return {
      makes,
      selectedMake,
      selectedModel,
      selectedCar,
      models,
      cars
    };
  }());

  // Whenever the selectedMake changes, reset the selectedModel
  my.viewmodel.selectedMake.subscribe(() => {
    my.viewmodel.selectedModel(undefined);
  }, my.viewmodel);

  // Whenever the selectedModel changes, reset the selectedCar
  my.viewmodel.selectedModel.subscribe(() => {
    my.viewmodel.selectedCar(undefined);
  }, my.viewmodel);

  ko.applyBindings(my.viewmodel);
}());
