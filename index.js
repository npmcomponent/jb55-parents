
var traverse = require('yields-traverse');

module.exports = function(el) {
  return traverse('parentNode', el, null, Infinity);
};
