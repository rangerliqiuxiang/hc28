module.exports = {
    // 选项...
    /* devServer: {
      proxy: 'http://localhost:9001'
    }, */
    devServer:{
      //设置代理
      proxy: { //代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
        // /api 是一个访问别名
        '/hc28': { //axios访问 /api ==  target + /api
          target: 'http://hc28.com.cn',
          changeOrigin: true, //创建虚拟服务器 
          ws: true, //websocket代理
        },
        '/cosmo': { //axios访问 /api ==  target + /api
          target: 'http://hc28.com.cn',
          changeOrigin: true, //创建虚拟服务器 
          ws: true, //websocket代理
        },
      }
    }
  }
   