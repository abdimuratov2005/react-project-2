import { useEffect, useLayoutEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss'
import { IBoostersGame, mocks } from './mocks';
import { ListItemDot } from 'shared/ui/Games/components/GameCard/components/ListItemDot';
import { Button, Typography } from 'shared/ui';
import { getWindowSize, inViewportListener } from 'utils/window';
import { ReactComponent as ArrowRightSvg } from '../../../../shared/assets/icons/svg/arrow-right.svg'
import { BoosterItem } from './components/BoosterItem';

interface IProps {
    
}

const boxClass = 'boosters-box';

export const Boosters: React.FC<IProps> = (props) => {
    const {} = props;
    let { games } = mocks();
    let row = 0;
    let count = 0;

    const [ isVisible, setIsVisible ] = useState<boolean>(false);
    const [ gamesList, setGamesList ] = useState<IBoostersGame[]>(games);

    const [seeAll, setSeeAll] = useState<boolean>(false);

    const [ windowWidth, setWindowWidth ] = useState<number>(0);
    const [ gamesPerRow, setGamesPerRow ] = useState<number>(0);

    useEffect(() => {
        if (windowWidth > 0) {
            const boostersBlock = document.getElementById('boosters_block');
            const blockWidth = boostersBlock.clientWidth;
            const hexWidth = document.getElementsByClassName('boosters_item')[0].clientWidth;

            const perLine = Math.ceil(blockWidth / hexWidth);
            const numRows = Math.ceil(games.length / (perLine - 1));
            let numPlugs = 1;
            numPlugs = numRows <= 5 ? 2 : numPlugs;
            numPlugs = numRows <= 3 ? 3 : numPlugs;

            for (let i = 1; i <= numRows; i++) {

                const insertIndex = (perLine - numPlugs - 1) * i + numPlugs * (i - 1);

                if (games[insertIndex]) {

                    for (let j = 0; j < numPlugs; j++) {
                        games.splice(insertIndex, 0, {
                            plug: true
                        });
                    }
                }
            }

            setGamesList(games);
            setGamesPerRow(perLine);
        } else {
            getWindowSize(setWindowWidth);
        }

        window.addEventListener('resize', () => getWindowSize(setWindowWidth));
    }, [ windowWidth ]);

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

    return (
        <div className={classMain}>


            <div className={styles.infoBlock}>
                
                <div className={styles.infoHeader}>
                    <div className={styles.item}>
                        <ListItemDot size='30px'/>
                        <Typography component={'p'} fontSize={window.innerWidth <= 600 ? '16px' : '26px'} fontWeight='900'>
                            <p>Games available<br />for boosting</p>
                        </Typography>
                    </div>
                    <div className={classNames([ styles.item, styles.pad ])}>
                        <Button variant='colored' color='cooper' startIcon={<ArrowRightSvg/>}>
                            SEE ALL GAMES
                        </Button>
                    </div>
                </div>
                
                <div className={classNames([ styles.item, styles.pad ])}>
                    <Typography component={'p'} fontSize='14px' color='cooper-light'>
                        Every day we are working to expand the list of games available for boosting, we do everything possible for your comfort
                    </Typography>
                </div>

            </div>
            {
                    window.innerWidth <= 600 &&
                    <div className={styles.seemore}>
                        <Button onClick={(e) => setSeeAll(!seeAll)} variant='pale' color='cooper'>
                            See more
                        </Button>
                    </div>
                }
            <div className={styles.gamesBlock} style={{
                display: seeAll || window.innerWidth >= 600 && !seeAll ? 'block' : 'none'
            }}>
                <div className={styles.wrapper} id='boosters_block'>

                    {gamesList?.map((item, index) => {
                        count++;

                        if ((count ) === gamesPerRow) {
                            count = 1;
                            row++;
                        }
                        return <BoosterItem item={item} key={index} count={count} row={row} />
                    })}
                    
                </div>
                
            </div>

        </div>
    )
}