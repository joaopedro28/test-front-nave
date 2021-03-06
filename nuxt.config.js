export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Naver.rs Usuarios',
		htmlAttrs: {
		lang: 'en'
		},
		meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ hid: 'description', name: 'description', content: '' }
		],
		link: [
		{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		],
		script: [
		{ src: '/js/bootstrap.min.js', type: "text/javascript", body: true },
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'assets/css/style.css'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: '~plugins/axios.js', ssr: true },
		{ src: '~plugins/vee-validate.js', ssr: true }

	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [

	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		'@nuxtjs/dotenv',
		'nuxt-webfontloader',
		'@nuxtjs/moment'
	],
	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		baseURL: process.env.API_BASE_URL_NAVE
	},
	webfontloader: {
		google: {
			families: ['Montserrat:400,600']
		}
	},
	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		transpile: [
            "vee-validate"
        ]
	}
}
