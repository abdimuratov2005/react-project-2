import React from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';

interface IProps {
    height?: number;
    width?: number;
    colored?: boolean;
}

export const ClockIcon: React.FC<IProps> = (props) => {
    const { width = 20, height = 20, colored } = props;

    const classContainer = classNames([
        styles.container,
        colored && styles.highlight
    ]);

    const classSvg = classNames([
        styles.svg,
        colored && styles.black
    ]);

    return (
        <div className={classContainer}>
            <svg className={classSvg} height={height} width={width} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_730_98904)">
                    <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M9.99998 17.5C6.31808 17.5 3.33331 14.5152 3.33331 10.8333C3.33331 7.15142 6.31808 4.16666 9.99998 4.16666C13.6819 4.16666 16.6666 7.15142 16.6666 10.8333C16.6666 14.5152 13.6819 17.5 9.99998 17.5Z" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.8333 4.21823C10.5603 4.18419 10.2822 4.16666 10 4.16666C9.71778 4.16666 9.43966 4.18419 9.16667 4.21823V3.33332H8.33333C7.8731 3.33332 7.5 2.96023 7.5 2.49999C7.5 2.03975 7.8731 1.66666 8.33333 1.66666H11.6667C12.1269 1.66666 12.5 2.03975 12.5 2.49999C12.5 2.96023 12.1269 3.33332 11.6667 3.33332H10.8333V4.21823Z" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.9249 5.44393L14.6129 4.75592C14.9384 4.43048 15.466 4.43048 15.7915 4.75592C16.1169 5.08136 16.1169 5.60899 15.7915 5.93443L15.1393 6.58661C14.784 6.15712 14.3759 5.77292 13.9249 5.44393Z" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.96918 6.25H10.0308C10.2485 6.25 10.4296 6.41763 10.4463 6.63471L10.7988 11.218C10.8165 11.4475 10.6448 11.6478 10.4153 11.6654C10.4047 11.6663 10.3941 11.6667 10.3834 11.6667H9.61662C9.3865 11.6667 9.19995 11.4801 9.19995 11.25C9.19995 11.2393 9.20036 11.2287 9.20118 11.218L9.55374 6.63471C9.57044 6.41763 9.75146 6.25 9.96918 6.25Z" />
                </g>
                <defs>
                    <clipPath id="clip0_730_98904">
                        <rect width="20" height="20" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};
