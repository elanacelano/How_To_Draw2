var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },

  devtool: "#cheap-module-eval-source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test:/\.css$/,
        use: [ "style-loader", "css-loader" ]
      },
      {
        test: /\.(png|jpg|gif)$/,
          loader: "url-loader"
      }
      // {
      // test: /\.html$/,
      // loader: "html-loader?attrs[]=video:src"
      // }, 
      // {
      // test: /\.mp4$/,
      // loader: "url?limit=10000&mimetype=video/mp4"
      // }]
    ]
  }
};
