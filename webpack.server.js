const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');
const WebpackNodeExternals = require('webpack-node-externals');

const server = {
    // Inform webpack that we're bundling a bundle
    // for NodeJS, rather than for the browser
    target: 'node',

    // Tell webpack, where's the server app
    entry : './src/index.js',

    // Tell Webpcak where to put the output file 
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, 'bundle'),
    },

    externals : [WebpackNodeExternals()],
}

module.exports = merge(base, server);