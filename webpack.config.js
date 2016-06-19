var webpack = require('webpack');

module.exports={
  entry:'./index.js',
  output:{
    path: './dist',
    filename:'bundle.js'
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude:/node_modules/,
        query:{
          presets:['es2015']
        }
      },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
    ]
  },
  resolve:{
    extensions:['','.json','.js']
  },
  plugins:[
    new webpack.NoErrorsPlugin()
  ]
}
