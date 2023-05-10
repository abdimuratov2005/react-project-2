import {
    Autocomplete as MuiAutocomplete,
    AutocompleteProps as MuiAutocompleteProps,
    Paper,
} from "@mui/material";
import React, { useState } from "react";
import classnames from "classnames";

import classes from "./Autocomplete.module.scss";
import { TextField } from "../TextField";
import { Arrow } from "../../assets/icons/arrow";

type IOption = {
    id: number;
    label: string;
    img?: string;
}

type AutocompleteProps = {
    variant?: "cooper" | "gray" | "gray_small";
    children?: React.ReactNode;
    customMask?: string;
    maxLength?: number;
    value?: number;
    width?: string;
    className?: any;
    options: IOption[];
    placeholder?: string;
};

export const Autocomplete: React.FC<AutocompleteProps> = (props) => {
    const [ selectedIcon, setSelectedIcon ] = useState<string>(null);
    const {
        variant = "cooper",
        className,
        options,
        placeholder,
        value,
        width,
        ...rest
    } = props;

    return (
        <div className={classes.wrapper}
            style={{ width: width || 'auto' }}
        >
            <MuiAutocomplete
                options={options}
                disablePortal
                value={options[value - 1]}
                PaperComponent={({ children }) => (
                    <Paper className={classes.paper}>{children}</Paper>
                )}
                className={classnames(className, classes.root, [
                    classes[`variant_${variant === "gray_small" ? "gray" : variant}`],
                    classes[`${variant === "gray_small" && "small"}`],
                ])}
                {...rest}
                popupIcon={<Arrow />}
                renderInput={(params) => (
                    <TextField 
                        {...params}
                        placeholder={placeholder} 
                        iconStart={selectedIcon}
                    />
                )}
                onChange={(event, values) => {
                    if(values?.img) {
                        setSelectedIcon(values.img);
                    }
                }}
                //https://stackoverflow.com/questions/59406081/material-ui-autocomplete-with-icons
                renderOption={(props, option: IOption) => (
                    <li {...props}>
                        {option.img && <img src={option.img}/>}
                        &nbsp;{option.label}
                    </li>
                )}
            />
        </div>
    );
};
