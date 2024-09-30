import React from 'react'
import BlogsCTAData from '@models/blogsCTA.model'
import SwitchCTA from '@templates/SwitchCTA'
import SwitchIcon from '@templates/SwitchIcon'
import { Icon } from '@templates/switch-icon.config'
import { defaultProps } from './blogsCTA.config'
import styles from './blogs-cta.module.scss'

const BlogsCTA = (props: BlogsCTAData) => (
	<article className={styles.blogsCTA}>
		<div className={styles.blogsCTAContainer}>
			{props.title && <h2 className={styles.title}>{props.title}</h2>}
			{props.description && (
				<p className={styles.description}>{props.description}</p>
			)}
			{props.cta && (
				<div className={styles.cta}>
					<SwitchCTA ctaData={props.cta} />
				</div>
			)}
		</div>

		<div className={styles.blogs}>
			{props.collectionType?.data.map((rechtsDomein) => (
				<div className={styles.cta} key={rechtsDomein.id}>
					<SwitchCTA
						ctaData={{
							title: rechtsDomein.attributes.title ?? '',
							link: '/',
							externalLink: false,
							buttonType: 'Link',
						}}
					/>

					<SwitchIcon icon={Icon.ANGLE_RIGHT} />
				</div>
			))}
		</div>
	</article>
)

BlogsCTA.defaultProps = defaultProps

export default BlogsCTA
