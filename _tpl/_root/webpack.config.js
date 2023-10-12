const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        '_includes/dist/style_embed': './src/style_embed.scss',
        'assets/dist/style': './src/style.scss',
        'assets/dist/style_late': './src/style_late.scss',
        'assets/dist/style_custom': './src/style_custom.scss',

        'assets/dist/index': './src/index.ts',
        '_includes/dist/index_embed': './src/index_embed.ts'
    },
    cache: true,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'esbuild-loader',
                        options: {
                            loader: "ts",
                        }
                    }
                ],


                include: [
                    path.resolve(__dirname, "src"),
                    path.resolve(__dirname, "workspaces")
                ]
            },
            {
                enforce: 'pre',
                test: /\.html$/,
                loader: 'raw-loader',
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, "src")
            },


        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    //devtool: "eval",
    // switch to: 'development' to debug
    mode: "production",

    plugins: [

        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "[name].css",
          chunkFilename: "[id].css",
        }),


    ],

    optimization: {
        minimize: true,
        usedExports: "global"
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs/'),
    },
};
