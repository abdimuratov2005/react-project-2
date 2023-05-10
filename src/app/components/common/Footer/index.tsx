import classNames from 'classnames';
import styles from './styles.module.scss'
import { HeaderSvg, PaymentIcon, TPayments } from 'shared/assets/svg'
import { Button, Social, Typography } from 'shared/ui';

const payments: Array<TPayments> = [
    'paypal',
    'visa',
    'apple',
    'google',
    'eps',
    'gp',
    'ideal',
    'wm',
    'skrill',
    'bitcoin',
    'qiwi',
];

interface IProps {
    
}

export const Footer: React.FC<IProps> = (props) => {
    const {} = props;

    const classMain = classNames([
        styles.container
    ]);

    return (
        <div className={classMain}>

            <div className={styles.wrapper}>

                <div className={styles.content}>

                    <div className={styles.info}>
                        <div className={styles.logo}>
                            <HeaderSvg icon='logo' />
                        </div>
                        <div>
                            <Typography component={'p'} color='cooper-light'>
                                BUYCARRY LTD
                            </Typography>
                            <Typography component={'p'} color='cooper-light'>
                                © 2022 All rights reserved
                            </Typography>
                        </div>
                        <div>
                            <Typography component={'p'}>
                                +1 855 401 11 56
                            </Typography>
                            <Typography component={'p'} color='cooper-light'>
                                support@buycarry.gg
                            </Typography>
                        </div>
                    </div>

                    <div className={styles.menu}>
                        <Typography component={'p'} fontSize='19px' fontWeight='900'>
                            Company
                        </Typography>
                        <div className={styles.list}>
                            <Typography component={'p'} color='cooper-light'>
                                About Us
                            </Typography>
                            <Typography component={'p'} color='cooper-light'>
                                Blog
                            </Typography>
                            <Typography component={'p'} color='cooper-light'>
                                Contact Us
                            </Typography>
                            <Typography component={'p'} color='cooper-light'>
                                Become a PRO
                            </Typography>
                            <Typography component={'p'} color='cooper-light'>
                                Cashback
                            </Typography>
                            <Typography component={'p'} color='cooper-light'>
                                Legit
                            </Typography>
                        </div>
                    </div>

                    <div className={styles.menu}>
                        <Typography component={'p'} fontSize='19px' fontWeight='900'>
                            Customer Service
                        </Typography>
                        <div className={styles.list}>
                            <Typography component={'p'} color='cooper-light'>
                                Login as PRO
                            </Typography>
                            <Typography component={'p'} color='cooper-light'>
                                Sitemaps
                            </Typography>
                        </div>
                    </div>

                    <div className={styles.menu}>
                        <Typography component={'p'} fontSize='19px' fontWeight='900'>
                            Legal & Policies
                        </Typography>
                        <div className={styles.list}>
                            <Typography component={'p'} color='cooper-light'>
                                User Agreement
                            </Typography>
                            <Typography component={'p'} color='cooper-light'>
                                Privacy policy
                            </Typography>
                            <Typography component={'p'} color='cooper-light'>
                                Cookie policy
                            </Typography>
                        </div>
                    </div>

                    <div className={styles.social}>

                        <div className={styles.soc}><Social/></div>

                        <div className={styles.button}>
                            <Button>LiveHelp — Chat with us</Button>
                        </div>
                    </div>

                    
                </div>

                <div className={styles.payments}>
                    {payments.map((item, index) => (
                        <div className={styles.item} key={index}>
                            <PaymentIcon type={item} />
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}