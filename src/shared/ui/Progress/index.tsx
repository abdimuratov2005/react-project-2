import { Slider } from "@mui/material";
import classes from "./Progress.module.scss";
import classNames from "classnames";

interface ProgressProps {
    value: number;
    label?: string;
    max?: number;
    icon?: boolean;
    upper?: boolean;
}

export const Progress = (props: ProgressProps) => {
    const { value, label, max = 100, icon = true, upper = false } = props;
    return (
        <div className={classes.wrapper}>
            {icon && <div className={classes.icon}><div className={classes.check}></div></div>}
            <div className={classes.content}>
                <div className={classes.progress}>
                    <span className={classNames([
                        classes.label,
                        upper && classes.upper
                    ])}>{label}</span>
                    <span className={classes.value}>{`${value.toString()}%`}</span>
                </div>
                {/* <Slider disabled value={value} max={max} className={classes.slider} /> */}
            </div>
        </div>
    );
};
