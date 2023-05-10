import { Button } from 'shared/ui';
import styles from './styles.module.scss'

interface IProps {
    children: JSX.Element | JSX.Element[];
    title?: JSX.Element | JSX.Element[];
}

export const Coupon: React.FC<IProps> = (props) => {
    const { children, title } = props;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {title}
            </div>
            <div className={styles.divider}>
                <div></div>
            </div>
            <div className={styles.content}>
                {children}
            </div>
            <div className={styles.button}>
                <Button>Show coupon</Button>
            </div>
        </div>
    )
}