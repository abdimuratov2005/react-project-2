import React, { SVGProps } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';

interface IProps {
    height?: number;
    width?: number;
    perc?: number;
}

export const StarIcon: React.FC<IProps> = (props) => {
    const { width = 18, height = 18, perc = 1 } = props;

    const classname = classNames([
        styles.svg,
    ]);
    //className={classname} height={height} width={width}

    return (
        <div className={styles.container} style={{ height }}>
            <svg className={classname} height={height} width={width} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.04894 1.2127C9.3483 0.291386 10.6517 0.291384 10.9511 1.2127L12.4697 5.88646C12.6035 6.29848 12.9875 6.57744 13.4207 6.57744H18.335C19.3037 6.57744 19.7065 7.81706 18.9228 8.38646L14.947 11.275C14.5966 11.5296 14.4499 11.981 14.5838 12.393L16.1024 17.0668C16.4017 17.9881 15.3472 18.7542 14.5635 18.1848L10.5878 15.2963C10.2373 15.0416 9.7627 15.0416 9.41221 15.2963L5.43648 18.1848C4.65276 18.7542 3.59828 17.9881 3.89763 17.0668L5.41623 12.393C5.55011 11.981 5.40345 11.5296 5.05296 11.275L1.07722 8.38646C0.293507 7.81706 0.696283 6.57744 1.66501 6.57744H6.57929C7.01252 6.57744 7.39647 6.29848 7.53035 5.88646L9.04894 1.2127Z"/>
            </svg>

            <div className={styles.cover} style={{ width: `${100 - perc}%` }}></div>
        </div>
// fill="#F09A38"
    );
};
