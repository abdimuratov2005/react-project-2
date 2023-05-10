import classNames from 'classnames'
import { ReactComponent as BorderSvg } from './assets/hexagon-border.svg'
import styles from './styles.module.scss'

interface IProps {
    color?: 'cooper';
    size?: '18px' | '30px';
}

export const ListItemDot: React.FC<IProps> = (props) => {
    const { 
        color = 'cooper',
        size = '18px',
    } = props;

    const className = classNames([
        styles.dot,
        color && styles[`color-${color}`],
        size && styles[`size-${size}`],
    ])
    return (
        <div className={className}>
            <BorderSvg/>
        </div>
    )
}