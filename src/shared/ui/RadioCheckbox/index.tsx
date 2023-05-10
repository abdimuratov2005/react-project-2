import { Tab, Tabs } from "@mui/material";
import classes from "./RadioCheckbox.module.scss";
import { useState } from "react";
import classnames from "classnames";

interface RadioCheckboxProps {
    buttons?: Array<any>;
    checked?: boolean;
    onChange?: () => void;
}
export const RadioCheckbox = (props: RadioCheckboxProps) => {
    const { checked = false, onChange } = props;

    const [active, setActive] = useState(checked || false);

    const handleChange = (event: React.SyntheticEvent, newValue: boolean) => {
        setActive(newValue);
    };

    return (
        <div className={classes.wrapper}>
            <Tabs
                value={active ? 1 : 0}
                onChange={handleChange || onChange}
                className={active && `${classes.active}`}
            >
                <Tab value={0} label="1" disableRipple />
                <Tab value={1} label="2" disableRipple />
            </Tabs>
        </div>
    );
};
