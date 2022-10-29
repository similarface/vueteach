const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  //开启代理服务器 方式一
  // devServer: {
  //   proxy: 'http://localhost:3000'
  // }
  // 开启代理服务器 方式2
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        // 重写 path
        pathRewrite: {'^/api':''},
        ws: true, //是否支持websocket
        changeOrigin: true // 是否可以更改请求的host
      }
    }
  }
})
