import React, { SVGProps } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';

interface IProps {
    height?: number;
    width?: number;
}

export const FireIcon: React.FC<SVGProps<SVGElement>> = (props: IProps) => {
    const { width = 18, height = 18 } = props;

    const classname = classNames([
        styles.svg,
    ])

    return (
        <svg className={classname} height={height} width={width} viewBox='0 0 12 17' xmlns='http://www.w3.org/2000/svg'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 3.36146C7.66667 6.56284 6.66667 8.27569 5 8.5C5 8.5 6.5 2.88125 4.5 0C4.5 0 4.28792 3.08721 2.14499 6.7918C1.14049 8.52832 0 9.69894 0 12.0052C0 15.2982 3.51144 17 6.00572 17C8.5 17 12 15.8475 12 11.8136C12 10.1549 10.6667 7.33749 8 3.36146Z'
                fill='white'
            />
        </svg>
    );
};
