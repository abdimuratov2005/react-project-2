import { Button, Typography } from 'shared/ui';
import styles from './styles.module.scss'
// import img1 from 'shared/assets/img/blogs/img1.png'
// import img2 from 'shared/assets/img/blogs/img2.png'
// import img3 from 'shared/assets/img/blogs/img3.png'
// import img4 from 'shared/assets/img/blogs/img4.png'
// import img5 from 'shared/assets/img/blogs/img5.png'

interface IProps {
    item: {
        button: string;
        img: string;
        title: string;
        text:string;
    }
}

// const imgs = {
//     blog1: img1,
//     blog2: img1,
//     blog3: img1,
//     blog4: img1,
//     blog5: img1,
    
// }

export const BlogItem: React.FC<IProps> = (props) => {
    const { item } = props;
    const img = require(`shared/assets/img/blogs/${item.img}.png`);

    return (
        <div className={styles.container}>

            <div className={styles.btn}>
                <Button color='black'>{item.button}</Button>
            </div>

            <div className={styles.img}>
                <img src={img} alt="" />
            </div>

            <div className={styles.content}>

                <div className={styles.title}>
                    <Typography component={'p'} fontSize='16px' fontWeight='900'>
                        {item.title}
                    </Typography>
                </div>
                <div className={styles.text}>
                    <Typography component={'p'} fontSize='13px' color='cooper-light3'>
                        {item.text}
                    </Typography>
                </div>
                <div className={styles.footer}>
                    <Button>READ MORE</Button>
                </div>

            </div>

        </div>
    )
}