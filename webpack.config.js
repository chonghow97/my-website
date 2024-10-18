const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  target: "node",
  entry: "./app.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.node$/, // Add a rule to handle .node files
        use: "node-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [new NodePolyfillPlugin()],
};
