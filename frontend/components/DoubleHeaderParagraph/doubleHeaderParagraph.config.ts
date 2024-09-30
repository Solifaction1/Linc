import DoubleHeaderParagraphData from "@models/doubleHeaderParagraph.model";

const defaultProps: DoubleHeaderParagraphData = {
    leftParagraph: { text: '<h1>Header</h1><p>Paragraph</p>' },
    rightParagraph: { text: '<h1>Header</h1><p>Paragraph</p>' },
    leftCta: null,
    rightCta: null
}
export { defaultProps }