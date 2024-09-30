import React from 'react'
import { Navigation } from '@models/navigation.model'

import PageData from '@models/page.model'

type LayoutProps = {
	navigation?: {
		resultNavigation: Navigation[]
		resultFooter: Navigation[]
	}
	children: React.ReactNode
	data?: PageData
}

export type { LayoutProps }
