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
        contentBase: path.join(__dirname, './'),
        publicPath: './',
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'static'),
        publicPath: './'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
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
                            outputPath: 'css/img',
                            name: '[name].[ext]'
                        }
                    }
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts',
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