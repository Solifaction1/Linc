import { DefaultAttributes } from './attributes.model'

export default interface KantoorData {
	id: number
	attributes: KantoorAttributes
}

interface KantoorAttributes extends DefaultAttributes {
    title: string
	adress: string
    phone: string
    email: string
}
