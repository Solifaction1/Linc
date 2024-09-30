import React from 'react'
import { useRouter } from 'next/router'
import CTAData from '@models/cta.model'
import Link from '@components/Link/Link'
import Button from '@components/Button/Button'

const getButtonType = (buttonType: string) => {
	switch (buttonType) {
		case 'Button primary': {
			return 'primary'
		}
		case 'Button secondary': {
			return 'secondary'
		}
		case 'Button tertiary': {
			return 'tertiary'
		}
		case 'Button quaternary': {
			return 'quaternary'
		}
		default: {
			return 'primary'
		}
	}
}

const SwitchCTA = ({
	ctaData,
	className,
	color,
}: {
	ctaData: CTAData
	className?: string | undefined
	color?: string | undefined
}) => {
	const router = useRouter()
	switch (ctaData?.buttonType) {
		case 'Link':
			return (
				<Link
					label={ctaData?.title}
					href={ctaData?.link}
					className={className}
					linkType={ctaData?.externalLink ? 'external' : 'link'}
					blank
				/>
			)
		case 'Button primary':
		case 'Button secondary':
		case 'Button tertiary':
			return (
				<Button
					label={ctaData?.title}
					className={className}
					buttonType={getButtonType(ctaData.buttonType)}
					handleClick={() => {
						if (!ctaData.externalLink) router.push(ctaData.link)
						else window.open(ctaData.link, '_blank')
					}}
					color={color}
				/>
			)
		default:
			// console.error(
			// 	`${ctaData.buttonType} does not exist in component switchCTA`
			// )
			return null
	}
}

export default SwitchCTA

SwitchCTA.defaultProps = {
	className: '',
	color: '',
}
