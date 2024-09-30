/* eslint-disable max-lines */
/* eslint-disable react/require-default-props */
import React from 'react'
import SEO from '@components/SEO/SEO'
import Quote from '@components/Quote/Quote'
import QuoteData from '@models/quote.model'
import ImageArticleData from '@models/imageArticle.model'
import ImageArticle from '@components/ImageArticle/ImageArticle'
import { getUniqueId } from '@utils/utils.service'
import { Page, SEO as SEOModel } from '@models/attributes.model'
import { Component } from '@models/component.model'
import YGWYS from '@components/YGWYS/YGWYS'
import { YGWYSData } from '@components/YGWYS/YGWYS.config'
import CTAData from '@models/cta.model'
import RechtsdomeinenCTA from '@components/RechtsdomeinenCTA/RechtsdomeinenCTA'
import RechtsdomeinenCTAData from '@models/rechtsdomeinenCTA.model'
import BlogsCTAData from '@models/blogsCTA.model'
import BlogsCTA from '@components/BlogsCTA/BlogsCTA'
import Kantoren from '@components/Kantoren/Kantoren'
import KantorenData from '@models/kantoren.model'
import ColorBlockCTA from '@components/ColorBlockCTA/ColorBlockCTA'
import ColorBlockData from '@models/colorBlockCTA.model'
import VerticalListData from '@models/verticalList.model'

import VerticalList from '@components/VerticalList/VerticalList'
import DoubleHeaderParagraph from '@components/DoubleHeaderParagraph/DoubleHeaderParagraph'
import DoubleHeaderParagraphData from '@models/doubleHeaderParagraph.model'
import OnzeMedewerkers from '@components/OnzeMedewerkers/OnzeMedewerkers'
import OnzeMedewerkersData from '@models/onzeMedewerkers.model'
import Form from '@components/Form/Form'
import CustomFormData from '@models/customForm.model'
import SwitchCTA from './SwitchCTA'

const SwitchComponent = ({
	seo,
	components,
	kantoorCollection,
	rechtsDomeinen,
	blogs,
	locale,
}: {
	seo: SEOModel | null
	components: Component[]
	blogs?: Page
	kantoorCollection?: Page
	rechtsDomeinen?: Page
	locale: string
}) => (
	<main>
		<SEO seo={seo} />
		{components &&
			components.map((item) => {
				switch (item?.__component) {
					case 'text.ygwys':
						return <YGWYS {...(item as YGWYSData)} inline key={getUniqueId()} />
					case 'sections.quote':
						return <Quote {...(item as QuoteData)} key={getUniqueId()} />
					case 'sections.image-article':
						return (
							<ImageArticle
								{...(item as ImageArticleData)}
								key={getUniqueId()}
							/>
						)
					case 'sections.cta':
						return <SwitchCTA ctaData={item as CTAData} key={getUniqueId()} />
					case 'sections.rechtsdomeinen-cta':
						return (
							<RechtsdomeinenCTA
								{...(item as RechtsdomeinenCTAData)}
								collectionType={rechtsDomeinen}
								key={getUniqueId()}
							/>
						)
					case 'sections.blogs-cta':
						return (
							<BlogsCTA
								{...(item as BlogsCTAData)}
								collectionType={blogs}
								key={getUniqueId()}
							/>
						)
					case 'sections.kantoor':
						return (
							<Kantoren
								{...(item as KantorenData)}
								kantoorCollection={kantoorCollection}
								key={getUniqueId()}
							/>
						)
					case 'sections.color-block-cta':
						return (
							<ColorBlockCTA
								{...(item as ColorBlockData)}
								key={getUniqueId()}
							/>
						)
					case 'sections.vertical-list':
						return (
							<VerticalList
								{...(item as VerticalListData)}
								key={getUniqueId()}
							/>
						)
					case 'sections.double-header-paragraph':
						return (
							<DoubleHeaderParagraph
								{...(item as DoubleHeaderParagraphData)}
								key={getUniqueId()}
							/>
						)
					case 'sections.onze-medewerkers':
						return (
							<OnzeMedewerkers
								{...(item as OnzeMedewerkersData)}
								key={getUniqueId()}
							/>
						)
					case 'form.custom-form':
						return (
							<Form
								key={item?.__component}
								{...(item as CustomFormData)}
								locale={locale}
							/>
						)
					default:
						return null
				}
			})}
	</main>
)

export default SwitchComponent
