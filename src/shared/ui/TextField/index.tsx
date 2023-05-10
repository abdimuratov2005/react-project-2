import {
    TextFieldProps as MuiTextFieldProps,
    TextField as MuiTextField,
    InputAdornment
} from '@mui/material';

import React from 'react';
import classnames from 'classnames';

import classes from './TextField.module.scss';
import { Button } from '../Button';
import { useCopy } from 'features/useCopy';
import img2 from '../../../shared/assets/img/img2.png'
import { SendIcon, SmileIcon } from 'shared/assets/svg';

export type TextFieldProps = Omit<MuiTextFieldProps, 'variant'> & {
    variant?: 'with_label';
    children?: React.ReactNode;
    customMask?: string;
    maxLength?: number;
    placeholder?: string;
    autoComplete?: 'on' | 'off' | 'auto';
    background?: 'black' | 'gradient' | 'gray';
    type?: 'copy' | 'number' | 'chat';
    value?: string | (() => string);
    width?: string;
    customStyles?: Array<any>;
    iconStart?: any;
    onClick?: () => void;
};

export const TextField = (props: TextFieldProps) => {
    const {
        className,
        variant,
        children,
        maxLength,
        placeholder,
        label,
        autoComplete = 'off',
        background = 'black',
        type = false,
        value,
        width,
        customStyles,
        iconStart,
        onClick,
        ...rest
    } = props;
    const [val, setVal] = React.useState<number | string>(value || '');

    const getVariant = () => {
        return label ? 'with_label' : 'without_label';
    };

    const { copy } = useCopy();

    const handleChange = (e) => {
        setVal(e.target.value);
    };

    const renderButton = () => {

        switch(type) {
            case 'copy':
                return (
                    <Button onClick={() => copy(val)} variant={type}>
                        Copy
                    </Button>
                )
            
            case 'chat':
                return (
                    <div className={classes.btnContainer}>
                        <SmileIcon/>
                        <Button onClick={() => onClick} variant={type}>
                            <SendIcon />
                        </Button>
                    </div>
                )
        }
        return children;
    }

    return (
        <div
            className={classnames([
                classes[`wrapper_${getVariant()}`],
                customStyles && customStyles.map(item => classes[item]),
                background && classes[`background_${background}`]
            ])}
            style={{ width: width || 'auto' }}
        >
            <MuiTextField
                className={classnames(className, classes.root, [
                    classes[`variant_${getVariant()}`]
                ])}
                autoComplete={'off'}
                InputLabelProps={{ shrink: true }}
                placeholder={placeholder}
                onChange={handleChange}
                label={label}
                value={val}
                {...rest}
                InputProps={{
                    ...rest.InputProps,
                    startAdornment: iconStart ? (
                        <InputAdornment position="start">
                            {/* <img src={img2} /> */}
                            {iconStart}
                        </InputAdornment>
                    ) : null,
                }}
            />
            {renderButton()}
        </div>
    );
};
