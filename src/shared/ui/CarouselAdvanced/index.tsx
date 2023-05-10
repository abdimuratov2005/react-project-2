import React, { useState } from 'react';
import MuiCarousel from 'react-multi-carousel'; //https://www.npmjs.com/package/react-multi-carousel
import 'react-multi-carousel/lib/styles.css';
import { v4 as uuidv4 } from 'uuid';

import styles from './styles.module.scss'
import { SwipeGradient } from '../SwipeGradient';
import classNames from 'classnames';

interface IProps {
    children: any;
    autoPlay?: boolean;
    indicators?: boolean;
    swipe?: boolean;
    cycleNavigation?: boolean;
    navButtonsAlwaysVisible?: boolean;
    navButtonsAlwaysInvisible?: boolean;
    fullHeightHover?: boolean;
    animation?: 'fade' | 'slide';
    duration?: number;
}

export const CarouselAdvanced: React.FC<IProps> = (props) => {
    const [ showGradient, setShowGRadient ] = useState<boolean>(true);
    const uuid = uuidv4();

    const {
        children,
        autoPlay = false,
        indicators,
        swipe,
        cycleNavigation,
        navButtonsAlwaysVisible,
        navButtonsAlwaysInvisible,
        fullHeightHover,
        animation = 'slide',
        duration = 800,
    } = props;

    const responsive = {
        desktopWide: {
            breakpoint: { max: 1900, min: 1600 },
            items: 4,
            //slidesToSlide: 3 // optional, default to 1.
        },
        desktop: {
            breakpoint: { max: 1600, min: 1280 },
            items: 3,
            //slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1280, min: 800 },
            items: 2,
            //slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 800, min: 0 },
            items: 1,
            //slidesToSlide: 1 // optional, default to 1.
        }
    };
    
    const afterChange = ({
        previousSlide,
        currentSlide
    }) => {
        // console.log('afterChange:', previousSlide, currentSlide);

    }

    const beforeChange = ({
        nextSlide,
        currentSlide
    }) => {
        const itemsCount = document.querySelectorAll(`.carousel-dots-${uuid} li`).length;
        //console.log('beforeChange:', nextSlide, itemsCount);
        setShowGRadient(!(nextSlide === (itemsCount - 1)));
    }

    return (
        <div className={styles.wrapper} id={uuid}>
            {showGradient && <SwipeGradient />}
            <MuiCarousel
                afterChange={(previousSlide, { currentSlide }) => {
                    afterChange({
                        previousSlide,
                        currentSlide
                    });
                }}
                beforeChange={(nextSlide, { currentSlide }) => {
                    beforeChange({
                        nextSlide,
                        currentSlide
                    });
                }}
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                //autoPlay={this.props.deviceType !== 'mobile' ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition='all 1s'
                transitionDuration={1000}
                containerClass={styles.container}
                removeArrowOnDeviceType={[ 'desktopWide', 'desktop', 'tablet', 'mobile' ]}
                //deviceType={this.props.deviceType}
                dotListClass={classNames([
                    styles.dots,
                    `carousel-dots-${uuid}`
                ])}
                itemClass={styles.item}
                sliderClass={styles.slider}
                renderDotsOutside={true}
                additionalTransfrom={0}
            >
                {children}
            </MuiCarousel>
        </div>
    )
}

