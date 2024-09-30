import VerticalListData from "@models/verticalList.model"

const defaultProps: VerticalListData = {
    id: 1,
    location: 'left',
    description: {
        id: 1,
        title: 'title',
        description: {
          text: '<p>test</p>'
        },
        cta: {
		    id: 0,
		    title: 'cta title',
		    link: '/link',
		    externalLink: false,
		    buttonType: 'Button primary',
	    },
    },
    titles: [
        {
            id: 1,
            title: "title 1",
        },
        {
            id: 2,
            title: "title 2",
        }
    ],
}
export { defaultProps }