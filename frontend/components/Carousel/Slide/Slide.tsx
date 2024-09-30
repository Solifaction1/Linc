import React from 'react';

import styles from './slide.module.scss';

type SlideProps = {
    imgUrl: string,
    imgAlt: string
}

const Slide = (props: SlideProps ) => (
    <div className={styles.slideContainer}>
        <img src={props.imgUrl} alt={props.imgAlt || 'Slide'} />
    </div>
);

export default Slide;