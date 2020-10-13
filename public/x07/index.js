/* eslint-disable no-undef */
(function () {
  my.viewmodel = {
    id: ko.observable('123'),
    model: {
      code: ko.observable('314ce'),
      name: ko.observable('Taylor 314 ce')
    },
    salePrice: ko.observable(1995),
    userInput: ko.observable(''),
    displayValue() {
      if (this.userInput().length > 0) {
        console.info(`You entered: ${this.userInput()}`);
      }
    },
    detailsAreVisible: ko.observable(false),
    showDetails() {
      this.detailsAreVisible(true);
    },
    hideDetails() {
      this.detailsAreVisible(false);
    }
  };
  ko.applyBindings(my.viewmodel);
}());
