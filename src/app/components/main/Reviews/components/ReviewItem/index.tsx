import classNames from 'classnames';
import styles from './styles.module.scss'
import { Typography } from 'shared/ui';
import { ReactComponent as StarSvg } from 'shared/assets/icons/svg/star3.svg'
import { Raiting } from './components/Raiting';
import Avatar from 'shared/assets/img/main/reviewavatar.png';
import { ReactComponent as LocationSvg } from 'shared/assets/icons/svg/location.svg'

interface IProps {
    name: string;
    location: string;
    avatar: string;
    title: string;
    text: string;
    stars: number;
    date: string;
}

export const ReviewItem: React.FC<IProps> = (props) => {
    const { 
        name,
        location,
        avatar,
        title,
        text,
        stars,
        date,
    } = props;

    const classMain = classNames([
        styles.container
    ]);

    return (
        <div className={classMain}>

            <div className={styles.user}>
                
                <div className={styles.avatar}>
                    <img src={Avatar} alt=''/>
                </div>
                <div className={styles.info}>
                    <Typography component={'p'} fontSize='14px' color='platinum'>
                        {name}
                    </Typography>
                    <div className={styles.location}>
                        <LocationSvg/>
                        <Typography component={'p'} fontSize='14px' color='cooper-light'>
                            {location}
                        </Typography>
                    </div>
                </div>

            </div>

            <Typography component={'p'} fontSize='14px' fontWeight='900' color='platinum'>
                {title}
            </Typography>
            
            <Typography component={'p'} fontSize='12px' color='cooper-light2' className={[ styles['review-text'] ]}>
                {text}
            </Typography>

            <div className={styles.footer}>
                <Raiting stars={5} />
                <Typography component={'p'} fontSize='12px' color='cooper-light'>
                    {date}
                </Typography>
            </div>
        </div>
    )
}