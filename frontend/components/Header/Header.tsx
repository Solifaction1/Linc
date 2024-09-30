import React from 'react'
import Image from 'next/image'
import { getUniqueId } from '@utils/utils.service'

import { HeaderData } from '@models/attributes.model'
import SwitchCTA from '@templates/SwitchCTA'
import YGWYS from '@components/YGWYS/YGWYS'
import { getColor, getColorHeader } from '@constants/color'
import styles from './header.module.scss'
import { defaultProps } from './header.config'

const Header = (props: HeaderData) => {
	const image = props.image?.data?.attributes
	return (
		<header
			className={`${styles.header} ${styles[getColor(props.color)]} ${
				styles[props.imagePosition]
			} ${
				props.bottomText?.description?.text
					? styles.bottomText
					: styles.noBottomText
			}
			${!image && styles.noImage}`}
		>
			<div className={styles.headerContainer}>
				<div className={styles.headerTextWrapper}>
					{props.text?.text && (
						<div className={styles.text}>
							<YGWYS text={props.text?.text} />
						</div>
					)}

					{props.CTA && (
						<SwitchCTA
							ctaData={props.CTA}
							color={`${getColorHeader(props.color)}`}
						/>
					)}
				</div>

				{image?.url && (
					<div className={styles.headerImageWrapper}>
						<Image
							className={styles.image}
							key={getUniqueId()}
							width={image.width}
							height={image.height}
							src={image.url ?? ''}
							alt={image.alternativeText ?? ''}
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
			{props.bottomText?.description?.text && (
				<div className={styles.headerBottomContainer}>
					<div className={styles.bottomText}>
						<div className={styles.bottomTextWrapper}>
							{props.bottomText?.description.text && (
								<div className={styles.text}>
									<YGWYS text={props.bottomText?.description.text} />
								</div>
							)}

							{props.bottomText.cta && (
								<SwitchCTA ctaData={props.bottomText.cta} />
							)}
						</div>
					</div>
				</div>
			)}
		</header>
	)
}

Header.defaultProps = defaultProps

export default Header
