import { Component } from '@models/component.model'

export interface ContactData extends Component {
	country: string
	contact: Array<Contact>
}

export interface Contact {
	id: number
	street: string
	houseNumber: string
	postalCode: number
	city: string
	telephone: string
}
