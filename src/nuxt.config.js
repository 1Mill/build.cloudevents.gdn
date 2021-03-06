export default {
	// Target: https://go.nuxtjs.dev/config-target
	ssr: false,
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		htmlAttrs: { lang: 'en' },
		title: 'build.cloudevents.gdn',
		titleTemplate: '%s - build.cloudevents.gdn',
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		],
		meta: [
			{ charset: 'utf-8' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/vuetify
		'@nuxtjs/vuetify',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
	],

	// Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
	vuetify: {
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	},

	watchers: {
		webpack: { poll: true },
	},
}
