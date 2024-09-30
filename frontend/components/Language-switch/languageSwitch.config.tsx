import { Localizations } from '@models/attributes.model'

type languageData = {
	size?: 'sm' | 'md' | 'lg' | string
	className?: string
	languages?: languageType
	localizations?: Localizations
}

type languageType = [
	{
		id: number
		name: string
		code: string
		createdAt: string
		updatedAt: string
		isDefault: boolean
	}
]

const defaultProps = {
	size: 'md',
	className: '',
}

export type { languageData, languageType }
export { defaultProps }
