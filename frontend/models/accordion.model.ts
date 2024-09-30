import React from 'react'
import { Component } from './component.model'

export default interface AccordionData extends Component {
	title: string
	children?: React.ReactNode
}

export interface AccordionsData extends Component {
	accordion: AccordionData[]
	className?: string
	titleClassName?: string
	children?: React.ReactNode
	componentId?: string
}
