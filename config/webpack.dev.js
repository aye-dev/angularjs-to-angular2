// For more details on how webpack works - https://webpack.js.org/concepts
const path = require('path');
const webpack = require('webpack');
const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: "development",
    
    // List the separate dependency graphs
    entry: {
        'polyfills': './app/polyfills.ts',
        'ng1': './app/index.ts', // Old AngularJs 1.x
        'app': './app/main.ts' // New Angular 2+
    },
    output: {
        path: helpers.root('dist/dev'),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        // Order metters, first it will look for ts, you don't want to pick the js file because you change the ts that transpiles to js
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    /* ts->js */
                    'ts-loader',
                    /* translate template url to require statements, inline the templates - works for both ng1 & ng2 */
                    'angular2-template-loader' 
                ]
            },
            {
                /*Load Html*/
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                /* Load css*/
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        //So we can debug in browser
        new webpack.SourceMapDevToolPlugin({
            "filename": "[file].map[query]",
            "moduleFilenameTemplate": "[resource-path]",
            "fallbackModuleFilenameTemplate": "[resource-path]?[hash]",
            "sourceRoot": "webpack:///"
        }),
        // Takes the template html and adds all the created bundles to this template
        new HtmlWebpackPlugin({
            template: 'config/index.html',
            chunks: ['app']
        }),

        new webpack.DefinePlugin({
          'process.env': {
            'ENV': JSON.stringify(ENV)
          }
        }),

        new webpack.ContextReplacementPlugin(
          //deals with some path issues
          /angular(\\|\/)core(\\|\/)@angular/,
          helpers.root('./src'),
          {}
        ),
        
        // Comment out the following plugin to see bundle report
        // new BundleAnalyzerPlugin({
        //   analyzerMode: 'static'
        // })
    ]
}