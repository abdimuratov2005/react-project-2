import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { ReactComponent as Copy } from '../../assets/icons/copy.svg';
import classNames from 'classnames';

import classes from './Button.module.scss';

type TCustomStyles = 'small' | 'big' | 'trustpilot';
type TVarianStyles = 'contained' | 'secondary' | 'pale' | 'copy' | 'small' | 'chat' | 'close' | 'lcooper' | 'icon'
    | 'icon_header' | 'close2' | 'colored';
type TColorStyles = 'classic'
    | 'platinum_15'
    | 'platinum_50'
    | 'platinum'
    | 'cooper'
    | 'cooper2'
    | 'cooper3'
    | 'cooper-light'
    | 'black'
    | 'black2'
    | 'dark-gray'
    | 'gray'
    | 'green'
    | 'green2'
    | 'green3'
    | 'green-cr'
    | 'green-cr3'
    | 'blue'
    | 'blue2'
    | 'blue3'
    | 'red'
    | 'red2'
    | 'red3'
    | 'aqua'
    | 'green-light'
    | 'main'
    | 'purple-bl3'
    | 'purple3'
    | 'white';
type TIconStyle = 'bgcolor';
    
export type ButtonProps = Omit<MuiButtonProps, 'variant' | 'color'> & {
    variant?: TVarianStyles;
    color?: TColorStyles;
    to?: any;
    loader?: boolean;
    theme?: string;
    isStrokeIcon?: boolean;
    customStyles?: Array<TCustomStyles>;
    iconStyle?: TIconStyle;
};

export const Button = (props: ButtonProps) => {
    const {
        className,
        variant = 'contained',
        color = 'classic',
        to,
        endIcon,
        iconStyle,
        startIcon,
        onClick,
        disabled,
        isStrokeIcon = false,
        customStyles,
        ...rest
    } = props;

    const handleClick = (e) => {
        // if (to) {
        //   navigate(to);
        // }

        if (onClick) {
            onClick(e);
        }
    };
    
    const buttonStyles = classNames([
        className,
        classes.root,
        classes[`variant_${variant}`],
        classes[`color_${color}`],
        endIcon || (variant == 'copy' && `${classes.endIcon}`),
        startIcon && classes.startIcon,
        typeof startIcon === 'string' && classes.startIconBg,
        customStyles && customStyles.map(item => classes[item]),
        iconStyle && classes[`icon_${iconStyle}`],
    ]);

    return (
        <MuiButton
            component={to ? Link : 'button'}
            to={to}
            className={buttonStyles}
            onClick={handleClick}
            endIcon={variant == 'copy' ? <Copy /> : endIcon}
            startIcon={startIcon}
            disabled={disabled}
            {...rest}
        />
    );
};
