import classNames from 'classnames';
import background from '../../assets/img/bg.png'
import styles from './styles.module.scss'

interface IPRops {
    children: JSX.Element | JSX.Element[];
    black?: boolean;
}

export const Card: React.FC<IPRops> = ({ children, black }) => {

    return (
        <div className={classNames([
            styles.container,
        ])}>
            <div className={styles.bg} style={{ backgroundImage: black ? 'none' : `url(${background})` }}>
                <div></div>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}