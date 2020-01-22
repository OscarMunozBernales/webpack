const path = require('path')
const MiniCSSExtractPLugin = require('mini-css-extract-plugin')
const HtmlWebpackPLugins = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        index :  path.resolve(__dirname, 'src/js/index.js')
    },
    // mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules : [
            {
                test    : /\.js$/,
                use     : 'babel-loader',
                exclude : /node_module/,
            },
            {
                test : /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test : /\.less$/,
                use: ['style-loader', 'css-loader','less-loader'],
            },
            {
                test : /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test : /\.styl$/,
                use: ['style-loader', 'css-loader', 'stylus-loader'],
            },
            {
                test    : /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use     : {
                    loader  : 'url-loader',
                    options : {
                        limit : 100000
                    }
                }
            }
        ]
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPLugins({
            title: 'Plugins',
            template : path.resolve(__dirname, 'index.html')
        }),
        // new MiniCSSExtractPLugin({
        //     filename : 'css/[name].css'
        // })
    ],
    devServer : {
        hot : true,
        open : true,
        port : 9000
    }
}