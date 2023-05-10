import classNames from 'classnames';
import styles from './styles.module.scss'

type Gaps =
    | "1"
    | "1-5"
    | "2"
    | "2-5"
    | "3";

interface IPRops {
    children: JSX.Element | JSX.Element[];
    justify?: 'start' | 'end' | 'between';
    align?: 'start' | 'center';
    wrap?: boolean;
    type?: 'contained';
    gap?: Gaps;
    customStyles?: Array<'grow' | 'wrap'>;
    image?: string;
}

export const CardGroup: React.FC<IPRops> = ({ 
    children, 
    justify, 
    type, 
    gap = '1', 
    customStyles, 
    image,
    align,
}) => {

    const className = classNames([
        styles.container,
        justify && styles[`justify-${justify}`],
        align && styles[`align-${align}`],
        type && styles[type],
        gap && styles[`gap-${gap}`],
        customStyles && customStyles.map(item => styles[item])
    ]);

    return (
        <div className={className}>
            {children}
            {image && <div><img src={image} height={80}/></div>}
        </div>
    )
}