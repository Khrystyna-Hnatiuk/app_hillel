const path = require('path')
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    mode: 'production',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,


    },
    stats: {
        children: true,
    },
    resolve: {
        fallback: {
            'path': require.resolve('path-browserify'),
            // process: require.resolve('process/browser'),
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),





    ],

    module: {
        rules: [
            {
                test: /\.(css|scss)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },



        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    compress: true,
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
            new CssMinimizerPlugin(),
        ],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'src')
        },
        port: 3000,
        open: true,
        hot: true
    }



}