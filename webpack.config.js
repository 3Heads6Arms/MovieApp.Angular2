/// <binding AfterBuild='Run - Development' />
"use strict";

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './app/main.ts'
    },
    output: {
        filename: './app/bundle.js',
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.html', '.css']
    },
    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },
    module: {
        loaders: [
            { test: /\.ts?$/, loader: 'ts-loader' },
            { test: /\.html?$/, loader: 'html-loader' },
            { test: /\.css?$/, loader: 'css-loader' }
        ],
    }
};