import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import Slide from './Slide/Slide'
import Arrow from './Arrow/Arrow'
import Indicator from './Indicator/Indicator'
import { propsConfig, defaultProps, Item } from './banner-carousel.config'

import styles from './banner-carousel.module.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const BannerCarousel: React.FC<propsConfig> = (props: propsConfig) => {
	return (
		<div className={styles.carousel}>
			<Carousel
				{...props}
				renderArrowNext={Arrow('next', !!props.showArrows)}
				renderArrowPrev={Arrow('prev', !!props.showArrows)}
				renderIndicator={Indicator}
				showThumbs={false} // For testing
			>
				{props.items &&
					props.items.map((item: Item) => {
						return (
							<div key={item.title}>
								<Slide imgAlt={item.title} imgUrl={item.url} />
							</div>
						)
					})}
			</Carousel>
		</div>
	)
}

BannerCarousel.defaultProps = defaultProps

export default BannerCarousel
