var webpack = require('webpack')
var path = require('path')


module.exports={
    entry:path.join(__dirname,"/js/app/index.js"),
    output:{ 
        path: path.join(__dirname,'../public/js'),
        filename:'index.js'
    },
    resolve:{
       alias:{
           less: path.resolve(__dirname,'less')
       }
    },
    module: {
        rules: [{
          test: /\.less$/,
          use: [{
            loader: 'style-loader' // creates style nodes from JS strings
          }, {
            loader: 'css-loader' // translates CSS into CommonJS
          }, {
            loader: 'less-loader' // compiles Less to CSS
          }]
        }]
      },
    plugins:[
        new webpack.ProvidePlugin({
            $: 'jquery'
          })
        ]

}