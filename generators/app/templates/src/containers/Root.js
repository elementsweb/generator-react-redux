const prod = require('./Root.prod');
const dev = require('./Root.dev');

if (process.env.NODE_ENV === 'production') {
  module.exports = prod;
} else {
  module.exports = dev;
}
