import { ReactElement } from 'react';
import styles from './styles.module.scss'

interface IPRops {
    children: JSX.Element | JSX.Element[] | ReactElement;
}

export const TextString: React.FC<IPRops> = ({ children }) => {

    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}