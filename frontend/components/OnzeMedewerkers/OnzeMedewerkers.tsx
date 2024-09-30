/* eslint-disable max-lines */
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'

import OnzeMedewerkersData from '@models/onzeMedewerkers.model'
import SwitchIcon from '@templates/SwitchIcon'
import { Icon } from '@templates/switch-icon.config'
import Button from '@components/Button/Button'
import { BREAKPOINTS } from '@constants/breakpoints'
import { defaultProps } from './onzeMedewerkers.config'
import styles from './onze-medewerkers.module.scss'

const OnzeMedewerkers: React.FC<OnzeMedewerkersData> = (
	props: OnzeMedewerkersData
) => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [interval, setInterval] = useState(0)
	const timelineRef = useRef<HTMLDivElement>(null)
	const isMobile = useMediaQuery({ maxWidth: BREAKPOINTS.md })
	const isTablet = useMediaQuery({ maxWidth: BREAKPOINTS.lg })

	const handleNext = () => {
		setCurrentSlide((prevSlide) => prevSlide + 1)
	}

	const handleBack = () => {
		setCurrentSlide((prevSlide) => prevSlide - 1)
	}

	useEffect(() => {
		if (isMobile) {
			setInterval(1)
		} else if (isTablet) {
			setInterval(3)
		} else {
			setInterval(4)
		}
	}, [isMobile, isTablet])

	useEffect(() => {
		const slideSize = 29.6
		if (timelineRef.current) {
			timelineRef.current.style.transform = `translateX(-${
				currentSlide * (slideSize - 2) * interval
			}rem)`
		}
	}, [currentSlide, interval])

	return (
		<section className={styles.onzeMedewerkers}>
			<h2>{props.title}</h2>
			<p>{props.description}</p>

			{props.employees.data && (
				<div className={styles.employees}>
					<div className={styles.employeeWrapper} ref={timelineRef}>
						{props.employees.data.map((employee) => (
							<div key={employee.id} className={styles.employee}>
								<Link href={`/employee/${employee.attributes.slug}`}>
									<Image
										src={
											employee.attributes.header.image.data?.attributes.url ??
											''
										}
										alt={
											employee.attributes.header.image.data?.attributes
												.alternativeText ?? ''
										}
										height={321}
										width={268}
										priority
										loader={() => {
											return `/api/custom-loader?url=${encodeURIComponent(
												employee.attributes.header.image.data?.attributes.url ??
													''
											)}?q=${100}`
										}}
									/>
								</Link>

								<div className={styles.text}>
									<h6 className={styles.name}>
										{`${`${employee.attributes.firstName}`}${` ${employee.attributes.name}`}`}
									</h6>
									<a
										href={`tel:${employee.attributes.telephone}`}
										className={styles.telephone}
									>
										<h6>{`Tel: ${employee.attributes.telephone}`}</h6>
									</a>

									{employee.attributes.linkedin && (
										<a href={employee.attributes.linkedin}>
											<SwitchIcon
												icon={Icon.LINKEDIN}
												className={styles.icon}
											/>
										</a>
									)}

									{employee.attributes.rechtsdomeinen.data.map(
										(rechtsdomein) => (
											<p key={rechtsdomein.id} className={styles.rechtsdomein}>
												{rechtsdomein.attributes.title}
											</p>
										)
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			)}

			<div className={styles.buttons}>
				<Button
					handleClick={handleBack}
					buttonType="secondary"
					icon="Arrow left"
					className={styles.backButton}
					disabled={currentSlide === 0}
				/>

				<Button
					handleClick={handleNext}
					buttonType="secondary"
					icon="Arrow right"
					className={styles.backButton}
					disabled={
						props.employees.data.length - currentSlide * interval < interval
					}
				/>
			</div>
		</section>
	)
}

OnzeMedewerkers.defaultProps = defaultProps

export default OnzeMedewerkers
