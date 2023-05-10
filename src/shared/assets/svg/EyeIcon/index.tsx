import React, { SVGProps } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';

interface IProps {
    height?: number;
    width?: number;
    color?: string;
}

export const EyeIcon: React.FC<SVGProps<SVGElement>> = (props: IProps) => {
    const { width = 18, height = 17, color } = props;

    const classname = classNames([
        styles.svg,
    ])

    return (
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.99984 0.166626C13.9998 0.166626 17.3332 4.83329 17.3332 5.99996C17.3332 7.16663 13.9998 11.8333 8.99984 11.8333C3.99984 11.8333 0.666504 7.16663 0.666504 5.99996C0.666504 4.83329 3.99984 0.166626 8.99984 0.166626ZM8.99984 1.83329C6.69865 1.83329 4.83317 3.69877 4.83317 5.99996C4.83317 8.30115 6.69865 10.1666 8.99984 10.1666C11.301 10.1666 13.1665 8.30115 13.1665 5.99996C13.1665 3.69877 11.301 1.83329 8.99984 1.83329ZM9.00063 3.91663C10.1512 3.91663 11.084 4.84937 11.084 5.99996C11.084 7.15055 10.1512 8.08329 9.00063 8.08329C7.85004 8.08329 6.9173 7.15055 6.9173 5.99996C6.9173 4.84937 7.85004 3.91663 9.00063 3.91663Z" fill="#42322E"/>
        </svg>

    );
};
