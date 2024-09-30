import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import translations from './translations/translation.json'

i18n
	// .use(Backend)
	// .use(LanguageDetector)
	// .use(initReactI18next)
	// .init({
	// 	resources: translations,
	// 	fallbackLng: 'en',

	// 	debug: true,

	// 	interpolation: {
	// 		escapeValue: false,
	// 	},
	// 	react: {
	// 		useSuspense: false,
	// 	},
	// 	languages: ['en', 'fr', 'nl'],
	// })

export default i18n
