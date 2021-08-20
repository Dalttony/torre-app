/**
 * Webpack main configuration 
 * Author: Evinton A. Cordoba  Mosquera
 */

 const path = require('path');

 module.exports = {
     "mode": "development",
     "entry": "./src/index.js",
     "output": {
        "path": path.resolve(__dirname, 'static/dist/'),
        "publicPath": "/",
        "filename": "app.js"
     },module: {
      rules: [
          {  test: /\.jsx?$/, 
             exclude: /node_modules/,
             loader: 'babel-loader',
             options: {
                      //specify that we will be dealing with React code
                      presets: ['@babel/preset-react'] 
                  }
             }, type: 'javascript/auto',
             {
              test: /\.m?js$/,
              exclude:/node_modules/,
              use:{
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
             },
             {
                 test: /\.css$/,
                 use: [
                     {loader: 'style-loader'},
                     {
                      loader: 'css-loader'
                    }
                   ]
             },
             {
               test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
               use: [
                 {
                   loader: 'file-loader',
                   options: {
                     name: '[name].[ext]',
                     outputPath: 'fonts/'
                   }
                 }
               ]
             }
          ]
    }
 }