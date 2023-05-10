import React, { SVGProps } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';

interface IProps {
    height?: number;
    width?: number;
}

export const SendIcon: React.FC<SVGProps<SVGElement>> = (props: IProps) => {
    const { width = 16, height = 17 } = props;

    const classname = classNames([
        styles.svg,
    ])

    return (
        <svg className={classname} height={height} width={width} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.74631 11.3772C1.18166 12.9048 0.826835 13.978 0.681836 14.597C0.226144 16.5423 -0.1052 16.9805 1.59322 16.056C3.29164 15.1315 11.5139 10.5518 13.3484 9.53406C15.7397 8.20736 15.7716 8.31101 13.2201 6.90236C11.2768 5.82949 3.15086 1.36931 1.59322 0.493554C0.0355857 -0.382202 0.226144 0.00722849 0.681836 1.95253C0.828714 2.57953 1.18869 3.66237 1.76176 5.20103C2.16257 6.27717 3.09488 7.06691 4.22229 7.28529L8.96951 8.20483C9.01411 8.21375 9.04303 8.25714 9.03411 8.30174C9.02759 8.33434 9.00211 8.35982 8.96951 8.36634L4.21159 9.285C3.08053 9.50338 2.14571 10.2967 1.74631 11.3772Z"/>
        </svg>
    );
};
