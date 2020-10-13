(function () {
  my.viewmodel = {
    // text/html
    id: ko.observable('123'),
    details: ko.observable('<strong><em>This guitar rocks!</em></strong>'),
    model: {
      code: ko.observable('314ce'),
      name: ko.observable('Taylor 314 ce')
    }
  };
  ko.applyBindings(my.viewmodel);
}());
