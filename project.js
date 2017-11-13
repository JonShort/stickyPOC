const isProduction = process.env.NODE_ENV === 'production';

const getStaticUrl = (isTrue) => {
  isTrue && '/stickyPOC/'
  return '/static/'
}

module.exports = require("marko-starter").projectConfig({
  name: 'sticky-poc',
  staticUrlPrefix: getStaticUrl(isProduction)
});
