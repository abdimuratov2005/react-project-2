import React from 'react';

import styles from './styles.module.scss'
import classNames from 'classnames';
import { Typography } from 'shared/ui';
import * as gameIcons from 'shared/assets/icons/games';

interface IProps {
    item?: any;
    count?: number;
    row?: number;
}

export const BoosterItem:React.FC<IProps> = (props) => {
    const { item, count, row } = props;
    const itemIndent = 4.7;
    const rowIndent = 4;
    
    return (
        <div className={classNames([
            styles.container,
            'boosters_item'
        ])}
            style={{
                marginTop: `-${row > 0 ? rowIndent : 0}rem`,
                paddingTop: count%2 || `${itemIndent}rem`
            }}
        >
            {item.plug
                ? <>
                    <div className={classNames([
                        styles.plug,
                    ])}>
                    </div>
                </>
                : <>
                    <div className={classNames([
                            styles.main,
                            item.active && styles.hide
                    ])}>
                        {gameIcons[item.sysname] && <img src={gameIcons[item.sysname]} alt="" />}
                        <Typography component={'p'} fontSize='12px' color='platinum'>
                            {item.name}
                        </Typography>
                    </div>
                    <div className={classNames([
                        styles.hover,
                        item.active && styles.show
                    ])}>
                        <div className={styles.content}>
                            {gameIcons[item.sysname] && <img src={gameIcons[item.sysname]} alt="" />}
                            <Typography component={'p'} fontSize='12px' color='platinum'>
                                {item.name}
                            </Typography>
                        </div>
                    </div>
                </>
            }
        </div>
   )
}