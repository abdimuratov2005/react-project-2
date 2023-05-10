import classNames from 'classnames';
import styles from './styles.module.scss'

interface IPRops {
    children: JSX.Element | JSX.Element[];
    direction?: 'column';
}

export const TypographyGroup: React.FC<IPRops> = ({ children, direction = 'column' }) => {

    const className = classNames([
        styles.container,
        direction && styles[direction]
    ])

    return (
        <div className={className}>
            {children}
        </div>
    )
}