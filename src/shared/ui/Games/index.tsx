import classNames from 'classnames';
import styles from './styles.module.scss'
import { GameCard } from './components/GameCard';
import coinsImg from '../../assets/img/games/coins.png'
import tokensImg from '../../assets/img/games/tokens.png'
import azothImg from '../../assets/img/games/azoth.png'

interface IPRops {
    setShowGamesMenu?: (value: boolean) => void;
    setShowMenu?: (value: boolean) => void;
}

export const Games: React.FC<IPRops> = (props) => {
    const { setShowGamesMenu, setShowMenu } = props;

    const className = classNames([
        styles.container,
    ]);

    const listStyles = classNames([
        styles.list
    ]);

    const listStylesWhite = classNames([
        listStyles,
        styles.white
    ]);

    const handleClick = (e) => {

        e = e || window.event;
        var target = e.target || e.srcElement;

        if (target.classList.contains('gamesmenu-box')) {
            setShowGamesMenu(false);
            setShowMenu(false);
        }        
    }

    return (
        <div className={className} onClick={(e) => handleClick(e)}>
            <div className={styles.title}>Services</div>

            <div className={classNames([
                styles.content,
                'gamesmenu-box'
            ])}>

                <div className={styles.item}>
                    <div className={listStylesWhite}>
                        <div className={styles.title}>WoW Gold</div>
                        <p>Dragonflight Season 1</p>
                    </div>
                    <div className={listStyles}>
                        <div className={styles.title}>WoW Gold</div>
                        <p>Vault of the Incarnates</p>
                    </div>
                    <div className={listStyles}>
                        <div className={styles.title}>Mythic+ Dungeons</div>
                        <p>Mythic +0</p>
                        <p>Mythic+ 10</p>
                        <p>Mythic +15</p>
                        <p>Mythic +20</p>
                        <p>KSM</p>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={listStylesWhite}>
                        <p>Bundles</p>
                        <p>PvP</p>
                        <p>Leveling</p>
                        <p>Gearing</p>
                        <p>Professions</p>
                    </div>
                    <div className={listStyles}>
                        <div className={styles.title}>Character Boost</div>
                        <p>Achivemenmts</p>
                    </div>
                    <div className={listStyles}>
                        <div className={styles.title}>Coaching</div>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={listStyles}>
                        <div className={styles.title}>Collectibles</div>
                        <p>Black Market</p>
                        <p>TCG Loot</p>
                        <p>Raid Mounts</p>
                        <p>Reputation Mounts</p>
                        <p>Shadowlands Mounts</p>
                        <p>BfA Mounts</p>
                        <p>Legion Mounts</p>
                        <p>Transmog</p>
                    </div>
                </div>

                <GameCard 
                    top={true}
                    img={coinsImg}
                    title='Coins'
                    list={[
                        {
                            highlight: true,
                            text: 'Stop Grinding - Just Buy It'
                        },
                        {
                            text: '600 GS Gear, Tier V Items'
                        },
                        {
                            text: '& anything you want'
                        },
                    ]}
                    price='$4.22'
                    from={true}
                />

                <GameCard 
                    img={tokensImg}
                    title='Faction Tokens'
                    list={[
                        {
                            highlight: true,
                            text: 'Tokes + Reputation Boost'
                        },
                        {
                            text: '520 GS, Holding Runes, Chisels'
                        },
                        {
                            text: 'Expirience, Coins and Loot'
                        },
                    ]}
                    price='$4.22'
                    from={true}
                />

                <GameCard 
                    img={azothImg}
                    title='Azoth'
                    list={[
                        {
                            highlight: true,
                            text: 'Unlimited Fast Travels'
                        },
                        {
                            text: 'Boosty your craft'
                        },
                        {
                            text: 'Forget about farming'
                        },
                    ]}
                    price='$4.22'
                    from={true}
                />

            </div>
        </div>
    )
}