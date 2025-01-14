const rules = require("./webpack.rules");

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

rules.push({
    test: /\.css$/,
    use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

module.exports = {
    mode: isProduction ? "production" : "development",
    entry: "./src/renderer.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devServer: {
        open: true,
        host: "localhost",
        compress: true,
        historyApiFallback: true,
        static: "./",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),

        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            // ...rules,
            {
                test: /\.(js|jsx)$/i,
                loader: "babel-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, "css-loader", "postcss-loader"],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },
        ],
    },
};
