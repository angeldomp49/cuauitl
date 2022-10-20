const path = require('path');
const BundleDeclarationsWebpackPlugin = require("bundle-declarations-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname)
    },
    module:{
        rules: [
            {
                test: /\.(ts)$/,
                use: "ts-loader",
                exclude: /node_modules/ 
            }
        ],
    },
    resolve: {
        extensions: [".ts"]
    },
    target: "node",
    plugins: [
        new BundleDeclarationsWebpackPlugin()
    ]
};