import Link from 'next/link'
import styles from '../styles/PageTitle.module.css';


export default function PageTitle({ title, url }) {
    return (
        <Link href={url}>
            <div className={styles.container}>
                <div className={styles.titleBox}>
                    <h1>{title}</h1>
                </div>
                <div className={styles.moon}>
                    <img src="/moon.svg" />
                </div>
            </div>
        </Link>
    )
}



