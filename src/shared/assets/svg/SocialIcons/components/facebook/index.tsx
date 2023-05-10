import React, { SVGProps } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';

interface IProps {
    height?: number;
    width?: number;
}

export const FacebookIcon: React.FC<SVGProps<SVGElement>> = (props: IProps) => {
    const { width = 22, height = 22 } = props;

    const classname = classNames([
        styles.svg,
    ])

    return (
        <svg className={classname} height={height} width={width} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5 11.2856C21.5 5.51064 16.775 0.785645 11 0.785645C5.225 0.785645 0.5 5.51064 0.5 11.2856C0.5 16.5356 4.30625 20.8669 9.29375 21.6544V14.3044H6.66875V11.2856H9.29375V8.92314C9.29375 6.29814 10.8688 4.8544 13.2313 4.8544C14.4125 4.8544 15.5938 5.11689 15.5938 5.11689V7.74189H14.2812C12.9688 7.74189 12.575 8.52939 12.575 9.31689V11.2856H15.4625L14.9375 14.3044H12.4438V21.7856C17.6938 20.9981 21.5 16.5356 21.5 11.2856Z"/>
        </svg>  
    );
};
