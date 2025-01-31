// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
    cache: {
        type: "filesystem", // Simpan hasil build di disk
        buildDependencies: {
            config: [__filename], // Menggunakan file konfigurasi sebagai dependency cache
        },
    },
    optimization: {
        usedExports: true, // Mengaktifkan tree shaking untuk ekspor yang digunakan
        splitChunks: {
            chunks: "all", // Membagi kode untuk semua tipe chunk (async dan non-async)
        },
    },
    entry: "./src/index.js",
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
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),

        new MiniCssExtractPlugin(),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                // loader: "babel-loader",
                exclude: /node_modules/,
                use: [
                    "thread-loader", // Tambahkan ini untuk paralelisasi
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                            // parallel: true,
                        },
                    },
                ],
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

            {
                test: /\.html$/i,
                use: ["html-loader"],
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";

        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
    } else {
        config.mode = "development";
        config.devtool = "eval-cheap-module-source-map";
    }
    return config;
};
