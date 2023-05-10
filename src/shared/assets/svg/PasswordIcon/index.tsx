import React, { SVGProps } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';

interface IProps {
    height?: number;
    width?: number;
    color?: string;
}

export const PasswordIcon: React.FC<SVGProps<SVGElement>> = (props: IProps) => {
    const { width = 18, height = 17, color } = props;

    const classname = classNames([
        styles.svg,
    ])

    return (
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 0C10.7614 0 13 2.23858 13 5L12.999 7H13.4361C14.3276 7 14.6509 7.09283 14.9768 7.26713C15.3028 7.44144 15.5586 7.69723 15.7329 8.02315C15.9072 8.34908 16 8.67237 16 9.56388V15.4361C16 16.3276 15.9072 16.6509 15.7329 16.9768C15.5586 17.3028 15.3028 17.5586 14.9768 17.7329C14.6509 17.9072 14.3276 18 13.4361 18H2.56389C1.67237 18 1.34908 17.9072 1.02315 17.7329C0.697228 17.5586 0.44144 17.3028 0.267133 16.9768C0.0928257 16.6509 0 16.3276 0 15.4361V9.56388C0 8.67237 0.0928257 8.34908 0.267133 8.02315C0.44144 7.69723 0.697228 7.44144 1.02315 7.26713C1.34908 7.09283 1.67237 7 2.56389 7H2.999L3 5C3 2.23858 5.23858 0 8 0ZM8 2C6.34315 2 5 3.34315 5 5L4.999 7H10.999L11 5C11 3.34315 9.65685 2 8 2Z" fill="#795A50"/>
        </svg>

    );
};
