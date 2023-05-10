import { BlogIcon, BoosterIcon, CartIcon, CloseIcon, GameIcon, PlusIcon, ProfileIcon, SearchIcon, ShieldIcon, SupportIcon, 
    WalletIcon 
} from "./components";

export type TMenuItems = 'blog' | 'booster' | 'plus' | 'game' | 'shield' | 'support' | 'wallet' | 'search' | 'profile' | 'cart'
| 'close';

interface IProps {
    icon: TMenuItems;
}

export const MenuIcon: React.FC<IProps> = (props) => {
    const { icon } = props;

    const components = {
        blog: <BlogIcon/>,
        booster: <BoosterIcon/>,
        plus: <PlusIcon/>,
        game: <GameIcon/>,
        shield: <ShieldIcon/>,
        support: <SupportIcon/>,
        wallet: <WalletIcon/>,
        search: <SearchIcon/>,
        profile: <ProfileIcon/>,
        cart: <CartIcon/>,
        close: <CloseIcon/>,
    }

    return components[icon] && components[icon];
}