import {
    FormControlLabel,
    Checkbox as MuiCheckbox,
    CheckboxProps as MuiCheckboxProps,
} from '@mui/material';
import React, { useState } from 'react';
import { ReactComponent as Checked } from 'shared/assets/icons/LineCheckbox/checked.svg';

import classes from './InlineCheckbox.module.scss';
import { RadioCheckbox } from '../RadioCheckbox';
import { observer } from 'mobx-react';
import { Typography } from '../Typography';
import classNames from 'classnames';

export interface InlineCheckboxProps extends Omit<MuiCheckboxProps, 'onError'> {
    label: string;
    bait?: React.ReactNode | string;
    baitColor?: 'green' | 'orange';
    onChange?: () => void;
    checked?: boolean;
    type?: 'radio' | 'classic' | 'button';
    icon?: JSX.Element;
}

export const InlineCheckbox = observer(function LineCheckbox(
    props: InlineCheckboxProps
) {
    const {
        label,
        bait,
        checked,
        onChange,
        type = 'classic',
        baitColor = 'green',
        icon
    } = props;

    const [active, setActive] = useState(checked || false);

    const handleChange = () => {
        setActive(!active);
    };

    if (type === 'radio') {
        return (
            <div className={classes.radio}>
                <FormControlLabel
                    label={label}
                    className={classes.radioLabel}
                    control={
                        <div className={classes.cbx_and_bait_wrapper}>
                            <MuiCheckbox
                                checkedIcon={active ? <Checked /> : <></>}
                                className={classNames(
                                    classes.vp_rootCheckbox,
                                    active ? `${classes.checked}` : `${classes.unchecked}`
                                )}
                                checked={active}
                                onChange={handleChange || onChange}
                                disableRipple
                            />
                            {bait && <div
                                className={classNames(
                                    classes.bait,
                                    classes[`baitColor_${baitColor}`]
                                )}
                            >
                                <Typography component={'p'}>{bait}</Typography>
                            </div>}
                        </div>
                    }
                />
            </div>
        );
    } else if (type === 'button') {
        return (
            <div className={classNames([
                classes[type],
                active && classes.checked
            ])}>
                <FormControlLabel
                    label={label}
                    className={classNames([
                        classes.radioLabel,
                    ])}
                    control={
                        <MuiCheckbox
                            //checkedIcon={active ? <Checked /> : <></>}
                            className={classNames(
                                //classes.vp_rootCheckbox,
                                //active && classes.checked
                            )}
                            checked={active}
                            onChange={handleChange || onChange}
                            disableRipple
                            icon={icon}
                            checkedIcon={icon}
                        />
                    }
                />
                {/* {icon && icon} */}
            </div>
        );
    }

    return (
        <div className={classes.classic}>
            <FormControlLabel
                classes={{
                    root: classes.formRoot,
                    label: classes.classicLabel,
                }}
                control={
                    <MuiCheckbox
                        checkedIcon={active ? <Checked /> : <></>}
                        className={classNames(
                            classes.vp_rootCheckbox,
                            active ? `${classes.checked}` : `${classes.unchecked}`
                        )}
                        checked={active}
                        onChange={handleChange || onChange}
                    />
                }
                label={label}
            />
            <span className={classes.bait}>{bait}</span>
        </div>
    );
});
