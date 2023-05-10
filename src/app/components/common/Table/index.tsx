import classNames from 'classnames';
import styles from './styles.module.scss'

interface IProps {
    head?: Array<any>;
    columns?: any;
    template?: string;
}

export const Table: React.FC<IProps> = (props) => {
    const { head, columns, template } = props;

    const classMain = classNames([
        styles.container
    ]);

    return (
        <div className={classMain}
            style={{ gridTemplateColumns: template || `repeat(${head.length}, auto)` }}
        >
            <div className={styles.head}>
                {head && head.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>

            {columns && columns.map((column, index) => (
                <div className={styles.row} key={index}>
                    {column.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
            ))}
        </div>
    )
}