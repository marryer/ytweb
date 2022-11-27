const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,  //关闭语法检查
  //配置代理服务器
  devServer: {
    port:8080,
    host:'localhost',
    https:false,
    open:true,
    proxy: {
      // 能匹配上/api的都走代理
      '/api': {
        // 代理目标的基础路径
        target: 'http://124.221.229.229:8888',
        // 利用正则表达式匹配，将路径中有api的替换为空字符
        pathRewrite:{'^/api':''},
        // 是否支持跨域
        changeOrigin:true,
        ws: true,
      },
    }
  },
})
