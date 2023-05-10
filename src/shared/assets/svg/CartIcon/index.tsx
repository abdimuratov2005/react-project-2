import React, { SVGProps } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';

interface IProps {
    height?: number;
    width?: number;
}

export const CartIcon: React.FC<SVGProps<SVGElement>> = (props: IProps) => {
    const { width = 24, height = 24 } = props;

    const classname = classNames([
        styles.svg,
    ])

    return (
        <svg className={classname} height={height} width={width} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.1446 11.8439L17.4471 16.0287C17.4463 16.0336 17.4455 16.0384 17.4446 16.0432C17.3458 16.5866 16.8252 16.947 16.2818 16.8482L4.913 14.7811C4.53839 14.713 4.23496 14.4381 4.13036 14.072L2.30557 7.6852C2.28004 7.59586 2.26709 7.5034 2.26709 7.41048C2.26709 6.8582 2.71481 6.41048 3.26709 6.41048H16.9929L17.6061 3.78253C17.7307 3.24852 18.2068 2.87073 18.7552 2.87073H20.82C21.4717 2.87073 22 3.39899 22 4.05065C22 4.7023 21.4717 5.23056 20.82 5.23056H19.6915L18.1446 11.8439Z" />
            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 21C5.67157 21 5 20.3284 5 19.5C5 18.6716 5.67157 18 6.5 18C7.32843 18 8 18.6716 8 19.5C8 20.3284 7.32843 21 6.5 21ZM15.5 21C14.6716 21 14 20.3284 14 19.5C14 18.6716 14.6716 18 15.5 18C16.3284 18 17 18.6716 17 19.5C17 20.3284 16.3284 21 15.5 21Z"/>
        </svg>
    );
};
