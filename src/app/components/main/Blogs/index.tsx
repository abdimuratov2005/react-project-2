import { useEffect, useState, useLayoutEffect } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss'
import { BlockHeader } from 'app/components/common/BlockHader';
import { Button, CarouselAdvanced } from 'shared/ui';
import { mocks } from './mocks';
import { BlogItem } from './components/BlogItem';
import { getWindowSize, inViewportListener } from 'utils/window';

interface IProps {
    
}

const boxClass = 'blogs-box';

export const Blogs: React.FC<IProps> = (props) => {
    const {} = props;
    const blogItems = mocks();

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
                <BlockHeader>OUR BLOGS</BlockHeader>
            </div>

            <div>
                <div className={styles.blogsWrapper}>
                    {windowWidth > 1900
                        ? <div className={styles.content}>
                            {blogItems.map((item, index) => (
                                <BlogItem item={item} key={index}></BlogItem>
                            ))}
                        </div>
                        : <CarouselAdvanced>
                            {blogItems.map((item, index) => (
                                <BlogItem item={item} key={index}></BlogItem>
                            ))}
                        </CarouselAdvanced>
                    }
                </div>
            </div>

            <div className={styles.footer}>
                <Button color='gray'>LOAD MORE</Button>
            </div>

        </div>
    )
}