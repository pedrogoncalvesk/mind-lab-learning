'use strict';
require('webpack');

const config = {
    context: __dirname + '/public/src',
    entry: {
        app: './main.js',
    },
    output: {
        path: __dirname + '/public/static', //  destination
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //Check for all js files
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader?-babelrc,+cacheDirectory,presets[]=es2015,presets[]=es2016,presets[]=es2017,presets[]=stage-0,presets[]=react',
                }]
            }
        ]
    },
    devServer: {
        contentBase: __dirname + '/public/src',
    },
    devtool: 'eval-source-map' // Default development sourcemap
};

module.exports = config;
