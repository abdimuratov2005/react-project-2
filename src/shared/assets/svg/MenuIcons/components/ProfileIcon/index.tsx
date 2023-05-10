import React, { SVGProps } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';
import icon from '../../../../img/ranks/unranked.png';

interface IProps {
    height?: number;
    width?: number;
}

export const ProfileIcon: React.FC<SVGProps<SVGElement>> = (props: IProps) => {
    const { width = 18, height = 18 } = props;

    const classname = classNames([
        styles.svg,
    ])

    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99984 9.16667C8.15889 9.16667 6.6665 7.67428 6.6665 5.83333C6.6665 3.99238 8.15889 2.5 9.99984 2.5C11.8408 2.5 13.3332 3.99238 13.3332 5.83333C13.3332 7.67428 11.8408 9.16667 9.99984 9.16667Z" fill="#151416"/>
        <path d="M2.50054 16.8327C2.82355 12.8554 6.05159 10.8333 9.98612 10.8333C13.976 10.8333 17.2541 12.7443 17.4983 16.8333C17.508 16.9962 17.4983 17.5 16.8722 17.5C13.7843 17.5 9.1956 17.5 3.10625 17.5C2.89726 17.5 2.48295 17.0493 2.50054 16.8327Z" fill="#151416"/>
        </svg>

    );
};
