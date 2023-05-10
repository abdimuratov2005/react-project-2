import classNames from 'classnames';
import styles from './styles.module.scss'
import { ListItemDot } from 'shared/ui/Games/components/GameCard/components/ListItemDot';
import { Button, Typography } from 'shared/ui';
import { ReactComponent as ArrowRightSvg } from 'shared/assets/icons/svg/arrow-right.svg'
import { 
    FireIcon, 
} from 'shared/assets/svg';

interface IProps {
    title: string;
    topOffer?: boolean;
    list?: {
        name: string;
        active?: boolean;
    }[];
    saveUp?: number | string;
    price?: string;
    index?: number;
}

export const ShopItem: React.FC<IProps> = (props) => {
    const { 
        title,
        topOffer,
        list,
        saveUp,
        price,
        index,
    } = props;

    const classMain = classNames([
        styles.container
    ]);

    return (
        <div className={classMain}>
            <div className={styles.top}>
                {topOffer
                    && <Button
                        variant={'secondary'}
                        startIcon={<FireIcon/>}
                    >
                        Top offers!
                    </Button>
                }
            </div>
            <Typography component={'p'} fontSize='20px' fontWeight='900' color='platinum'>
                {title}
            </Typography>
            {list
                && <div className={styles.list}>
                    {list.map((item, index) => (
                        <div className={classNames([
                                styles.item,
                                item.active && styles.active
                            ])}
                            key={index}
                        >
                            <ListItemDot/>
                            {item.name}
                        </div>
                    ))}
                </div>
            }
            {saveUp && <div className={styles.saveUp}>Save up to {saveUp}%</div>}
            <div className={styles.footer}>
                <div className={styles.price}>
                    {price
                        && <>
                            From
                            <Typography component={'p'} color='platinum' fontSize='16px' fontWeight='900'>
                                {price}
                            </Typography>
                        </>
                    }
                </div>
                <div className={styles.button}>
                    <Button variant='secondary' startIcon={<ArrowRightSvg/>} color='white'></Button>
                </div>
            </div>
        </div>
    )
}