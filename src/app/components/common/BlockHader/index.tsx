import classNames from 'classnames';
import styles from './styles.module.scss'
import { ListItemDot } from 'shared/ui/Games/components/GameCard/components/ListItemDot';
import { Typography } from 'shared/ui';
import { HeaderSvg } from 'shared/assets/svg';

interface IProps {
    children?: any;
}

export const BlockHeader: React.FC<IProps> = (props) => {
    const { children } = props;

    const classMain = classNames([
        styles.container
    ]);

    return (
        <div className={classMain}>
            <HeaderSvg icon='logobg' />
            <ListItemDot size='30px'/>
            <Typography component={'p'} fontSize='26px' fontWeight='900' color='platinum'>
                {children}
            </Typography>
        </div>
    )
}