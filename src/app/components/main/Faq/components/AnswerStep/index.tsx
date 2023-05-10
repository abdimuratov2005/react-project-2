import React from 'react';

import styles from './styles.module.scss'
import * as IconsSvg from 'shared/assets/icons/svg'

interface IProps {
    children: string;
    icon: string;
}

export const AnswerStep:React.FC<IProps> = (props) => {
    const { children, icon } = props;

    const RenderIcon: React.FC = () => {
        const Icon = IconsSvg[icon];
        return IconsSvg[icon] ? <Icon /> : null;
    }    

    return (
        <div className={styles.container}>
                <div className={styles.icon}>
                    <RenderIcon />
                </div>
                <div className={styles.text}>
                    {children}
                </div>
        </div>
    )
}