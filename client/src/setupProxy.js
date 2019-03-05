const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  console.log("Proxy:",proxy);
  app.use(
    proxy('/api', { 
      target: 'http://localhost:4444',
    changeOrigin: true,
  logLevel: "debug" }));
};