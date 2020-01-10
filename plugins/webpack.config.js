const path = require('path')
const MiniCSSExtractPLugin = require('mini-css-extract-plugin')
const HtmlWebpackPLugins = require('html-webpack-plugin')


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
                use: [{
                    loader: MiniCSSExtractPLugin.loader
                }, 
                'css-loader']
            }
        ]
    },
    plugins : [
        new HtmlWebpackPLugins({
            title: 'Plugins'
        }),
        new MiniCSSExtractPLugin({
            filename : 'css/[name].css'
        })
    ]
}