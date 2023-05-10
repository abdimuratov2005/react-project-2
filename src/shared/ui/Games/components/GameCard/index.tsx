import { Button } from 'shared/ui';
import styles from './styles.module.scss'
import { FireIcon } from 'shared/assets/svg';
import { ReactComponent as ListSvg } from './assets/list.svg'
import { ReactComponent as ArrowSvg } from './assets/arrow.svg'
import classNames from 'classnames';
import { ListItemDot } from './components/ListItemDot';

type TList = {
    highlight?: boolean;
    text: string;
}

interface IPRops {
    top?: boolean;
    img?: string;
    title: string;
    list: TList[];
    price?: string;
    from?: boolean;
}

export const GameCard: React.FC<IPRops> = (props) => {
    const { top, img, title, list, price, from } = props;

    return (
        <div className={styles.container}>

            <div className={classNames([
                styles.logo,
                !top && styles.toend
            ])}>
                {img && <img src={img} />}
                {top 
                    && <Button
                        variant={'secondary'}
                        startIcon={<FireIcon/>}
                    >
                        Top offers!
                    </Button>
                }
            </div>

            <div className={styles.title}>
                {title}
            </div>

            <div className={styles.list}>
                {list && list.map(item => (
                    <div key={Math.random()} className={classNames([
                        styles.item,
                        item.highlight && styles.highlight
                    ])}>
                        <ListItemDot/>
                        {item.text}
                    </div>
                ))}
            </div>

            <div className={styles.footer}>
                <div className={styles.price}>
                    {from && 'From'}
                    <p>{price}</p>
                </div>
                <Button startIcon={<ArrowSvg/>}></Button>
            </div>

        </div>
    )
}