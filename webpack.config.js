const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
module.exports = {
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                exclude : /node_modules/,
                use : {
                    loader : "babel-loader"
                }
            },
            {
                test : /\.html$/,
                use : [
                    {
                        loader : "html-loader",
                        options : { minimize : true }
                    }
                ]
            },
            {
                test : /\.css$/,
                use : [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins : [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename : "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename : "[name].css",
            chunkFilename : "[id].css"
        })
    ],
    node: {
        fs: 'empty',
        net : 'empty'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.js'
    }
}