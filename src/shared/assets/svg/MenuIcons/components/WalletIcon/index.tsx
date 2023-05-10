import React, { SVGProps } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';
import icon from '../../../../img/ranks/unranked.png';

interface IProps {
    height?: number;
    width?: number;
}

export const WalletIcon: React.FC<SVGProps<SVGElement>> = (props: IProps) => {
    const { width = 18, height = 18 } = props;

    const classname = classNames([
        styles.svg,
    ])

    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.3" d="M11.9585 8.16666C12.4417 8.16666 12.8335 7.77491 12.8335 7.29166C12.8335 6.80841 12.4417 6.41666 11.9585 6.41666C11.4752 6.41666 11.0835 6.80841 11.0835 7.29166C11.0835 7.77491 11.4752 8.16666 11.9585 8.16666Z" fill="#151416"/>
        <path opacity="0.3" d="M10.9792 0.611753L1.96385 3.0274C1.65266 3.11078 1.46799 3.43064 1.55137 3.74183L2.30626 6.55912C2.38964 6.8703 2.7095 7.05498 3.02069 6.97159L12.036 4.55595C12.3472 4.47257 12.5319 4.1527 12.4485 3.84152L11.6936 1.02423C11.6102 0.713043 11.2903 0.52837 10.9792 0.611753Z" fill="#151416"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12.8332 5.44649C12.568 5.3205 12.2713 5.25001 11.9582 5.25001C10.8306 5.25001 9.9165 6.1641 9.9165 7.29168C9.9165 8.41926 10.8306 9.33334 11.9582 9.33334C12.2713 9.33334 12.568 9.26285 12.8332 9.13687V10.5C12.8332 11.1443 12.3108 11.6667 11.6665 11.6667H2.33317C1.68884 11.6667 1.1665 11.1443 1.1665 10.5V3.50001C1.1665 2.85568 1.68884 2.33334 2.33317 2.33334H11.6665C12.3108 2.33334 12.8332 2.85568 12.8332 3.50001V5.44649Z" fill="#151416"/>
        </svg>

    );
};
