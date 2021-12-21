const path = require("path");

module.exports = {
    entry: "./stories/index.ts",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            loader: 'babel-loader',
            test: '/\.js|\.jsx|\.tsx|\.ts$/',
            exclude: /node_modules/,
            use: 'raw-loader' 
        }],
        plugins: [new HtmlWebpackPlugin({ template: './dist/index.html' })],
    },
    mode: 'production'
}