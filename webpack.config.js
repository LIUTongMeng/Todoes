const path = require('path'),
      webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
      distPath = path.resolve(__dirname, 'dist'),
      srcPath = path.resolve(__dirname, 'src');
module.exports = {
    mode:'development',
    entry:{
        app:srcPath
    },
    output:{
        filename:'[name].[hash].js',
        path:distPath,
        // publicPath:'/'
    },
    devtool:'eval-source-map',
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                use:"babel-loader",
                exclude:/node_modules/
            },
            {
                test:/\.html$/,
                use:[{
                    loader:"html-loader",
                    options: {
                        minimize: true
                      }
                }]
            },
            {
                test:/\.css$/,
                use:["style-loader", "css-loader"]
            },
            {
                test:/\.less$/,
                use:["style-loader", "css-loader", "less-loader"]
            },
            {
                test:/\.(png|jpe?g)$/,
                use:["url-loader"]
            },
            {
                test:/\.(svg)$/,
                use:["file-loader"]
            }
        ]
    },
    resolve:{
        alias:{
            "components":path.resolve(__dirname, "src/components"),
            "assets":path.resolve(__dirname, "src/assets")
        }
    },
    plugins:[
        new webpack.HashedModuleIdsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            React:'react',
            ReactDOM:'react-dom',
            classnames : 'classnames'
        }),
        new HtmlWebpackPlugin({
            template:'./template.html',
            filename:'index.html'
        }),
        // new UglifyJsPlugin()
    ],
    devServer:{
        compress:true,
        contentBase: distPath,
        port:3000
    }
}