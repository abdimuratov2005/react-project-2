import React, { SVGProps } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';
import icon from '../../../../img/ranks/unranked.png';

interface IProps {
    height?: number;
    width?: number;
}

export const SearchIcon: React.FC<SVGProps<SVGElement>> = (props: IProps) => {
    const { width = 18, height = 18 } = props;

    const classname = classNames([
        styles.svg,
    ])

    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.3" d="M10.7197 12.5303C10.4268 12.2374 10.4268 11.7626 10.7197 11.4697C11.0126 11.1768 11.4874 11.1768 11.7803 11.4697L14.7803 14.4697C15.0732 14.7626 15.0732 15.2374 14.7803 15.5303C14.4874 15.8232 14.0126 15.8232 13.7197 15.5303L10.7197 12.5303Z" fill="#7D6866"/>
        <path d="M8.25 12C10.3211 12 12 10.3211 12 8.25C12 6.17893 10.3211 4.5 8.25 4.5C6.17893 4.5 4.5 6.17893 4.5 8.25C4.5 10.3211 6.17893 12 8.25 12ZM8.25 13.5C5.35051 13.5 3 11.1495 3 8.25C3 5.35051 5.35051 3 8.25 3C11.1495 3 13.5 5.35051 13.5 8.25C13.5 11.1495 11.1495 13.5 8.25 13.5Z" fill="#7D6866"/>
        </svg>
    );
};
