const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://holypolice.herokuapp.com",
      changeOrigin: true,
    })
  );
};
