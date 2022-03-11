const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "ResponseGame-setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: ["./client"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ],
        },
        exclude: path.join(__dirname, "node_modules"),
      },
    ],
  },
  plugins: [new RefreshWebpackPlugin()],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: '/dist',
  },
  devServer: {
    devMiddleware: { publicPath: "/dist" },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
};
