module.exports = {
    // Tell Wbpack to run babel
    module : {
        rules : [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test : /\.js?$/,
                loader : 'babel-loader',
                exclude : /node_modules/,
                options : {
                    presets : [
                        '@babel/preset-react',
                        ['@babel/preset-env', {targets : { browsers : ['last 2 versions']}}]
                    ],
                    plugins : [
                        "@babel/plugin-proposal-class-properties",
                        // "@babel/plugin-transform-regenerator",
                        // "@babel/plugin-transform-runtime"
                    ]
                }
            },
        ]
        }
}