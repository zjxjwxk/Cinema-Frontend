module.exports = {
    // plugins: ['~plugins/vue-awesome-swiper'],
    /*
     ** Headers of the page
     */
    head: {
        title: 'cinema_front',
        meta: [{
            charset: 'utf-8'
        },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Cinema前端应用程序'
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }]
    },
    css: [
        '~/assets/css/global.css'
    ],
    /*
     ** Customize the progress bar color
     */
    loading: {
        color: '#3B8070'
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, {
            isDev,
            isClient
        }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    plugins: [
        '~plugins/config',
        '~plugins/axios',
        '~plugins/validate'
    ],
    axios: {
        proxy: true
    },
    env: {
        baseUrl: 'http://api-cinema.zjxjwxk.com',
        imgPre: 'http://img-cinema.zjxjwxk.com/',
        payDelay: 30000
    },
    proxyTable: [
        '~/api'
    ],
};

