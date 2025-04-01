const path = require('path')
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')



module.exports = {
    entry:  './js/index.js', 
    mode: 'production',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/', 


    },
    watch:true,
    stats: {
        children: true,  
      },
    resolve:{
        fallback:{
            'path': require.resolve('path-browserify'),
            process: require.resolve('process/browser'),
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
        new HtmlWebpackPlugin({
            template: './index.html', 
            filename: 'index.html',    
            inject:'body'
        }),
   
        new ImageMinimizerPlugin({
            minimizer: {
              filename: "[path][name][hash][ext]", 
              implementation: ImageMinimizerPlugin.imageminMinify,
              options: {
                plugins: [
                  "imagemin-gifsicle",
                  "imagemin-mozjpeg",
                  "imagemin-pngquant",
                  "imagemin-svgo",
                ],
              },
            },
          }),
      
 

       
          
    ],

    module: {
        rules: [
            {
              test: /\.(css|scss)$/i,
              use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
         
            {
              test: /\.(png|jpe?g|gif)$/i,
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                outPath:'images/',
        
              },
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
            directory: path.join(__dirname, 'dist'), 
        },
        compress: true, 
        port: 9004, 
        open: true, 
        historyApiFallback: true, 
        liveReload: true,  

    }
    

}