import { useState, useLayoutEffect } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss'
import { Button, Typography } from 'shared/ui';
import { ReactComponent as DarrowSvg } from 'shared/assets/icons/svg/darrow.svg'
import { ReactComponent as GoldSvg } from 'shared/assets/icons/svg/gold.svg'
import { ReactComponent as LightningSvg } from 'shared/assets/icons/svg/lightning.svg'
import { ReactComponent as CartSvg } from 'shared/assets/icons/svg/cart.svg'
import { ReactComponent as ProfileSvg } from 'shared/assets/icons/svg/profile.svg'
import { ReactComponent as ShieldSvg } from 'shared/assets/icons/svg/shield.svg'
import { ReactComponent as StreamSvg } from 'shared/assets/icons/svg/stream.svg'
import { ReactComponent as VideoSvg } from 'shared/assets/icons/svg/video.svg'
import { ReactComponent as PlaySvg } from 'shared/assets/icons/svg/play.svg'
import { HexButton } from 'shared/ui/HexButton';
import { inViewportListener } from 'utils/window';

interface IProps {
    
}

const boxClass = 'top-box';

export const Top: React.FC<IProps> = (props) => {
    const {} = props;

    const [ isVisible, setIsVisible ] = useState<boolean>(false);
    
    useLayoutEffect(() => {
        inViewportListener({
            setIsVisible,
            boxClass
        });
    }); 

    const classMain = classNames([
        styles.container,
        boxClass,
        isVisible && 'animate__animated animate__fadeInUp'
    ]);

    const LeftButtons = () => {
        return (
            <div className={classNames([
                styles.buttons
            ])}>
                
                <Button variant='colored' color='cooper2' startIcon={<LightningSvg/>}>
                    Boost
                </Button>
                <Button variant='colored' color='green2' startIcon={<CartSvg/>}>
                    Marketplace
                </Button>
                <Button variant='colored' color='blue2' startIcon={<ProfileSvg/>}>
                    Account Sales
                </Button>
                <Button variant='colored' color='cooper2' startIcon={<GoldSvg/>}>
                    Gold Sales
                </Button>
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            <div className={classMain}>
                <div className={styles.left}>
                    <div className={styles.info}>
                        <div className={classNames([
                            styles.row,
                            styles.inline
                        ])}>
                            <div className={styles.dot}></div>
                            <Typography component={'p'} color={'platinum'} fontSize='12px'>
                                5 478 Boosters
                            </Typography>
                        </div>
                        <div className={styles.row}>
                            <Button variant='colored' color='green-light' startIcon={<DarrowSvg/>}>
                                Get Started
                            </Button>
                        </div>
                        <div className={styles.row}>
                            <Typography component={'p'} color={'platinum'} fontSize='34px' fontWeight='900'>
                                The Easiest, Fastest,<br/>
                                Safest ELO Boost Service
                            </Typography>
                        </div>
                        <div className={styles.row} style={{ lineHeight: '2' }}>
                            <Typography component={'p'} color={'cooper-light'} fontSize='12px'>
                                Trusted by thousands of players worldwide.  With a professional top<br/>
                                tier Boosters, we aim to provide best boosting experience to our customers.
                            </Typography>
                        </div>
                    </div>
                    <LeftButtons />
                </div>
                
                <div className={styles.right}>
                    <div className={styles.labels}>
                        <div className={styles.item}>
                            <Button variant='icon_header' color='cooper'>
                                <ShieldSvg/>
                            </Button>
                            <Typography component={'p'} color={'cooper'} fontSize='11px' fontWeight='900'>
                                ACCOUNT<br/>SAFETY
                            </Typography>
                        </div>
                        <div className={classNames([
                            styles.item,
                            styles.red
                        ])}>
                            <Button variant='icon_header' color='red2'>
                                <StreamSvg/>
                            </Button>
                            <Typography component={'p'} color={'red2'} fontSize='11px' fontWeight='900'>
                                free<br/>stream
                            </Typography>
                        </div>
                        <div className={styles.item}>
                            <Button variant='icon_header' color='cooper'>
                                <LightningSvg/>
                            </Button>
                            <Typography component={'p'} color={'cooper'} fontSize='11px' fontWeight='900'>
                                FAST &<br/>QUALITY
                            </Typography>
                        </div>
                    </div>
                    <div className={styles.videoPreview}>
                                <div className={styles.videoContainer}>
            
                                    <div className={styles.preview}></div>
            
                                    <div className={styles.label}>
                                        <div className={styles.trapezeWrapper}>
                                            <div className={styles.trapeze}>
                                                <Typography component={'p'} color={'black'} fontSize='11px' fontWeight='900'>
                                                    <VideoSvg/> VIDEO GUIDE
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                            <HexButton borders={1}>
                                <PlaySvg/>
                            </HexButton>
                            <Typography component={'p'} color={'platinum'} fontSize='11px' fontWeight='900'>
                                Play video
                            </Typography>
            
                                </div>
                            </div>
                    <LeftButtons />
                </div>
            </div>
        </div>
    )
}