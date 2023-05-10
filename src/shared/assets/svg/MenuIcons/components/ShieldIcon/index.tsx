import React, { SVGProps } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';
import icon from '../../../../img/ranks/unranked.png';

interface IProps {
    height?: number;
    width?: number;
}

export const ShieldIcon: React.FC<SVGProps<SVGElement>> = (props: IProps) => {
    const { width = 18, height = 18 } = props;

    const classname = classNames([
        styles.svg,
    ])

    return (
        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.1775 0.248052L0.5 1.50008V9.62272C0.5 12.1903 1.8227 14.5768 4 15.9376L7.03625 17.8352C7.31999 18.0126 7.68001 18.0126 7.96375 17.8352L11 15.9376C13.1773 14.5768 14.5 12.1903 14.5 9.62272V1.50008L7.8225 0.248052C7.60936 0.208087 7.39064 0.208087 7.1775 0.248052ZM6.1911 10.6547C6.3588 10.8225 6.56844 10.9063 6.77808 10.9063C6.98771 10.9063 7.19735 10.8225 7.36506 10.6547L10.7192 7.30058C11.0546 6.96516 11.0546 6.46204 10.7192 6.12662C10.3838 5.79121 9.88068 5.79121 9.54526 6.12662L6.77808 8.89381L5.68797 7.80371C5.39448 7.46829 4.84943 7.46829 4.51401 7.80371C4.1786 8.13912 4.1786 8.64225 4.51401 8.97767L6.1911 10.6547Z" fill="#A98B89"/>
        </svg>

    );
};
