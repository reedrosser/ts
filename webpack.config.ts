import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import webpack, { WebpackPluginInstance } from "webpack";
import "webpack-dev-server";
const devMode = true;
const plugins:WebpackPluginInstance[] = devMode ? []:[new MiniCssExtractPlugin()];

const config: webpack.Configuration = {
  entry: "./src/index.ts",
  mode: devMode ? "development" : "production",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        // If you enable `experiments.css` or `experiments.futureDefaults`, please uncomment line below
        // type: "javascript/auto",
        test: /\.(sa|sc|c)ss$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins,
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};

export default config;