import { BronzeIcon, ChallengerIcon, DiamondIcon, GoldIcon, GrandmasterIcon, IronIcon, MasterIcon, PlatinumIcon, SilverIcon, UnrankedIcon } from "./components"

interface IProps {
    icon: 'unranked' | 'iron' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'master' 
        | 'grandmaster' | 'challenger';
}

export const RankIcon: React.FC<IProps> = (props) => {
    const { icon } = props;

    const components = {
        unranked: <UnrankedIcon />,
        iron: <IronIcon />,
        bronze: <BronzeIcon />,
        silver: <SilverIcon />,
        gold: <GoldIcon />,
        platinum: <PlatinumIcon />,
        diamond: <DiamondIcon />,
        master: <MasterIcon />,
        grandmaster: <GrandmasterIcon />,
        challenger: <ChallengerIcon />,
    }

    return components[icon] && components[icon];
}