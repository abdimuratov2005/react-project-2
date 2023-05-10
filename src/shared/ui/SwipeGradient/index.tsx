import classNames from 'classnames';
import styles from './styles.module.scss'

interface IProps {
    direction?: 'left' | 'right';
    width?: string;
}

export const SwipeGradient: React.FC<IProps> = (props) => {
    const { direction = 'right', width = '50%' } = props;

    const classname = classNames([
        styles.container,
        styles[direction]
    ])

    return (
        <div className={classname}
            style={{ width: width }}
        >

        </div>
    )
}