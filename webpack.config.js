var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './app/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.jsx?/, 
                exclude: /node_modules/,
                use:'babel-loader'
            },
            {
                test : /\.css$/, 
                exclude: /node_modules/,
                use:['style-loader', 'css-loader']
            }
        ]
    },
    mode:'development',

    devServer: {
        proxy: {
            '/': 'http://localhost:3000',
            '/history': 'http://localhost:3000'
        }
    },

    plugins : [
        new HtmlWebpackPlugin ({
            template : 'app/index.html'
        })
    ]

}