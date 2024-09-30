import React from 'react'
import sanitizeHtml from 'sanitize-html'
import { YGWYSData } from './YGWYS.config'
import styles from './ygwys.module.scss'

const YGWYS = (props: YGWYSData) => {
	return (
		<div
			className={`${styles.ygwys} 
			${props.className} ${props.inline && styles.inline}`}
			dangerouslySetInnerHTML={{
				__html: sanitizeHtml(props.text, {
					allowedTags: [
						'img',
						'video',
						'address',
						'article',
						'aside',
						'footer',
						'header',
						'h1',
						'h2',
						'h3',
						'h4',
						'h5',
						'h6',
						'hgroup',
						'main',
						'nav',
						'section',
						'blockquote',
						'dd',
						'div',
						'dl',
						'dt',
						'figcaption',
						'figure',
						'hr',
						'li',
						'main',
						'ol',
						'p',
						'pre',
						'ul',
						'a',
						'abbr',
						'b',
						'bdi',
						'bdo',
						'br',
						'cite',
						'code',
						'data',
						'dfn',
						'em',
						'i',
						'kbd',
						'mark',
						'q',
						'rb',
						'rp',
						'rt',
						'rtc',
						'ruby',
						's',
						'samp',
						'small',
						'span',
						'strong',
						'sub',
						'sup',
						'time',
						'u',
						'var',
						'wbr',
						'caption',
						'col',
						'colgroup',
						'table',
						'tbody',
						'td',
						'tfoot',
						'th',
						'thead',
						'tr',
					],
					disallowedTagsMode: 'discard',
					allowedAttributes: {
						a: ['href', 'name', 'target'],
						figure: ['class', 'style', 'className'],
						// We don't currently allow img itself by default, but
						// these attributes would make sense if we did.
						img: [
							'src',
							'srcset',
							'alt',
							'title',
							'width',
							'height',
							'loading',
							'style',
							'sizes',
							'class',
						],
						p: ['style', 'class'],
						ol: ['style'],
						ul: ['style'],
						span: ['style', 'class'],
					},
				}),
			}}
		/>
	)
}

export default YGWYS
