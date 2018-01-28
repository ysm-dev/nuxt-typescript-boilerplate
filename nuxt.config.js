module.exports = {
	env: {
		baseUrl: process.env.BASE_URL || 'http://localhost:3000'
	},
	head: {
		title: 'nuxt-typescript-starter',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: 'Nuxt.js project'}
		],
		link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: {color: '#3B8070'},
	/*
	** Build configuration
	*/
	css: [],
	build: {
		extend(config, ctx) {
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(ts)$/,
					loader: 'ts-loader',
					exclude: /(node_modules)/
				})
			}
			for (let rule of config.module.rules) {
				if (rule.loader === 'vue-loader') {
					rule.options.loaders.ts = 'ts-loader?{"appendTsSuffixTo":["\\\\.vue$"]}'
				}
			}
		},
		vendor: ['vue-class-component']
	},
	mode: 'spa'
}
