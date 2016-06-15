var express = require('express'),
    webpack = require('webpack'),
    path = require('path'),
    port = process.env.PORT || 3000,
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackDevConfig = require('./webpack.config.dev'),
    proxy = require('http-proxy-middleware'),
    app = express(),
    compiler = webpack(webpackDevConfig);
//http代理比如http://localhost:3000/jquery/foo/bar -> http://cdn.bootcss.com/jquery/foo/bar 
app.use('/jquery', proxy({target: 'http://cdn.bootcss.com', changeOrigin: true}));
app.use(webpackDevMiddleware(compiler , {
    // contentBase: `http://localhost:${port}`,
    // quiet: true,
    noInfo: true,
    // historyApiFallback:true,
    hot: true,
    // inline: true,
    // lazy: false,
    publicPath: webpackDevConfig.output.publicPath,
    //headers: {'Access-Control-Allow-Origin': '*'},
    stats: {colors: true}
}));
app.use(webpackHotMiddleware(compiler));
//app.set('views', __dirname + '/');
//app.set('view engine', 'ejs');
// 处理HTML5 history API
app.use(require('connect-history-api-fallback')())
app.use(express.static(path.join(__dirname, '/')));
app.get("*", function(req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.listen(port, function(error) {
    if (error) {
        console.log(error)
    } else {
        console.log(`Listening on port:${port}`)
    }
});