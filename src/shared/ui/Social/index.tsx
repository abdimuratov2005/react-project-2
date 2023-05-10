import classNames from 'classnames';
import styles from './styles.module.scss'
import { Button } from '../Button';
import langIcon from 'shared/assets/img/social/lang.png'
import youtubeIcon from 'shared/assets/img/social/youtube.png'
import twitterIcon from 'shared/assets/img/social/twitter.png'
import discordIcon from 'shared/assets/img/social/discord.png'

interface IProps {
    setShowLangMenu?: (value: boolean) => void;
    showLangMenu?: boolean;
}

export const Social: React.FC<IProps> = (props) => {
    const { showLangMenu, setShowLangMenu } = props;

    const toggleLangMenu = () => {
        setShowLangMenu(!showLangMenu);
    }

    return (
        <div className={styles.container}>
            <Button variant='icon_header' color='dark-gray' onClick={() => toggleLangMenu()}>
                <img src={langIcon} />
            </Button>
            <div className={classNames([
                styles.social,
                'header-social'
            ])}>
                <Button variant='icon_header' color='red'>
                    <img src={youtubeIcon} />
                </Button>
                <Button variant='icon_header' color='aqua'>
                    <img src={twitterIcon} />
                </Button>
                <Button variant='icon_header' color='blue'>
                    <img src={discordIcon} />
                </Button>
            </div>
        </div>
    )
}