import { useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss'
import { Button, Social, TextField } from 'shared/ui'
import { HeaderSvg, MenuIcon, TMenuItems } from 'shared/assets/svg'
import { ProfileMenu } from 'app/components/common/ProfileMenu';
import { LangMenu } from 'app/components/common/LangMenu';
import * as IconsSvg from 'shared/assets/icons/svg'
import { mocks } from './mocks';

export interface IMenu {
    sysname: TMenuItems;
    name: string;
    special?: boolean;
}

interface IProps {
    setShowGamesMenu?: (value: boolean) => void;
    setShowProfileMenu?: (value: boolean) => void;
    setShowLangMenu?: (value: boolean) => void;
    setMenuSpecial?: (value: boolean) => void;
    setShowMenu?: (value: boolean) => void;
    showMenu?: boolean;
    setMainMenuSelected?: any;
    showLangMenu?: boolean;    
    mainMenuSelected?: TMenuItems;
    menuSpecial?: boolean;
    showGamesMenu?: boolean;
}

export const Header: React.FC<IProps> = (props) => {
    const { 
        setShowGamesMenu, 
        setShowMenu, 
        showMenu, 
        mainMenuSelected, 
        setMainMenuSelected, 
        setMenuSpecial, 
        menuSpecial 
    } = props;
    const { menuLeft, menuRight } = mocks();
    const searchFormSize = window.innerWidth <= 768 ? '100%' : '7rem'
    
    const [ showProfileMenu, setShowProfileMenu ] = useState<boolean>(false);
    const [ showLangMenu, setShowLangMenu ] = useState<boolean>(false);
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false);
    const [ isSearch, setIsSearch ] = useState<boolean>(false);

    const handleMenuClick = (item) => {
        setMainMenuSelected(item.sysname);
        setMenuSpecial(false);
        setShowGamesMenu(false);
    }

    const renderMenuItem = ({ item, index }) => {

        return (
            <div className={classNames([
                    styles.item,
                    (item.sysname === mainMenuSelected || (item.special && menuSpecial)) && styles.active,
                    item.special && styles.special
                ])}
                onClick={() => {
                    if (item.special) {
                        setMenuSpecial(!menuSpecial);
                        setShowGamesMenu(!menuSpecial);

                    } else {
                        handleMenuClick(item);
                    }
                }}
                key={index}
            >
                {item.special && menuSpecial
                    ? <Button startIcon={<><MenuIcon icon='close'/><MenuIcon icon='game'/></>}>
                        {item.name}
                    </Button>
                    : <>
                        <MenuIcon icon={item.sysname}/> {item.name}
                    </>
                }
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            {showLangMenu && <LangMenu/>}
            {showProfileMenu && <ProfileMenu/>}

            <div className={styles.container}>

                <div className={styles.menuButton}>
                    <Button color='gray' startIcon={<IconsSvg.burger />}
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        { showMenu ? 'CLOSE' : 'MENU' }
                    </Button>
                </div>

                <Social showLangMenu={showLangMenu} setShowLangMenu={setShowLangMenu} />

                <div className={styles.center}>

                    <div className={styles.menu}>
                        {menuLeft.map((item, index) => renderMenuItem({ item, index }))}
                    </div>

                    <div className={styles.logoWrapper}>
                        <div className={styles.logoContainer}>
                            <div className={styles.glow}></div>
                            <div className={styles.logoBg}>
                                <HeaderSvg icon='logobg' />
                            </div>
                            <div className={styles.logo}>
                                <HeaderSvg icon='logo' />
                            </div>
                        </div>
                    </div>
                    <div className={classNames([
                        styles.menu,
                        styles.right
                    ])}>
                        {menuRight.map((item, index) => renderMenuItem({ item, index }))}
                    </div>
                </div>

                <div className={styles.menuSecondary}>
                    {isLoggedIn
                        ? <>
                            <div className={styles.balance}>
                                <Button startIcon={<MenuIcon icon='wallet' />} iconStyle='bgcolor' color='black'>
                                    $ 8500.00
                                </Button>
                            </div>
                            <div className={styles.search}>
                                {!isSearch
                                    ? <Button variant='icon_header' color='dark-gray' onClick={() => setIsSearch(true)}>
                                        <MenuIcon icon='search' />
                                    </Button>
                                    : <div className={window.innerWidth <= 768 && styles.searchBar}>
                                        <TextField
                                            iconStart={<MenuIcon icon='search' />}
                                            width={searchFormSize}
                                            placeholder='SEARCH...'
                                            background='gray'
                                            customStyles={[ 'small' ]}
                                        />
                                        {
                                            window.innerWidth <= 768 && 
                                            <Button
                                                color='gray'
                                                variant='contained'
                                                startIcon={<MenuIcon icon="close"/>}
                                                className={styles.searchCloseButton}
                                                onClick={() => setIsSearch(false)}
                                            />
                                        }
                                    </div>
                                }
                            </div>
                            <div className={styles.cart}>
                                <Button variant='icon_header' color='dark-gray'>
                                    <MenuIcon icon='cart' />
                                </Button>
                                <div className={styles.label}>3</div>
                            </div>
                            <div className={styles.profile}>
                                <Button onClick={() => setShowProfileMenu(!showProfileMenu)}>
                                    <MenuIcon icon='profile' />
                                </Button>
                            </div>
                        </>
                        : <>
                            <div className={styles.register}>
                                <Button endIcon={<MenuIcon icon='profile' />} iconStyle={window.innerWidth >= 600 ? 'bgcolor' : null}>
                                    Register
                                </Button>
                            </div>
                            <div className={classNames([    
                                styles.login,
                                styles.notLoggedIn,
                            ])}>
                                <Button color='black' endIcon={<MenuIcon icon='profile' />} iconStyle='bgcolor'
                                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                                >
                                    Login
                                </Button>
                            </div>
                            <div className={classNames([
                                styles.profile,
                                styles.notLoggedIn,
                            ])}>
                                <Button onClick={() => setIsLoggedIn(!isLoggedIn)} >
                                    <MenuIcon icon='profile' />
                                </Button>
                            </div>
                        </>
                    }
                </div>

            </div>

            <HeaderSvg icon='curved' />

        </div>
    )
}