import styles from './styles.module.scss';

type IProps = {
    children: JSX.Element | JSX.Element[];
}

export const BigLabel: React.FC<IProps> = (props) => {
    const { children } = props;

    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}