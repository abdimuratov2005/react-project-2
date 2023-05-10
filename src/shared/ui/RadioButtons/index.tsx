import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import classes from './RadioButtons.module.scss';
import classnames from 'classnames';

interface RadioButtonsProps {
    buttons?: Array<any>;
    value?: number;
    type?: 'merge' | 'discrete' | 'mosaic';
    color?: 'cooper';
    customClasses?: Array<'big' | 'small'>;
}

export const RadioButtons = (props: RadioButtonsProps) => {
    const { buttons, value, type = 'merge', color, customClasses } = props;
    
    return (
        <div className={classes.wrapper}>
            <RadioGroup
                defaultValue={buttons[value - 1]?.label}
                className={classnames([
                    classes[`type_${type}`],
                    color && classes[`color-${color}`],
                    customClasses && customClasses.map(item => classes[item])
                ])}
            >
                {buttons.map((it, id) => (
                    <FormControlLabel
                        key={id}
                        value={it.label}
                        control={<Radio />}
                        label={it.label}
                    />
                ))}
            </RadioGroup>
        </div>
    );
};
