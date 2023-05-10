import classNames from 'classnames';
import AnimatedNumbers from "react-animated-numbers";
import { useState, useLayoutEffect } from 'react';

import styles from './styles.module.scss'
import { BlockHeader } from 'app/components/common/BlockHader';
import { ReactComponent as ShieldSvg } from 'shared/assets/icons/svg/shield.svg'
import { HexButton, Typography } from 'shared/ui';
import logo from 'shared/assets/img/main/aboutuslogo.png'
import { ReactComponent as CheckmarksSvg } from 'shared/assets/icons/svg/checkmark-double.svg'
import { ReactComponent as PhotoSvg } from 'shared/assets/icons/svg/photo.svg'
import { ReactComponent as FriendlySvg } from 'shared/assets/icons/svg/friendly.svg'
import { ReactComponent as ProfilesSvg } from 'shared/assets/icons/svg/profiles.svg'
import { inViewportListener } from 'utils/window';

interface IProps {
    
}

const boxClass = 'aboutus-box';

export const AboutUs: React.FC<IProps> = (props) => {
    const {} = props;
    const [ isVisible, setIsVisible ] = useState<boolean>(false);
    useLayoutEffect(() => {
        inViewportListener({
            setIsVisible,
            boxClass
        });
    }); 

    const animateConfig = [{"mass":1,"tension":130,"friction":40},{"mass":2,"tension":140,"friction":40},{"mass":3,"tension":130,"friction":40}]

    const classMain = classNames([
        styles.container,
        boxClass,
        isVisible && 'animate__animated animate__fadeInUp'
    ]);

    return (
        <div className={classMain}>

            <div className={styles.header}>

                <div className={styles.trapeze}></div>

                <div className={styles.title}>
                    <BlockHeader>Why players<br/>choose us ?</BlockHeader>
                </div>

            </div>

            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>

            <div className={styles.content}>

                <div className={styles.stats}>

                    <div className={styles.item}>
                        <div className={styles.icon}><ShieldSvg/></div>
                        <div className={styles.text}>
                            <Typography component={'p'} color={'platinum'} fontSize='34px'>
                                <AnimatedNumbers
                                    animateToNumber={1800}
                                    configs={animateConfig}
                                ></AnimatedNumbers>
                            </Typography>
                            <Typography component={'p'} color={'cooper-light3'} fontSize='14px'>
                                PROS
                            </Typography>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.icon}><ShieldSvg/></div>
                        <div className={styles.text}>
                            <Typography component={'p'} color={'platinum'} fontSize='34px'>
                                <AnimatedNumbers
                                    animateToNumber={157}
                                    configs={animateConfig}
                                ></AnimatedNumbers>k
                            </Typography>
                            <Typography component={'p'} color={'cooper-light3'} fontSize='14px'>
                                SUCCESSFUL DEALS
                            </Typography>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.icon}><ShieldSvg/></div>
                        <div className={styles.text}>
                            <Typography component={'p'} color={'platinum'} fontSize='34px'>
                                <AnimatedNumbers
                                    animateToNumber={42}
                                    configs={animateConfig}
                                ></AnimatedNumbers>k
                            </Typography>
                            <Typography component={'p'} color={'cooper-light3'} fontSize='14px'>
                                HAPPY CLIENTS
                            </Typography>
                        </div>
                    </div>

                </div>

                <div className={styles.advantages}>
                    <div className={styles.col}>

                        <div className={styles.item}>
                            <div className={styles.figure}>
                                <div className={styles.arrowRight}></div>
                            </div>
                            <div className={styles.advantagesContent}>
                                <HexButton borders={1} vertex={1}>
                                    <CheckmarksSvg/>
                                </HexButton>
                                <div className={styles.text}>
                                    <Typography component={'p'} color={'platinum'} fontSize='24px'>
                                        Proven results
                                    </Typography>
                                    <Typography component={'p'} color={'cooper-light3'} fontSize='14px'>
                                        Over 150k successfully<br/>completed orders
                                    </Typography>
                                </div>
                            </div>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.figure}>
                                <div className={styles.chevronRight}></div>
                            </div>
                            <div className={styles.advantagesContent}>
                                <HexButton borders={1} vertex={1}>
                                    <PhotoSvg/>
                                </HexButton>
                                <div className={styles.text}>
                                    <Typography component={'p'} color={'platinum'} fontSize='24px'>
                                        100% Safe
                                    </Typography>
                                    <Typography component={'p'} color={'cooper-light3'} fontSize='14px'>
                                        We only use safe and time-proven methods
                                    </Typography>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={styles.col}>

                        <div className={styles.item}>
                            <div className={styles.figure}>
                                <div className={styles.chevronLeft}></div>
                            </div>
                            <div className={classNames([
                                styles.advantagesContent,
                                styles.pad
                            ])}>
                                <HexButton borders={1} vertex={1}>
                                    <FriendlySvg/>
                                </HexButton>
                                <div className={styles.text}>
                                    <Typography component={'p'} color={'platinum'} fontSize='24px'>
                                        Friendly support
                                    </Typography>
                                    <Typography component={'p'} color={'cooper-light3'} fontSize='14px'>
                                        Our support is ready to help you 24/7
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.figure}>
                                <div className={styles.arrowLeft}></div>
                            </div>
                            <div className={classNames([
                                styles.advantagesContent,
                                styles.pad
                            ])}>
                                <HexButton borders={1} vertex={1}>
                                    <ProfilesSvg/>
                                </HexButton>
                                <div className={styles.text}>
                                    <Typography component={'p'} color={'platinum'} fontSize='24px'>
                                        Play with the pros
                                    </Typography>
                                    <Typography component={'p'} color={'cooper-light3'} fontSize='14px'>
                                        Our Team consists of highly vetted game SPECIFIC EXPERTS
                                    </Typography>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            
        </div>
    )
}