const path = require("path");

module.exports = {
    entry: "./stories/index.ts",
    output: {
        path: path.join(__dirname, 'storybook-static'),
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            loader: 'babel-loader',
            test: '/\.js|\.jsx$/',
            exclude: /node_modules/,
            use: 'raw-loader' 
        }],
        plugins: [new HtmlWebpackPlugin({ template: './storybook-static/index.html' })],
    },
    mode: 'production'
}