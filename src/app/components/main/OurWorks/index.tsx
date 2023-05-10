import { useRef, useState, useLayoutEffect } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss'
import { BlockHeader } from 'app/components/common/BlockHader';
import { Table } from 'app/components/common/Table';
import { mocks } from './mocks';
import { Button, Progress, Typography } from 'shared/ui';
import MedalStart from 'shared/assets/icons/medals/start.png'
import MedalEnd from 'shared/assets/icons/medals/end.png'
import { ReactComponent as ArrowRightSvg } from 'shared/assets/icons/svg/arrow-right.svg'
import { inViewportListener } from 'utils/window';

interface IProps {
    
}

const boxClass = 'ourworks-box';

export const OurWorks: React.FC<IProps> = (props) => {
    const {} = props;
    const { head, columns } = mocks();

    const { current: windowSize } = useRef([window.innerWidth, window.innerHeight]);    
    const isMobile = windowSize[0] <= 1280 ? 3 : 2;

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

    const prepareColumns = (columns) => {

        return columns.map(item => [
                <div className={styles.info}>
                    <div className={styles.start}>
                        <div className={styles.ray}></div>
                        <div className={styles.infoIcon}><img src={MedalStart} alt="" /></div>
                        <div className={styles.text}>
                            <Typography component={'p'} fontSize='14px' fontWeight='900' color='platinum'>
                                START
                            </Typography>
                            <Typography component={'p'} fontSize='12px' color='cooper-light3'>
                                {item.start}
                            </Typography>
                        </div>
                    </div>
                    <div className={styles.icon}>
                        <div className={styles.left}></div>
                        <Button startIcon={<ArrowRightSvg/>}></Button>
                        <div className={styles.right}></div>
                    </div>
                    <div className={styles.end}>
                        <div className={styles.ray}></div>
                        <div className={styles.infoIcon}><img src={MedalEnd} alt="" /></div>
                        <div className={styles.text}>
                            <Typography component={'p'} fontSize='14px' fontWeight='900' color='platinum'>
                                END
                            </Typography>
                            <Typography component={'p'} fontSize='12px' color='cooper-light3'>
                                {item.end}
                            </Typography>
                        </div>
                    </div>
                </div>,

                <div className={styles.latest}>
                    <Typography component={'p'} fontSize='14px' fontWeight='900' color='platinum'>
                        {item.latest}
                    </Typography>
                    <Button>New</Button>
                </div>,

                <div className={styles.progress}>
                    <Progress value={100} label={'Completed'} icon={false} upper={true}/>
                </div>
            ]);
    }

    return (
        <div className={classMain}>

            <div className={styles.header}>
                <BlockHeader>OUR RECENT WORK</BlockHeader>
            </div>

            <div className={styles.content}>

                <Table head={head} columns={prepareColumns(columns)} template='5fr 1fr 1fr' />
                {!isMobile && <Table head={head} columns={prepareColumns(columns)} />}

            </div>

            <div className={styles.footer}>
                <Button color='gray'>LOAD MORE</Button>
            </div>

        </div>
    )
}