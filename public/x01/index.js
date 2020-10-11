$(() => {
  // Note:
  // it is likely that you would get your object from some
  // web service, but we'll mock it for simplicity.
  const product = {
    id: 1001,
    itemNumber: 'T314CE',
    model: 'Taylor 314ce',
    salePrice: 1199.95
  };

  // Note: Manually push values from the source to the targets
  // We'll use jQuery for simplicity, but its not required
  $('#guitarItemNumber').text(product.itemNumber);
  $('#guitarModel').val(product.model);
  $('#guitarSalesPrice').val(product.salePrice);

  ko.applyBindings(product);
});
