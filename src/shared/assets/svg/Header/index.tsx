import { Curved, LogoBgIcon, LogoIcon } from "./components"

interface IProps {
    icon: 'curved' | 'logo' | 'logobg';
}


export const HeaderSvg: React.FC<IProps> = (props) => {
    const { icon } = props;

    const components = {
        curved: <Curved />,
        logo: <LogoIcon />,
        logobg: <LogoBgIcon />,
    }

    return components[icon] && components[icon];
};
