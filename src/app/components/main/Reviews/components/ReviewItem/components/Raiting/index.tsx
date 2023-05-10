import classNames from 'classnames';
import styles from './styles.module.scss'
import { ReactComponent as StarSvg } from 'shared/assets/icons/svg/star3.svg'

interface IProps {
    stars: number;
}

export const Raiting: React.FC<IProps> = (props) => {
    const { 
        stars,
    } = props;

    const classMain = classNames([
        styles.container
    ]);

    return (
        <div className={classMain}>

            {Array(stars).fill({}).map((e, i) => <div key={i}><StarSvg/></div>)}
                
        </div>
    )
}