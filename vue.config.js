const path = require('path');
module.exports = {
    publicPath: 'jns',
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
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 37.5, // 换算的基数
                        propList: ['*'],
                    }),
                ]
            }
        }
    },

    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    },

}
function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, '@/less/test/import.less'),
            ],
        })
}