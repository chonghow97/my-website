const path = require("path");

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  // Entry point
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, "dist"), // Corrected output path using the path module
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/, // Matches JS files
        exclude: /node_modules/, // Avoid node_modules
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new NodePolyfillPlugin()],
  resolve: {
    fallback: {
      async_hooks: false,
      // Other core modules can also be excluded similarly
      net: false,
      fs: false,
      tls: false,
    },
  },
};
