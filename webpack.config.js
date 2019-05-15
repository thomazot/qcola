module.exports = (env, argv) => {
    const path                    = require("path");
    const webpack                 = require("webpack");
    const IconfontWebpackPlugin   = require("iconfont-webpack-plugin");
    const MiniCssExtractPlugin    = require("mini-css-extract-plugin");
    const UglifyJsPlugin          = require("uglifyjs-webpack-plugin");
    const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
    const development             = argv.mode;
    const SpriteLoaderPlugin      = require('svg-sprite-loader/plugin');
    const Opencode                = require('./opencode');

    // IN and OUT
    const config = {
        entry: {
            qcola: './src/index.js'
        },
        output: {
            path: path.resolve(__dirname, './opencode/js'),
            filename: '[name].js'
        }
    };

    // Resolve
    config.resolve = {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            Config: path.resolve(__dirname, './src/core/config'),
            Plugins: path.resolve(__dirname, './src/core/plugins'),
            Core: path.resolve(__dirname, './src/core'),
            Assets: path.resolve(__dirname, './src/assets'),
            Snippets: path.resolve(__dirname, './src/assets/snippets'),
            Modules: path.resolve(__dirname, './src/assets/modules'),
            Pages: path.resolve(__dirname, './src/assets/pages'),
            React: path.resolve(__dirname, './src/react'),
            'React:Actions': path.resolve(__dirname, './src/react/actions'),
            'React:Modules': path.resolve(__dirname, './src/react/modules')
        }
    };

    //  Plugins
    config.plugins = [
        new SpriteLoaderPlugin({
            plainSprite: true,
            spriteAttrs: {
                id: 'sprite-svg'
            }
        }),
        new MiniCssExtractPlugin({
            filename: "./../css/[name].css"
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            Zepto: "jquery"
        }),
        new Opencode({
            message: "Hello world from the config"
        })
    ];

    // Modules
    config.module = {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    plugins: ["@babel/plugin-transform-runtime", "@babel/plugin-proposal-object-rest-spread", "@babel/plugin-proposal-class-properties", "@babel/plugin-syntax-dynamic-import"],
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    comments: true
                }
            },
            {
                test: /\.(eot|woff|woff2|ttf|png|jpg|gif)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            extract: true,
                            publicPath: '../elements/',
                            spriteFilename: 'sprite.html'
                        }
                    },
                    'svgo-loader'
                ]
            },
            {
                test: /\.(styl|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {  
                            plugins: (loader) => [
                                new IconfontWebpackPlugin(loader),
                                require('autoprefixer')({
                                    browsers: ['last 2 versions'],
                                    grid: true
                                }),
                                require('postcss-object-fit-images'),
                                require('postcss-inline-svg'),
                                require('postcss-svgo')
                            ]
                        }
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            import: path.resolve(__dirname, './src/assets/settings.styl')
                        }
                    },
                ]
            }
        ]
    };

    // Production 
    if(development == 'production') {
        config.optimization = {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: false,
                    uglifyOptions: {
                        compress: {
                            drop_console: true,
                        }
                    }
                }),
                new OptimizeCSSAssetsPlugin({})
            ],
            splitChunks: false
        }
    } else {
        config.optimization = {
            splitChunks: false
        }
    }
    
    return config;
}