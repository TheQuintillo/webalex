const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js'
    },
    module:{
        rules:
        [
            {
                use: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
            },
            {
                test: /\.(png)$/i,
                use: ["file-loader?name=public/img/[name].[ext]", "image-webpack-loader"]
            },
            {
                test: /\.css$/i,
                /* use: [MiniCssExtractPlugin.loader, "css-loader"], */
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: "./",
                    },
                  },
                  "css-loader",
                ],
              }, 
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
}