var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: "vendor.bundle.js",
        minChunks: Infinity
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin("[name].css",{allChunks: true}),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"',
        __DEV__:false
    })
];
var config = {
    entry: {
        app: [
            './app/'
        ],
        vendor: [
            'react',
            'react-dom',
            'redux'
        ]
    },
    output: {
        path: path.join(__dirname, 'assets/dist'),
        publicPath: '/assets/dist',
        chunkFilename: '[name].chunk.js',
        filename: '[name].min.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.scss/,
            include:[path.join(__dirname,'app')],
            loader: 'style!css?module&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'
        },{
            test: /\.less$/,
            include:[path.join(__dirname,'app')],
            loader: "style!css?module&localIdentName=[name]__[local]___[hash:base64:5]!postcss!less"
        },{
            test: /\.css$/,
            include:[path.join(__dirname,'assets/css/')],
            loader:  ExtractTextPlugin.extract("style", "css!postcss")
        },{
            test: /\.css$/,
            include:[path.join(__dirname,'app')],
            loader: "style!css?module&localIdentName=[name]__[local]___[hash:base64:5]!postcss"
        },{
            test: /\.css$/,
            include:/node_modules/,
            loader:'style!css'
        },{
            test: /\.(png|jpe?g|gif)$/,
            loader: 'url?limit=1024'
        },{
            test: /\.(svg|woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url?limit=10240'
        }]
    },
    postcss: [
        require('precss')(),
        require('cssnano')(),
        require('autoprefixer')({browsers: ['last 2 versions']})
    ],
    resolve: {
        extensions: ['', '.js', '.scss', '.css', '.jsx']
    },
    plugins: plugins
};
module.exports = config;