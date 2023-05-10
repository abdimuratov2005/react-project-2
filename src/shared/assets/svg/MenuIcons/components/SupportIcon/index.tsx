import React, { SVGProps } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';
import icon from '../../../../img/ranks/unranked.png';

interface IProps {
    height?: number;
    width?: number;
}

export const SupportIcon: React.FC<SVGProps<SVGElement>> = (props: IProps) => {
    const { width = 18, height = 18 } = props;

    const classname = classNames([
        styles.svg,
    ])

    return (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.625 14.0001V10.5001C16.625 7.11732 13.8827 4.37506 10.5 4.37506C7.11726 4.37506 4.375 7.11732 4.375 10.5001V14.0001H16.625ZM18.375 14.0001H2.625V10.5001C2.625 6.15082 6.15076 2.62506 10.5 2.62506C14.8492 2.62506 18.375 6.15082 18.375 10.5001V14.0001Z" fill="#A98B89"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M4.375 12.2501H5.25C6.2165 12.2501 7 13.0336 7 14.0001V16.6251C7 17.5916 6.2165 18.3751 5.25 18.3751H4.375C3.4085 18.3751 2.625 17.5916 2.625 16.6251V14.0001C2.625 13.0336 3.4085 12.2501 4.375 12.2501ZM15.75 12.2501H16.625C17.5915 12.2501 18.375 13.0336 18.375 14.0001V16.6251C18.375 17.5916 17.5915 18.3751 16.625 18.3751H15.75C14.7835 18.3751 14 17.5916 14 16.6251V14.0001C14 13.0336 14.7835 12.2501 15.75 12.2501Z" fill="#A98B89"/>
        </svg>
    );
};
