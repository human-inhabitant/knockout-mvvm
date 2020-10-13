/* eslint-disable no-undef */
(function () {
  my.viewmodel = {
    id: ko.observable('123'),
    model: {
      code: ko.observable('314ce'),
      name: ko.observable('Taylor 314 ce')
    },
    salePrice: ko.observable(1995),
    photoUrl: ko.observable('/assets/img/314ce.png'),
    url: ko.observable('https://www.taylorguitars.com/guitars/acoustic/')
  };
  ko.applyBindings(my.viewmodel);
}());
