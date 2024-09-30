import React from 'react'

import { getUniqueId } from '@utils/utils.service'
import { AccordionsData } from '@models/accordion.model'
import AccordionItem from './AccordionItem/AccordionItem'

const Accordion = (props: AccordionsData) => (
	<section
		className={`${props.className ? props.className : ''}`}
		id={props.componentId ? props.componentId : ''}
	>
		{props.accordion.map((item) => (
			<AccordionItem {...item} key={getUniqueId()}>
				{props.children}
			</AccordionItem>
		))}
	</section>
)

export default Accordion
