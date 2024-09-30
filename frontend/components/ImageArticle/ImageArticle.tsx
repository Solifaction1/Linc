import Image from 'next/image'
import React from 'react'
import ImageArticleData from '@models/imageArticle.model'
import SwitchCTA from '@templates/SwitchCTA'
import YGWYS from '@components/YGWYS/YGWYS'
import { getColor } from '@constants/color'
import { defaultProps } from './ImageArticle.config'
import styles from './image-article.module.scss'

const ImageArticle = (props: ImageArticleData) => {
	const image = props.image.data && props.image?.data?.attributes

	return (
		<article
			className={`${styles.imageArticle} ${
				styles[getColor(props.color) || 'blue-gray']
			} ${styles[props.imagePosition]}`}
		>
			<div className={styles.imageArticleContainer}>
				{image && (
					<div className={styles.imageArticleImage}>
						<Image
							src={image.url ?? ''}
							alt={image.name ?? ''}
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
				<div className={styles.imageArticleText}>
					<h2>{props.title}</h2>
					{props.description && (
						<YGWYS text={props.description.text} className={styles.text} />
					)}

					{props.cta && (
						<SwitchCTA ctaData={props.cta} color={getColor(props.color)} />
					)}
				</div>
			</div>
		</article>
	)
}

ImageArticle.defaultProps = defaultProps

export default ImageArticle
