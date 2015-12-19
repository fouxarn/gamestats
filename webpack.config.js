module.exports = {
    entry: "./components/app.jsx",
    output: {
        filename: "public/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader' ,
                query: {
                    "presets": ["react"]
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
