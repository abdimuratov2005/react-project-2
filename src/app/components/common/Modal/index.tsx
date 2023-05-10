
import { Modal as MuiModal } from '@mui/material';

import styles from './styles.module.scss'
import { Button } from 'shared/ui';
import classNames from 'classnames';

interface IProps {
    children: JSX.Element | JSX.Element[] | string;
    title?: JSX.Element | JSX.Element[];
    endLogo?: JSX.Element | JSX.Element[];
    inline?: boolean;
}

export const Modal: React.FC<IProps> = (props) => {
    const { children, title, endLogo, inline } = props;

    const handleClose = () => {
        return;
    }

    return (
        <div className={classNames([
            styles.container,
            endLogo && styles.islogo
        ])}>

            <div className={styles.header}>
                <div className={styles.title}>
                    {title || ''}
                </div>
                <Button variant={endLogo ? 'close2' : 'close'}>X</Button>
            </div>

            <div className={classNames([
                styles.content,
                inline && styles.inline,
                endLogo && styles.islogo
            ])}>
                {children}
                {endLogo && 
                    <div className={styles.logo}>
                        {endLogo}
                    </div>
                }
            </div>

            {/* <MuiModal
                open={true}
                //onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <h2 id="modal-title">My Title</h2>
            </MuiModal> */}
        </div>
        
    )
}