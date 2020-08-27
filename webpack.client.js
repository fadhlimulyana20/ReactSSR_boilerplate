const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');

const client = {
    // Tell webpack, where's the server app
    entry : './src/client/client.js',

    // Tell Webpcak where to put the output file 
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, 'public'),
    },
}

module.exports = merge(base, client);