const path = require('path')
const MiniCSSExtractPLugin = require('mini-css-extract-plugin')
const HtmlWebpackPLugins = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        index :  path.resolve(__dirname, 'src/js/index.js')
    },
    // mode: 'productions',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules : [
            {
                test : /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPLugins({
            title: 'Plugins'
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