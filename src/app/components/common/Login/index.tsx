import { EmailIcon, EyeIcon, PasswordIcon, SocialIcons } from 'shared/assets/svg';
import { Typography, Button } from 'shared/ui';
import styles from './styles.module.scss'

interface IProps {
    children?: JSX.Element | JSX.Element[];
    title?: JSX.Element | JSX.Element[];
}

export const Login: React.FC<IProps> = (props) => {
    const { children, title } = props;

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <Typography component={'p'} color={'cooper-light'} fontSize='12px'>
                    Your Email
                </Typography>
                <Button variant='lcooper' className='fit-content align-left'>
                    <EmailIcon color='cooper-light'/>example@gmail.com
                </Button>
            </div>
            <div className={styles.row}>
                <Typography component={'p'} color={'cooper-light'} fontSize='12px'>
                    Password
                </Typography>
                <Button variant='lcooper' className='fit-content align-left'>
                    <PasswordIcon color='cooper-light'/>
                    ****************
                    <EyeIcon color='cooper-light'/>
                </Button>
            </div>
            <div className={styles.forgot}>
                Forgot password ?
            </div>

            <div className={styles.or}>
                or
            </div>

            <div className={styles.social}>
                <Button variant='icon'>
                    <SocialIcons icon='facebook' />
                </Button>
                <Button variant='icon'>
                    <SocialIcons icon='google' />
                </Button>
                <Button variant='icon'>
                    <SocialIcons icon='discord' />
                </Button>
            </div>

            <div className={styles.button}>
                <Button>
                    Login
                </Button>
            </div>

            <div className={styles.signup}>
                <Typography component={'p'} color={'cooper-light'} fontSize='12px'>
                    Don’t have an account ?
                </Typography>
                <a href="/">Sign UP</a>
            </div>
        </div>
    )
}