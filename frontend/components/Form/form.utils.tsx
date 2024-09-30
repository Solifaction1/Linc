const validateForm = (key: string, value: any, required: boolean): string => {
	if (!value && required) {
		return 'Please provide a value for this field'
	}
	switch (key) {
		case 'firstName':
			if (!value.length) return 'Please provide a first name'
			return ''
		case 'lastName':
			if (!value.length) return 'Please provide a last name'
			return ''
		case 'email':
			if (!value) return 'Please provide a valid email'
			if (
				!value
					.toLowerCase()
					.match(
						/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					)
			) {
				return 'Please validate if the email is correct'
			}
			return ''
		default:
			return ''
	}
}

export { validateForm }
