// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
	app: {
		head: {
			title: 'Abito',
			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
				{
					charset: 'utf-8',
				},
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
				},
				{
					rel: 'stylesheet',
					href: 'https://cdn.jsdelivr.net/npm/gardevoir',
				},
			],
		},
	},
	vite: {
		plugins: [svgLoader()],
	},
	modules: ['@pinia/nuxt'],
});
