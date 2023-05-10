import { WowIcon } from "./components"

interface IProps {
    icon: 'wow';
}

export const GameIcon: React.FC<IProps> = (props) => {
    const { icon } = props;

    const components = {
        wow: <WowIcon />
    }

    return components[icon] && components[icon];
}