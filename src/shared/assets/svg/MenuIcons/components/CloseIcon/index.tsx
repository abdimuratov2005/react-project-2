import React, { SVGProps } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';
import icon from '../../../../img/ranks/unranked.png';

interface IProps {
    height?: number;
    width?: number;
}

export const CloseIcon: React.FC<SVGProps<SVGElement>> = (props: IProps) => {
    const { width = 18, height = 18 } = props;

    return (
        <div className={styles.container}>X</div>
    );
};
