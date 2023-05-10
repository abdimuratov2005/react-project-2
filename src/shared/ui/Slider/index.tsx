import {
    Slider as MuiSlider,
    SliderProps as MuiSliderProps,
} from '@mui/material';
import classes from './Slider.module.scss';
import classNames from 'classnames';

type TClasses = 'big' | 'label' | 'noTrack' | 'small' | 'medium' | 'cooper-light';
type TDisplay = 'auto' | 'on' | 'off';

export type SliderProps = Omit<MuiSliderProps, 'size'> & {
    style?: TClasses;
    valueLabelDisplay?: TDisplay;
    ariaValueText?: string;
    max?: number;
    value?: number | number[];
    getAriaLabel?: (index: number) => string;
    disableSwap?: boolean;
    step?: number;
    onChange?: (value: number | number[] | string) => void;
    customStyles?: Array<TClasses>;
    children?: JSX.Element | JSX.Element[];
};

export const Slider = (props: SliderProps) => {
    const {
        children,
        valueLabelDisplay = 'auto',
        max,
        value,
        getAriaLabel,
        ariaValueText,
        disableSwap,
        style,
        step,
        marks,
        customStyles,
        onChange,
        min,
    } = props;
    
    const handleChange = (_ : Event, value: number | number[] | string) => {
        onChange && onChange(value);
    }

    const wrapperStyles = classNames([
        classes.wrapper,
        (customStyles && customStyles.includes('label')) && classes.margin
    ])

    const sliderStyles = classNames([
        customStyles && customStyles.map(item => classes[item])
    ]);

    const valueText = (value: number) => {
        return ariaValueText ? `${value} ${ariaValueText}` : String(value);
    }

    return (
        <div className={classes.container}>
            {children && children}
            <div className={wrapperStyles}>
                <MuiSlider
                    valueLabelDisplay={valueLabelDisplay}
                    max={max}
                    min={min}
                    marks={marks}
                    className={sliderStyles}
                    defaultValue={value}
                    //getAriaLabel={getAriaLabel}
                    valueLabelFormat={value => valueText(value)}
                    disableSwap={disableSwap}
                    step={step}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};
