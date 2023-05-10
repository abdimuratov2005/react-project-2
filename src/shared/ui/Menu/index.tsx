import React, { useState } from 'react'
import classNames from 'classnames';
import styles from './styles.module.scss'
import { mocks } from 'app/components/common/Header/mocks';
import { MenuIcon, TMenuItems } from 'shared/assets/svg';
import { Button } from '../Button';

interface IPRops {
    type?: 'menu' | 'games' | boolean;
    mainMenuSelected?: TMenuItems;
    setMainMenuSelected?: any;
    setShowGamesMenu?: (value: boolean) => void;
    setShowMenu?: (value: boolean) => void;
    setMenuSpecial?: (value: boolean) => void;
    showGamesMenu?: boolean;
    showMenu?: boolean;
    menuSpecial?: boolean;
}

const menuList = [
    { 
        sysname: 'wow',
        name: 'World of Warcraft', 
    },
    { 
        sysname: 'lich',
        name: 'Wrath of the Lich King', 
    },
    { 
        sysname: 'final',
        name: 'Final Fantasy XIV', 
    },
    { 
        sysname: 'newworld',
        name: 'New World', 
    },
    { 
        sysname: 'fifa',
        name: 'FIFA', 
    },
    { 
        sysname: 'cod',
        name: 'Call of Duty', 
    },
    { 
        sysname: 'poe',
        name: 'Path of Exile', 
    },
    { 
        sysname: 'dest2',
        name: 'Destiny 2', 
    },
    { 
        sysname: 'overw2',
        name: 'Overwatch 2', 
    },
    { 
        sysname: 'alegends',
        name: 'Apex Legends', 
    },
    { 
        sysname: 'diablo',
        name: 'Diablo Immortal', 
    },
    { 
        sysname: 'valorant',
        name: 'Valorant', 
    },
    { 
        sysname: 'loastark',
        name: 'Lost Ark', 
    },
    { 
        sysname: 'eft',
        name: 'Escape from Tarkov', 
    },
    { 
        sysname: 'osr',
        name: 'Old School RuneScape', 
    },
    { 
        sysname: 'som',
        name: 'Season of Mastery', 
    },
];

export const Menu: React.FC<IPRops> = (props) => {
    const { 
        type = 'games', 
        mainMenuSelected, 
        setMainMenuSelected,
        showGamesMenu,
        showMenu,
        setShowGamesMenu, 
        setShowMenu,
        setMenuSpecial,
        menuSpecial
    } = props;

    const { menuLeft, menuRight } = mocks();
    const menuMain = menuLeft.concat(menuRight);

    menuMain.splice(menuMain.findIndex(e => e.special), 1);

    const [ menuSelected, setMenuSelected ] = useState<string>('wow');

    const handleClick = (sysname) => {
        setMenuSelected(sysname);
    }

    const render = () => {

        switch(type) {
            case 'menu':
                return <div className={styles.mainMenu}>
                    {menuMain.map((item, index) => (
                        <div className={classNames([
                                styles.item,
                                item.sysname === mainMenuSelected && styles.active
                            ])}
                            key={index}
                            onClick={() => setMainMenuSelected(item.sysname)}
                        >
                            <MenuIcon icon={item.sysname}/> {item.name}
                        </div>
                    ))}
                </div>
        }
    }

    const classnameContainer = classNames([
        styles.container,
        'menu-box'
    ])

    const handleClickContainer = (e) => {

        e = e || window.event;
        var target = e.target || e.srcElement;

        if (!target.classList.contains('menu-box')) {
            setShowGamesMenu(!showGamesMenu && false);
            setShowMenu(!showMenu && false);
            setMenuSpecial(!menuSpecial && false)
        }
    }

    return (
        <div className={classnameContainer} onClick={(e) => handleClickContainer(e)}>
            <Button 
                color='gray'
                className={styles.backToMenu}
                onClick={(e) => handleClickContainer(e)}
            >
                Back to menu
            </Button>
                {
                    showGamesMenu && 
                    <div className={styles.title}>CHOOSE THE GAME</div>
                }
                {showGamesMenu && menuList.map((item, index) => (
                    <div className={classNames([
                        styles.item,
                        menuSelected === item.sysname && styles.active,
                    ])}
                        onClick={() => handleClick(item.sysname)}
                        key={index}
                    >
                        {item.name}
                    </div>
                ))}
            {render()}
        </div>
    )
}