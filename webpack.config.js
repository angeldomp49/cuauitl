const path = require('path');
const BundleDeclarationsWebpackPlugin = require("bundle-declarations-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname),
        library:{
            type: "commonjs-static",
        }
    },
    module:{
        rules: [
            {
                test: /\.(ts)$/,
                use: "babel-loader",
                exclude: /node_modules/ 
            }
        ],
    },
    resolve: {
        extensions: [".ts"]
    },
    target: "web",
    plugins: [
        new BundleDeclarationsWebpackPlugin()
    ]
};