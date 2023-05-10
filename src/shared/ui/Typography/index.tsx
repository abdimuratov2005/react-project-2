import classNames from "classnames";
import React, { FC } from "react";

import classes from "./Typography.module.scss";

type Sizes =
    | "8px"
    | "10px"
    | "11px"
    | "12px"
    | "13px"
    | "14px"
    | "16px"
    | "18px"
    | "19px"
    | "20px"
    | "22px"
    | "24px"
    | "26px"
    | "28px"
    | "30px"
    | "32px"
    | "34px"
    | "42px"
    | "48px"
    | "65px";
type FontWeight =
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
type TextAlignVariants = "center" | "left" | "right";
type FontFamily = "Montserrat";
type Display = "block" | "flex" | "none";

export interface TypographyProps {
    component?: React.ElementType;
    className?: Array<string>;
    color?:
    | "platinum"
    | "cooper"
    | "cooper-light"
    | "cooper-light2"
    | "cooper-light3"
    | "platinum-5"
    | "platinum-15"
    | "platinum-50"
    | "gray"
    | "dark-gray"
    | "black"
    | "green"
    | "red"
    | "red2";
    fontSize?: Sizes;
    fontWeight?: FontWeight;
    align?: TextAlignVariants;
    fontFamily?: FontFamily;
    mb?: Sizes;
    reset?: boolean;
    children?: React.ReactNode | JSX.Element | JSX.Element[] | Array<string>;
    href?: string;
    Display?: Display
}

export const Typography: FC<TypographyProps> = (props) => {
    const {
        component = "span",
        className,
        children,
        color = "platinum",
        fontSize,
        fontWeight,
        mb,
        align,
        fontFamily,
        reset,
        href,
        Display,
    } = props;

    const Component = component;

	const currentClassname = classNames([
		{
			[classes.root]: !reset,
			[classes.color]: true,
			[classes.fontSize]: true,
			[classes.fontWeight]: true,
			[classes.marginBottom]: true,
			[classes.textAlign]: true,
			[classes.fontFamily]: true,
            [classes.Display]: true,
			[classes[String(Component)]]: true,
			[classes[color]]: !reset && true,
			[classes[`font-size-${fontSize}`]]: Boolean(fontSize),
			[classes[`font-weight-${fontWeight}`]]: Boolean(fontWeight),
			[classes[`margin-bottom-${mb}`]]: Boolean(mb),
			[classes[`text-align-${align}`]]: Boolean(align),
			[classes[`font-family-${fontFamily}`]]: Boolean(fontFamily),
            [classes[`display-${Display}`]]: Boolean(Display)
		},
		className && className.map(item => classes[`${item}`])
	]);

    return (
        <Component className={classNames(currentClassname, className)} href={href}>
            {children}
        </Component>
    );
};
