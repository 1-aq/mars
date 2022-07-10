const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  devServer: {
    port: 9999,
    host: "localhost",
    https: false,
    open: false,
    proxy: {
      "/dev-api": {
        target: "http://oa.9yuecloud.com:3333/api",
        changeOrigin: true,
        pathRewrite: {
          "^/dev-api": "",
        },
      },
    },
  },
});
