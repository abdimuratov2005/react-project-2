import React, { SVGProps } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';

interface IProps {
    height?: number;
    width?: number;
}

export const Curved: React.FC<SVGProps<SVGElement>> = (props: IProps) => {
    const { width = 18, height = 18 } = props;

    const classname = classNames([
        styles.svg,
    ])

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <svg width="1920" height="59" viewBox="0 0 1920 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1105.87 39.1112L1105.22 38.3502C1090.94 50.5316 1072.77 57.2229 1053.98 57.2229H865.459C846.678 57.2229 828.512 50.5316 814.218 38.3501L798.541 24.99C786.606 14.819 771.437 9.22969 755.76 9.22293L959.723 9.22293L1163.68 9.22293C1148 9.23125 1132.84 14.8204 1120.9 24.99L1105.22 38.3501L1105.87 39.1112Z" fill="#151416" stroke="url(#paint0_linear_1632_69060)" strokeWidth="2"/>
                    <path d="M761.5 8.00003L1166.5 7.00003L1142 11H775L761.5 8.00003Z" fill="#151416"/>
                    <defs>
                    <linearGradient id="paint0_linear_1632_69060" x1="594.723" y1="0.222226" x2="1242.22" y2="5.72235" gradientUnits="userSpaceOnUse">
                    <stop offset="0.26156" stopColor="#242221"/>
                    <stop offset="0.572745" stopColor="#F09A38"/>
                    <stop offset="0.88077" stopColor="#212124"/>
                    </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
};
