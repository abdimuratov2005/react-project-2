import classNames from 'classnames';
import styles from './styles.module.scss'
import { ReactComponent as Hex1Svg } from 'shared/assets/icons/svg/hex1.svg'
import { ReactComponent as Hex2Svg } from 'shared/assets/icons/svg/hex2.svg'

interface IProps {
    children?: JSX.Element | JSX.Element[];
    borders?: number;
    vertex?: number;
}

export const HexButton: React.FC<IProps> = (props) => {
    const { children, borders = 1, vertex = 2 } = props;

    const classMain = classNames([
        styles.container,
        'hexButton'
    ]);

    const renderBorder = (i) => {
        return vertex === 2 ? <Hex2Svg key={i}/> : <Hex1Svg key={i}/>;
    }

    return (
        <div className={classMain}>
            {Array(borders).fill({}).map((e, i) => renderBorder(i))}
            <div className={classNames([
                styles.btnContainer,
                styles[`vertex${vertex}`],
            ])}>
                <div className={styles.btn}>
                    {children}
                </div>
            </div>
        </div>
    )
}