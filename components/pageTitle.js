import Link from 'next/link'
import styles from '../styles/PageTitle.module.css';

export default function PageTitle({ title, tag = 'h1' }) {
    const HeaderTag = tag;
    return (
        <div className={styles.container}>
            <div className={styles.titleBox}>
                <HeaderTag className={styles.title}>{title}</HeaderTag>
            </div>
            <div className={styles.moon}>
                <img src="/moon.svg" />
            </div>
        </div>
    )
}



