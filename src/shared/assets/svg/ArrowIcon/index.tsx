import React, { SVGProps } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';

interface IProps {
    height?: number;
    width?: number;
    direction?: 'left' | 'right' | 'up' | 'down';
}

export const ArrowIcon: React.FC<SVGProps<SVGElement>> = (props: IProps) => {
    const { width = 24, height = 24, direction = 'right' } = props;

    const classname = classNames([
        styles.svg,
        direction && styles[direction]
    ])

    return (
        <div className={styles.container}>
            <svg className={classname} height={height} width={width} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.00024 7C0.447959 7 0.000244141 7.44772 0.000244141 8C0.000244141 8.55228 0.447959 9 1.00024 9V7ZM15.7074 8.70711C16.0979 8.31658 16.0979 7.68342 15.7074 7.29289L9.34339 0.928932C8.95287 0.538408 8.3197 0.538408 7.92918 0.928932C7.53865 1.31946 7.53865 1.95262 7.92918 2.34315L13.586 8L7.92918 13.6569C7.53865 14.0474 7.53865 14.6805 7.92918 15.0711C8.3197 15.4616 8.95287 15.4616 9.34339 15.0711L15.7074 8.70711ZM1.00024 9H15.0002V7H1.00024V9Z"/>
            </svg>
        </div>
    );
};
