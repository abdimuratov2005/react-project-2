import { Button } from 'shared/ui';
import styles from './styles.module.scss'
import { ReactComponent as CheckMarkSvg } from '../../../../shared/assets/img/checkmark.svg'
import enIcon from '../../../../shared/assets/img/lang/en.png'
import deIcon from '../../../../shared/assets/img/lang/de.png'
import esIcon from '../../../../shared/assets/img/lang/es.png'
import frIcon from '../../../../shared/assets/img/lang/fr.png'
import itIcon from '../../../../shared/assets/img/lang/it.png'
import prIcon from '../../../../shared/assets/img/lang/pr.png'
import { MenuIcon } from 'shared/assets/svg';

const langs = [
    {
        sysname: 'en',
        name: 'English'
    },
    {
        sysname: 'de',
        name: 'Deutsch'
    },
    {
        sysname: 'fr',
        name: 'Français'
    },
    {
        sysname: 'es',
        name: 'Español'
    },
    {
        sysname: 'pr',
        name: 'Português'
    },
    {
        sysname: 'it',
        name: 'Italiano'
    },
];

const langIcons = {
    en: <img src={enIcon} />,
    de: <img src={deIcon} />,
    es: <img src={esIcon} />,
    fr: <img src={frIcon} />,
    pr: <img src={prIcon} />,
    it: <img src={itIcon} />, 
}

interface IProps {
    children?: JSX.Element | JSX.Element[];
    title?: JSX.Element | JSX.Element[];
}

export const OnlineSupport: React.FC<IProps> = (props) => {
    const { children, title } = props;

    return (
        <div className={styles.container}>
            <div className={styles.list}>
                <div className={styles.item}>
                    <CheckMarkSvg/>
                    Average response time is under 5 minutes
                </div>
                <div className={styles.item}>
                    <CheckMarkSvg/>
                    Multilingual customer support
                </div>
                <div className={styles.item}>
                    <CheckMarkSvg/>
                    Professional, friendly, and non-toxic communication
                </div>
            </div>

            <div className={styles.button}>
                <Button>Join Discord Server</Button>
            </div>

            <div className={styles.langs}>

                {langs.map(item => 
                    <div key={Math.random()} className={styles.item}>
                        {langIcons[item.sysname]}
                        {item.name}
                    </div>
                )}

            </div>

            <div className={styles.footer}>
                <Button variant='lcooper'>
                    <MenuIcon icon='support'/>LiveChat
                </Button>
                <a href='/'>Other contact methods</a>
            </div>
        </div>
    )
}