import { DiscordIcon, FacebookIcon, GoogleIcon } from "./components";

interface IProps {
    icon: 'facebook' | 'discord' | 'google';
}

export const SocialIcons: React.FC<IProps> = (props) => {
    const { icon } = props;

    const components = {
        discord: <DiscordIcon />,
        facebook: <FacebookIcon />,
        google: <GoogleIcon />
    }

    return components[icon] && components[icon];
}