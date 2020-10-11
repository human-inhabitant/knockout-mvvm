/* eslint-disable no-undef */
ko.utils.stringStartsWith = function (string, startsWith) {
  // eslint-disable-next-line no-param-reassign
  string = string || '';
  if (startsWith.length > string.length) return false;
  return string.substring(0, startsWith.length) === startsWith;
};
