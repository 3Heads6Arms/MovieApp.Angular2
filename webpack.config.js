/// <binding AfterBuild='Run - Development' />
"use strict";

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: './app/main.ts'
    },
    output: {
        filename: './app/[name].bundle.js',
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.html', '.css', '.scss']
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
            { test: /\.css?$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
            { test: /\.scss?$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') },
            { test: /\.less?$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader') }
        ],
    },
    plugins: [
        new ExtractTextPlugin("./app/app.css", { allChunks: false })
    ]
};