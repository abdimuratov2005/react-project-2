import classNames from 'classnames';
import styles from './styles.module.scss'
import langIcon from 'shared/assets/img/social/lang.png'
import { Typography } from 'shared/ui';

interface IProps {

}

export const LangMenu: React.FC<IProps> = (props) => {
    const {  } = props;

    const classMain = classNames([
        styles.container
    ]);

    return (
        <div className={classMain}>
            
            <div className={styles.item}>
                <img src={langIcon} />
                <Typography component={'p'} fontSize='12px'>
                    English
                </Typography>
                <Typography component={'p'} fontSize='12px' color='cooper-light'>
                    USD
                </Typography>
            </div>

            <div className={styles.item}>
                <img src={langIcon} />
                <Typography component={'p'} fontSize='12px'>
                    English
                </Typography>
                <Typography component={'p'} fontSize='12px' color='cooper-light'>
                    EUR
                </Typography>
            </div>

            <div className={styles.item}>
                <img src={langIcon} />
                <Typography component={'p'} fontSize='12px'>
                    English
                </Typography>
                <Typography component={'p'} fontSize='12px' color='cooper-light'>
                    GBP
                </Typography>
            </div>

        </div>
    )
}