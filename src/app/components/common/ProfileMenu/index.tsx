import classNames from 'classnames';
import styles from './styles.module.scss'
import { Button, Typography } from 'shared/ui';
import * as IconsSvg from 'shared/assets/icons/svg'

interface IProps {

}

export const ProfileMenu: React.FC<IProps> = (props) => {
    const {  } = props;

    const classMain = classNames([
        styles.container
    ]);

    return (
        <div className={classMain}>

            <div className={styles.item}>
                <Button variant='colored' color='purple-bl3' startIcon={<IconsSvg.coupon/>} >
                    Coupons
                </Button>
            </div>

            <div className={styles.item}>
                <Button variant='colored' color='green3' startIcon={<IconsSvg.cartBig/>} >
                    Orders
                </Button>
            </div>

            <div className={styles.item}>
                <Button variant='colored' color='cooper3' startIcon={<IconsSvg.profile/>} >
                    Personal<br/>info
                </Button>
            </div>

            <div className={styles.item}>
                <Button variant='colored' color='red3' startIcon={<IconsSvg.star/>} >
                    Favorite services
                </Button>
            </div>

            <div className={styles.item}>
                <Button variant='colored' color='purple3' startIcon={<IconsSvg.cash/>} >
                    Cashback balance
                </Button>
            </div>

            <div className={styles.item}>
                <Button variant='colored' color='blue3' startIcon={<IconsSvg.gift/>} >
                    Gift cards
                </Button>
            </div>

        </div>
    )
}