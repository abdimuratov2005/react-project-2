import React, { SVGProps } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';
import icon from '../../../../img/ranks/unranked.png';

interface IProps {
    height?: number;
    width?: number;
}

export const BlogIcon: React.FC<SVGProps<SVGElement>> = (props: IProps) => {
    const { width = 18, height = 18 } = props;

    const classname = classNames([
        styles.svg,
    ])

    return (
        <svg className={styles.svg} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.5 16.375C4.15076 16.375 0.625 12.8492 0.625 8.5C0.625 4.15076 4.15076 0.625 8.5 0.625C12.8492 0.625 16.375 4.15076 16.375 8.5C16.375 12.8492 12.8492 16.375 8.5 16.375ZM10.3948 4.43548L6.40923 7.06697C6.29432 7.14285 6.22183 7.2684 6.21358 7.40586L5.92743 12.1732C5.91295 12.4144 6.09674 12.6217 6.33793 12.6361C6.43242 12.6418 6.5262 12.6167 6.6052 12.5645L10.5908 9.93303C10.7057 9.85715 10.7782 9.7316 10.7864 9.59414L11.0726 4.82679C11.0871 4.5856 10.9033 4.37834 10.6621 4.36387C10.5676 4.3582 10.4738 4.38332 10.3948 4.43548Z" />
        </svg>
    );
};
