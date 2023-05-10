// import { Apple } from './components/Apple';
// import { Bitcoin } from './components/Bitcoin';
// import { Google } from './components/Google';
// import { Paypal } from './components/Paypal';
// import { Visa } from './components/Visa';
import * as Icons from 'shared/assets/icons/payments';

export type TPayments = 'paypal'
    | 'visa'
    | 'apple'
    | 'google'
    | 'eps'
    | 'gp'
    | 'ideal'
    | 'wm'
    | 'skrill'
    | 'bitcoin'
    | 'qiwi';

interface IProps {
    height?: number;
    width?: number;
    type: TPayments;
}

export const PaymentIcon: React.FC<IProps> = (props) => {
    const { width = 24, height = 24, type } = props;

    // const Content: React.FC = () => {
    //     switch (type) {
    //         case 'paypal':
    //             return <Paypal />
    //         case 'visa':
    //             return <Visa />
    //         case 'apple':
    //             return <Apple />
    //         case 'google':
    //             return <Google />
    //         case 'bitcoin':
    //             return <Bitcoin />
    //     }
    //     return null;
    // }

    return Icons[`${type}Icon`] && <img src={Icons[`${type}Icon`]} alt="" />
};
