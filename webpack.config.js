const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MinCssExtractPlugin = require('mini-css-extract-plugin')
const {VueLoaderPlugin} = require('vue-loader')
module.exports  = {
    entry: './src/main.ts',
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test:/\.css$/,
                use: [MinCssExtractPlugin.loader,'css-loader'],
            },
            {
                test: /\.less$/,
                use:[MinCssExtractPlugin.loader,'css-loader','less-loader'],
            }
        ]
    },
    devServer: {
        hot:true,
        proxy: {
            '/api': {
                target:'https://w4ctech.gitee.io/front-end-rss/data',
                changeOrigin:true,
                pathRewrite:{
                    '^/api': ''
                }
            }
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new VueLoaderPlugin(),
        new MinCssExtractPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
}
