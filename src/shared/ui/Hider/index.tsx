import classNames from 'classnames';
import styles from './styles.module.scss'

interface IPRops {
    setShowGamesMenu?: (value: boolean) => void;
    setShowMenu?: (value: boolean) => void;
    children?: any;
}

export const Hider: React.FC<IPRops> = (props) => {
    const { setShowGamesMenu, setShowMenu, children } = props;

    const className = classNames([
        styles.container,
        'hider-box'
    ]);

    const handleClick = (e) => {

        e = e || window.event;
        var target = e.target || e.srcElement;

        if (target.classList.contains('hider-box')) {
            setShowGamesMenu(false);
            setShowMenu(false);
        }        
    }

    return (
        <div className={className} onClick={(e) => handleClick(e)}>
            {children}
        </div>
    )
}