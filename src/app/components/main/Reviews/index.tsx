import { useEffect, useState, useLayoutEffect } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss'
import { mocks } from './mocks';
import { ReactComponent as StarSvg } from 'shared/assets/icons/svg/star2.svg'
import { CarouselAdvanced, Typography } from 'shared/ui';
import { Button } from 'shared/ui';
import { BlockHeader } from 'app/components/common/BlockHader';
import { ReviewItem } from './components/ReviewItem';
import { getWindowSize, inViewportListener } from 'utils/window';

interface IProps {
    
}

const boxClass = 'reviews-box';

export const Reviews: React.FC<IProps> = (props) => {
    const {} = props;
    let { reviews } = mocks();
    const [ windowWidth, setWindowWidth ] = useState<number>(0);

    const [ isVisible, setIsVisible ] = useState<boolean>(false);
    useLayoutEffect(() => {
        inViewportListener({
            setIsVisible,
            boxClass
        });
    });

    useEffect(() => {
        if (windowWidth === 0) {
            getWindowSize(setWindowWidth);
        }
        window.addEventListener('resize', () => getWindowSize(setWindowWidth));
    }, [ windowWidth ]);

    const classMain = classNames([
        styles.container,
        boxClass,
        isVisible && 'animate__animated animate__fadeInUp'
    ]);

    return (
        <div className={classMain}>

            <div className={styles.header}>
                <div className={styles.info}>
                    <StarSvg/>
                    <Typography component={'p'} fontSize='20px' fontWeight='900'>
                        <p>Trustpilot<br/><span className={styles.reviewText}>5.0 out of 5 basedon 1638 reviews</span></p>
                    </Typography>
                </div>
                <div className={styles.blockHeader}>
                    <BlockHeader>BuyCarry reviews</BlockHeader>
                </div>
                <div className={styles.button}>
                    <Button>
                        ALL VIEWS
                    </Button>
                </div>
            </div>

            <div>
                <div className={styles.reviewsWrapper}>
                    {windowWidth > 1900
                        ? <div className={styles.reviews}>
                            {reviews.map((item, index) => 
                                <a href='https://www.trustpilot.com' target='_blank' key={index}>
                                    <ReviewItem {...item}/>
                                </a>
                            )}
                        </div>
                        : <CarouselAdvanced>
                            {reviews.map((item, index) => 
                                <a href='https://www.trustpilot.com' target='_blank' key={index}>
                                    <ReviewItem {...item}/>
                                </a>
                            )}
                        </CarouselAdvanced>
                    }
                </div>
            </div>

        </div>
    )
}