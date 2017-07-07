require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')
var request = require('request');


// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express();

var compiler = webpack(webpackConfig)





var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)


//全球购 上面的数据
app.get('/earth',function(req,res){

    request('https://jas.juanpi.com/pagetag/page?unique=module_ads%2Cbanner_ads&cid=310&zy_id=c3_l1_18_51_5&platform=m&_=1496820034322&callback=jsonp1',function(error,req,data){
         if(!error && req.statusCode==200){
                res.send(data);
         }
    });

});


//https://shop.juanpi.com/gsort?key=310&type=6&zhouyi_ids=p8_c3_l1_18_51_5&machining=showshopgoods&page=1&rows=10&callback=gsort_callback 

//全球购页面 商品详细信息数据
app.get('/infoEarth',function(req,res){
   var page = req.url.page; 
    request('https://shop.juanpi.com/gsort?key=310&type=6&zhouyi_ids=p8_c3_l1_18_51_5&machining=showshopgoods&page='+page+'&rows=10&callback=gsort_callback ',function(error,req,data){
        if(!error && req.statusCode==200){
              res.send(data);
        }
    })
})


app.get('/cateSend',function(req,res){
  request('https://m.juanpi.com/cate/subcatelist?cate_id=490&pf=8&area=1&bi=222',function(error,req,data){
          if( !error && req.statusCode==200){
            res.send(data);
          }
  })
})




app.get('/goodsInfo',function(req,res){
       request('http://m.meilishuo.com/detail/mls/v1/h5?iid=1h6vz0y&_ajax=1&cparam=',function(error,req,data){
          if( !error && req.statusCode==200){
            res.send(data);
          }
  })
})

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
