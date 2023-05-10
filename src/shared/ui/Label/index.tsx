import classNames from "classnames";
import { Typography } from "../Typography";
import styles from "./styles.module.scss";

interface IProps {
    children: string | JSX.Element | JSX.Element[];
    rightText?: string;
    noLine?: boolean;
    color?: 'platinum' | 'platinum-50' | 'cooper-light';
    noUpperCase?: boolean;
    customStyles?: Array<'small' | 'big' | 'button' | 'rating' | 'black'>;
    icon?: JSX.Element;
}

export const Label: React.FC<IProps> = ({
    children,
    rightText,
    noLine,
    color = 'cooper-light',
    noUpperCase,
    customStyles,
    icon,
}) => {

    const classname = classNames([
        styles.container,
        customStyles && customStyles.map(item => styles[item]),
    ]);

    const render = () => {

        if (typeof children === 'string') {
            const text = `${!noUpperCase ? children.toUpperCase() : children}${!(rightText || noLine) ? ':' : ''}`;

            return (
                <>
                    {icon && icon}
                    <Typography color={color}>
                        {text}
                    </Typography>
                    {!noLine && <div className={styles.line}></div>}
                    {rightText &&
                        <Typography color={color}>
                            {rightText.toUpperCase()}
                        </Typography>
                    }
                </>
            )
        } else {
            return (
                <>
                    {icon && icon}
                    {children}
                </>
            )
        }
    }


    return (
        <div className={classname}>
           {render()}
        </div>
    )
}