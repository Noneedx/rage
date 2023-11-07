const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env, argv) {
    return {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        plugins: [new HtmlWebpackPlugin(
            {
                title: 'webpack Boilerplate',
                template: path.resolve(__dirname, './src/template.html'), // шаблон
                filename: 'index.html', // название выходного файла
                templateParameters: {
                    production: argv.mode == "production",
                    development: argv.mode == "development",
                },
            }
        )],
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                // { test: /\.svg$/, use: 'file-loader' },
                {
                    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
                    type: 'asset/inline',
                },
            ],
        },
        devServer: {
            port: 3000
        },
    }
}