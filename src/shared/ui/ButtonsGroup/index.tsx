import classNames from 'classnames';
import styles from './styles.module.scss'

interface IPRops {
    children: JSX.Element | JSX.Element[];
    justify?: 'start' | 'end' | 'between';
    type?: 'contained';
}

export const ButtonsGroup: React.FC<IPRops> = ({ children, justify, type }) => {

    const className = classNames([
        styles.container,
        justify && styles[justify],
        type && styles[type]
    ])

    return (
        <div className={className}>
            {children}
        </div>
    )
}