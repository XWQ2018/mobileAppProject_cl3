const path = require('path');

const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

let isDev = process.env.NODE_ENV === 'development';


module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/api': {
                // 目标 API 地址
                target: process.env.VUE_APP_API_URL,
                // 如果要代理 websockets
                // ws: true,
                // 将主机标头的原点更改为目标URL
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }

        }
    },
    lintOnSave: false,
    css: {
        // 是否使用css分离插件 ExtractTextPlugin Default: 生产环境下是 true，开发环境下是 false
        // extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // 启用 CSS modules for all css / pre-processor files.
        modules: false,
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 37.5, // 换算的基数
                        propList: ['*'],
                    }),
                ]
            },
            less: {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader',
                }]
            }
        }
    },

    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    },

    configureWebpack: config => {
        if (!isDev) {
            const plugins = [];
            plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: productionGzipExtensions,
                    threshold: 10240,
                    minRatio: 0.8
                })
            );
            config.plugins = [...config.plugins, ...plugins];
        }
    },

}

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, '@/assets/less/style.less'),
                path.resolve(__dirname, '@/assets/less/theme-colors-default.less')
            ],
        })
}