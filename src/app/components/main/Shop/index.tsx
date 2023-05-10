import { useEffect, useState, useLayoutEffect } from 'react';
import { Button, CarouselAdvanced, RadioButtons, Typography } from 'shared/ui';
import { mocks } from './mocks';
import { ShopItem } from './components/ShopItem';
import { HexButton } from '../../../../shared/ui/HexButton';
import { ReactComponent as PlusSvg } from 'shared/assets/icons/svg/plus.svg'
import { BlockHeader } from 'app/components/common/BlockHader';
import * as IconsSvg from 'shared/assets/icons/svg'

import classNames from 'classnames';
import styles from './styles.module.scss'
import { getWindowSize, inViewportListener } from 'utils/window';

interface IProps {
    
}

const boxClass = 'shop-box';

export const Shop: React.FC<IProps> = (props) => {
    const {} = props;
    let { buttons, shopItems } = mocks();
    const [ windowWidth, setWindowWidth ] = useState<number>(0);
    const [ showFilterMenu, setShowFilterMenu ] = useState<boolean>(false);

    const toggleFilterMenu = () => {
        setShowFilterMenu(!showFilterMenu);
    }

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

    const renderCustomOffer = () => {
        return (
            <>
                <div className={styles.offer}>
                <HexButton borders={3}>
                    <PlusSvg/>
                </HexButton>
                <Typography mb={window.innerWidth <= 600 ? '12px' : '16px'} component={'p'} color='platinum' fontSize='20px' fontWeight='900'>
                    Custom Offers
                </Typography>
                </div>
            </>
        )
    }

    const renderGrid = () => {
        
        return (
            <div className={styles.shop}>
                {shopItems.map((item, index) => <ShopItem {...item} key={index}/>)}
                {renderCustomOffer()}
            </div>
        )
    }

    const renderCarousel = () => {
        return (
            <>
                <CarouselAdvanced>
                    {shopItems.map((item, index) => <ShopItem {...item} key={index}/>)}
                </CarouselAdvanced>
                {renderCustomOffer()}
            </>
        )
    }

    const renderButtons = () => {
        return  <div className={styles.buttons}>
                    <RadioButtons
                        customClasses={[ 'small' ]}
                        color='cooper'
                        value={buttons.findIndex(item => item.active) + 1}
                        buttons={
                            buttons.map((item, index) => (
                                { label: item.name }
                            ))
                        }
                        type='discrete'
                    />
                </div>
    }

    return (
        <div className={classMain}>

            <BlockHeader>HOTSALES</BlockHeader>

            {renderButtons()}

            <div className={styles.buttonsMobile}>
                <Button variant='pale' color='cooper'>
                    All Games
                </Button> 
                <Button endIcon={<IconsSvg.arrowBold />} onClick={() => toggleFilterMenu()}>
                    Filters 
                </Button>
            </div>

            <div className={styles.filtered && showFilterMenu && styles.isActive}>
                {showFilterMenu && renderButtons()}
            </div>

            <div>
                <div className={styles.shopWrapper}>
                    {windowWidth > 1900
                        ? renderGrid()
                        : renderCarousel()
                    } 
                </div>
            </div>

        </div>
    )
}