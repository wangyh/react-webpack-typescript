module.exports = {
    context: __dirname + "/app",
    entry: {
        javascript: "./app.tsx",
        html: "./index.html"
    },
    output: {
        filename: "app.js",
        path: __dirname + "/dist"
    },
    devtool: 'source-map',
    resolve: {
        extensions:['', '.js', '.jsx', 'ts', 'tsx']
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "react-hot!ts-loader"
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};
