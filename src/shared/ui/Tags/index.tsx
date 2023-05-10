import classNames from 'classnames';
import styles from './styles.module.scss'

export type ITag = {
    name: string;
    color?: 'red' | 'green' | 'blue' | 'purple' | 'cooper' | undefined;
}

interface IProps {
    tags: ITag[];
    label: string;
}

export const Tags: React.FC<IProps> = (props) => {
    const { tags, label } = props;

    return (
        <div className={styles.container}>
            <div className={styles.icon}>#</div>
            <div className={styles.content}>
                <div className={styles.label}>{label}</div>
                <div className={styles.tags}>
                    {tags.map(item => 
                        <div key={Math.random()} className={classNames([
                            item.color && styles[item.color]
                        ])}>{item.name}</div>
                    )}
                </div>
            </div>
        </div>
    )
}