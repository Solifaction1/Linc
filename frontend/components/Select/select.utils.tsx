const validatePhoneNumber = (value: string): string => {
	const number = value.replace(/[^\d,+/]/g, '')

	return number
}

const validateField = (value: string, type: string): string => {
	switch (type) {
		case 'tel':
			return validatePhoneNumber(value)
		default:
			return value
	}
}

export default validateField
