import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';

export default defineNuxtPlugin(({ vueApp }) => {
	const i18n = createI18n({
		legacy: false,
		globalInjection: true,
		locale: 'ru',
		messages: {
			en,
		},
		missing: (locale, key) => {
			if (locale === 'ru') {
				return; // Ничего не делать для "ru" локали
			}
			console.warn(`Missing translation for key '${key}' in locale '${locale}'`);
		},
	});

	vueApp.use(i18n);
});
