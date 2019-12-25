const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        app: "./index.js"
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, './')
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'static')
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        /*alias: {
            '@': path.resolve(__dirname, 'src')
         }*/
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'img',
                            name: '[name].[ext]'
                        }
                    }
                ],
            }
        ]
    },
    plugins: [
        new WriteFilePlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};