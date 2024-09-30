import { LANGUAGES } from '@constants/languages'
// Validate location and return right locale
const mapLocale = (locale: string) => {
	switch (locale) {
		case 'BE':
			return LANGUAGES.en
		case 'NL':
			return LANGUAGES.nl
		case 'FR':
			return LANGUAGES.fr
		case 'LU':
			return LANGUAGES.fr
		default:
			return LANGUAGES.en
	}
}

export { mapLocale }
