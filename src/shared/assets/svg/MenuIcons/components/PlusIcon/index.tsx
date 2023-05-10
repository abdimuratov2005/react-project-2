import React, { SVGProps } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';
import icon from '../../../../img/ranks/unranked.png';

interface IProps {
    height?: number;
    width?: number;
}

export const PlusIcon: React.FC<SVGProps<SVGElement>> = (props: IProps) => {
    const { width = 18, height = 18 } = props;

    const classname = classNames([
        styles.svg,
    ])

    return (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.625 6.625H1.375C0.891751 6.625 0.5 7.01675 0.5 7.5C0.5 7.98325 0.891751 8.375 1.375 8.375H13.625C14.1082 8.375 14.5 7.98325 14.5 7.5C14.5 7.01675 14.1082 6.625 13.625 6.625Z" fill="#A98B89"/>
        <path d="M8.375 13.625L8.375 1.375C8.375 0.891751 7.98325 0.5 7.5 0.5C7.01675 0.5 6.625 0.891751 6.625 1.375L6.625 13.625C6.625 14.1082 7.01675 14.5 7.5 14.5C7.98325 14.5 8.375 14.1082 8.375 13.625Z" fill="#A98B89"/>
        </svg>
    );
};
