import classNames from 'classnames';
import styles from './styles.module.scss'
import { Button, Typography } from 'shared/ui';
import { ReactComponent as CouponSvg } from '../../../../shared/assets/icons/svg/coupon.svg'
import { ReactComponent as CartBigSvg } from '../../../../shared/assets/icons/svg/cart-big.svg'
import { ReactComponent as StarSvg } from '../../../../shared/assets/icons/svg/star.svg'
import { ReactComponent as CashSvg } from '../../../../shared/assets/icons/svg/cash.svg'
import { ReactComponent as GiftSvg } from '../../../../shared/assets/icons/svg/gift.svg'
import { ReactComponent as PlayNextSvg } from '../../../../shared/assets/icons/svg/play-next.svg'
import { ReactComponent as Star2Svg } from '../../../../shared/assets/icons/svg/star2.svg'
import { ReactComponent as CashBackSvg } from '../../../../shared/assets/icons/svg/cashback.svg'
import { ReactComponent as LightningSvg } from '../../../../shared/assets/icons/svg/lightning.svg'
import * as IconsSvg from '../../../../shared/assets/icons/svg'

interface IProps {
    
}

export const Buttons: React.FC<IProps> = (props) => {
    const {} = props;

    const classMain = classNames([
        styles.container
    ]);

    return (
        <div className={classMain}>

            <div className={styles.buttons}>

                <Button variant='colored' color='cooper3' startIcon={<LightningSvg/>} customStyles={[ 'big' ]}>
                    Subscribe
                </Button>

                <Button variant='colored' color='green3' startIcon={<CashBackSvg/>} customStyles={[ 'big' ]}>
                    Cashback
                </Button>

                {/* <a href="https://trustpilot.com" target='_blank'> */}
                    <Button color='green-cr' customStyles={[ 'big', 'trustpilot' ]} iconStyle='bgcolor' 
                        startIcon={<Star2Svg />}
                        //endIcon={<IconsSvg.star3 />}
                    >
                        {/* <span className='button-text'> */}
                            <div>Trustpilot</div>
                            <div>
                                <div>4.9</div>
                                <div className={styles.endIcon}><IconsSvg.star3 /></div>
                            </div>
                        {/* </span> */}
                    </Button>

                <Button variant='colored' color='purple-bl3' startIcon={<CouponSvg/>} customStyles={[ 'big' ]}>
                    Discounts
                </Button>

                <Button variant='colored' color='red3' startIcon={<GiftSvg/>} customStyles={[ 'big' ]}>
                    Gift card
                </Button>

                <Button startIcon={<PlayNextSvg/>} customStyles={[ 'big' ]} iconStyle='bgcolor'>
                    Live Stream
                </Button>

            </div>

        </div>
    )
}