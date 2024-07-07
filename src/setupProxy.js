const { createProxyMiddleware } = require('http-proxy-middleware')

// 通常使用这种方式就够了，如果报错，可以使用下面的方法
module.exports = function (app) {
  app.use(
    proxy('/api1', {     // 遇见/api1开头的请求，触发改代理配置
      target: 'http://172.16.136.249:8080',       // 请求转发给谁
      secure: false,
      changeOrigin: true,     // 控制服务器收到的请求头中的Host值，默认false，意思为服务端收到的Host值是我们自己本的地址，开启以后，服务端收到的就会他自己的地址
      pathRewrite: {
        "^/api1": "/api"      // 把所有/api1重写成api
      }
    }),
    proxy('/api2', {
      target: 'http://172.16.136.250:8080',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/api2": "/api"
      }
    })
  )
}

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://172.16.136.249:8080',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/api"
      }
    })
  )
}
