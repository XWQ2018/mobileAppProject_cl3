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
            css: {
                // options here will be passed to css-loader
            },
            postcss: {
                // options here will be passed to postcss-loader
                plugins: [require('postcss-px2rem')({
                    remUnit: 37.5
                })]
            }
        }
    }
}