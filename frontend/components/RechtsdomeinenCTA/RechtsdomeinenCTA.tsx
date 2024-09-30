import Image from 'next/image'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import RechtsdomeinenCTAData from '@models/rechtsdomeinenCTA.model'
import SwitchCTA from '@templates/SwitchCTA'
import { Icon } from '@templates/switch-icon.config'
import SwitchIcon from '@templates/SwitchIcon'
import { BREAKPOINTS } from '../../constants/breakpoints'
import { defaultProps } from './rechtsdomeinenCTA.config'

import styles from './rechtsdomeinen-cta.module.scss'

const RechtsdomeinenCTA = (props: RechtsdomeinenCTAData) => {
	const image = props.image?.data?.attributes
	const isTablet = useMediaQuery({ query: `(max-width: ${BREAKPOINTS.lg}px)` })

	return (
		<article className={styles.rechtsdomeinenCTA}>
			<div className={styles.rechtsdomeinenCTAContainer}>
				{image && isTablet && (
					<div className={`${styles.imageMobile}`}>
						<Image
							src={image.url}
							alt={image.name}
							width={image.width}
							height={image.height}
							priority
							loader={() => {
								return `/api/custom-loader?url=${encodeURIComponent(
									image.url
								)}?q=${100}`
							}}
						/>
					</div>
				)}
				<div className={`${styles.text} ${isTablet && styles.textMobile}`}>
					{props.title && <h2 className={styles.title}>{props.title}</h2>}
					{props.description && (
						<p className={styles.description}>{props.description}</p>
					)}
					{props.cta && (
						<div className={styles.cta}>
							<SwitchCTA ctaData={props.cta} color="darkGreen" />
						</div>
					)}
				</div>

				{image && !isTablet && (
					<div className={`${styles.image}`}>
						<Image
							src={image.url}
							alt={image.name}
							width={image.width}
							height={image.height}
							priority
							loader={() => {
								return `/api/custom-loader?url=${encodeURIComponent(
									image.url
								)}?q=${100}`
							}}
						/>
					</div>
				)}
			</div>

			<div className={styles.rechtsDomeinen}>
				<div className={styles.rechtsDomeinenContainer}>
					{props.collectionType?.data.map((rechtsDomein) => (
						<div className={styles.cta} key={rechtsDomein.id}>
							<SwitchCTA
								ctaData={{
									title: rechtsDomein.attributes.title ?? '',
									link: `/onze-rechtsdomeinen#${rechtsDomein.id}`,
									externalLink: false,
									buttonType: 'Link',
								}}
							/>

							<SwitchIcon icon={Icon.ANGLE_RIGHT} />
						</div>
					))}
				</div>
			</div>
		</article>
	)
}

RechtsdomeinenCTA.defaultProps = defaultProps

export default RechtsdomeinenCTA
