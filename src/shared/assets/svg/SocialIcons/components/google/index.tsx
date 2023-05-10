import React, { SVGProps } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';

interface IProps {
    height?: number;
    width?: number;
}

export const GoogleIcon: React.FC<SVGProps<SVGElement>> = (props: IProps) => {
    const { width = 22, height = 22 } = props;

    const classname = classNames([
        styles.svg,
    ])

    return (
        <svg className={classname} height={height} width={width} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 72 72" >
            <path d="M36.005,31.774l22.623,0.032C60.603,41.161,56.993,60,36.005,60C22.748,60,12,49.255,12,36s10.748-24,24.005-24	c6.227,0,11.899,2.371,16.164,6.257l-6.755,6.753c-2.532-2.169-5.813-3.487-9.409-3.487c-7.996,0-14.48,6.481-14.48,14.476	s6.482,14.476,14.48,14.476c6.716,0,11.359-3.975,13.067-9.532H36.005V31.774z"/>
        </svg>
    );
};
