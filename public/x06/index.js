/* eslint-disable no-undef */
(function () {
  my.viewmodel = {
    id: ko.observable('123'),
    model: {
      code: ko.observable('314ce'),
      name: ko.observable('Taylor 314 ce')
    },
    salePrice: ko.observable(1995),
    checkboxHasFocus: ko.observable(false),
    textboxHasFocus: ko.observable(false),
    buttonHasFocus: ko.observable(false),
    setFocusToCheckbox() {
      this.checkboxHasFocus(true);
    }
  };
  ko.applyBindings(my.viewmodel);
}());
