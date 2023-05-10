import React, { SVGProps } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';

interface IProps {
    height?: number;
    width?: number;
    color?: string;
}

export const EmailIcon: React.FC<SVGProps<SVGElement>> = (props: IProps) => {
    const { width = 18, height = 17, color } = props;

    const classname = classNames([
        styles.svg,
    ])

    return (
        <svg className={classname} height={height} width={width} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={color && { fill: `var(--clr-${color})`}}
        >
            <path d="M18 5.84298V12.8671C18 14.0558 17.8747 14.4869 17.6394 14.9214C17.4041 15.356 17.0587 15.6971 16.6187 15.9295C16.1787 16.1619 15.7423 16.2856 14.5388 16.2856H3.46125C2.25769 16.2856 1.82126 16.1619 1.38126 15.9295C0.941259 15.6971 0.595943 15.356 0.360629 14.9214C0.125314 14.4869 0 14.0558 0 12.8671V5.84298L9 9.17631L18 5.84298ZM14.5388 0.285645C15.7423 0.285645 16.1787 0.409412 16.6187 0.641821C17.0587 0.874231 17.4041 1.21528 17.6394 1.64985C17.8208 1.98492 17.9369 2.3179 17.9805 2.9977L9 6.32831L0.0195239 2.9977C0.0631498 2.3179 0.179191 1.98492 0.360629 1.64985C0.595943 1.21528 0.941259 0.874231 1.38126 0.641821C1.82126 0.409412 2.25769 0.285645 3.46125 0.285645H14.5388Z" />
        </svg>
    );
};
