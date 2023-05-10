import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import { callToast } from 'shared/lib/callToast';
import { useCopy } from 'features/useCopy';
import {
    Autocomplete,
    Button,
    TextField,
    InlineCheckbox,
    Typography,
    Slider,
    RadioButtons,
    RadioCheckbox,
    Progress,
    Accordion,
    Label,
    Card,
    ButtonsGroup,
    TextString,
    CardGroup,
    TypographyGroup,
    BigLabel,
    Tags,
    ITag,
    Menu,
    Games,
} from 'shared/ui';

import { 
    ArrowIcon, 
    CartIcon, 
    ClockIcon, 
    EmailIcon, 
    FireIcon, 
    GameIcon, 
    PaymentIcon, 
    SocialIcons, 
    StarIcon,
    RankIcon,
    PasswordIcon,
    TMenuItems
} from 'shared/assets/svg';

import img1 from '../../shared/assets/img/img1.png'
import img2 from '../../shared/assets/img/img2.png'
import img3 from '../../shared/assets/img/img3.png'
import modallogo from '../../shared/assets/img/modallogo.png'
import { Header } from '../../app/components/common/Header';
import { Modal } from '../../app/components/common/Modal';
import { Coupon } from '../../app/components/common/Coupon';
import { OnlineSupport } from '../../app/components/common/OnlineSupport';
import { Login } from '../../app/components/common/Login';
import { Top } from 'app/components/main/Top';
import { ReactComponent as RoundedSvg } from '../../shared/assets/icons/svg/rounded.svg'
import { Buttons } from 'app/components/main/Buttons';
import { Boosters } from 'app/components/main/Boosters';
import { Shop } from 'app/components/main/Shop';
import { Reviews } from 'app/components/main/Reviews';
import { AboutUs } from 'app/components/main/AboutUs';
import { OurWorks } from 'app/components/main/OurWorks';
import { Faq } from 'app/components/main/Faq';
import { Blogs } from 'app/components/main/Blogs';
import { Footer } from 'app/components/common/Footer';
import { Hider } from 'shared/ui/Hider';

export const MainPage: React.FC = () => {
    const [ showGamesMenu, setShowGamesMenu ] = useState<boolean>(false);
    const [ showMenu, setShowMenu ] = useState<boolean>(false);
    const [ mainMenuSelected, setMainMenuSelected ] = useState<TMenuItems>('blog');
    const [ menuSpecial, setMenuSpecial ] = useState<boolean>(false);
    
    return (
        <>
            <RoundedSvg/>
            
            <Header menuSpecial={menuSpecial} setMenuSpecial={setMenuSpecial} setShowGamesMenu={setShowGamesMenu} setShowMenu={setShowMenu} showMenu={showMenu} 
                setMainMenuSelected={setMainMenuSelected}
                mainMenuSelected={mainMenuSelected}
            />

            {(showGamesMenu || showMenu)
                && <>
                    <Hider setShowGamesMenu={setShowGamesMenu} setShowMenu={setShowMenu} />
                    <div className='app__special'>
                        <Menu type={showMenu ? 'menu' : false} setMainMenuSelected={setMainMenuSelected}
                            showGamesMenu={showGamesMenu}
                            mainMenuSelected={mainMenuSelected}
                            setShowGamesMenu={setShowGamesMenu}
                            setShowMenu={setShowMenu}
                            setMenuSpecial={setMenuSpecial} 
                            menuSpecial={menuSpecial}
                        />
                        <Games setShowGamesMenu={setShowGamesMenu} setShowMenu={setShowMenu} />
                    </div>
                </>
            }

            <div className='app__content' style={{
                display: showMenu || showGamesMenu ? 'none' : 'block'
            }}>
                <Top />
                <Buttons />
                <Boosters/>
                <Shop/>
                <Reviews/>
                <AboutUs/>
                <OurWorks/>
                <Faq/>
                <Blogs/>
            </div>

            <Footer/>
        </>
    );
};
