const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: "source-map",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            title: 'webpack',
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
    ],
};