const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        open: false,
        port: 8089,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
              test: /\.(sass|scss|css)$/,
              use: [{
                loader: 'style-loader',
              }, {
                loader: 'css-loader',
              }, {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      [
                        "autoprefixer"
                      ]
                    ]
                  }
                }
              }, {
                loader: 'sass-loader'
              }]
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
};
