import styles from '../styles/Footer.module.css';
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>

            <div className={styles.topLine}>
                <div className={styles.logoBox}>
                    <Link href="/"><img src="/HMLogo.svg" alt="logo" className={styles.logo} /></Link>

                </div>

                <div className={styles.leftBox}>

                    <img src="/mapicon.svg" className={styles.mapIcon} />

                    <div className={styles.addressBox}>

                        <p>8171 Main St</p>
                        <p>Vancouver, BC</p>
                        <p>VSX 3L2</p>

                    </div>
                    <div className={styles.hoursBox}>

                        <p>Monday - Saturday</p>
                        <p>Sunday</p>

                    </div>
                    <div className={styles.hoursBox}>

                        <p>12 - 7 PM</p>
                        <p>12 - 6 PM</p>

                    </div>

                </div>

                <div className={styles.rightBox}>

                    <div className={styles.navBox}>

                        <a href="/">Home</a>
                        <a href="/products">Products</a>
                        <a href="/blog">Blog</a>
                        <a href="mailto:info@animanga.me">Contact Us</a>

                    </div>

                </div>

            </div>

            <hr className={styles.solid} />

            <div className={styles.bottomLine}>

                <div className={styles.bottomLeftBox}>
                    <p>
                        © Halfmoon, 2020
                        </p>

                </div>

                <div className={styles.bottomRightBox}>

                    <div>
                        <img src="/phone.svg" alt="logo" className={styles.phone} />
                    </div>

                    <div>
                        <p>(604) 301-9075</p>
                    </div>

                    <div>
                        <img src="/envelope.svg" alt="logo" className={styles.envelope} />
                    </div>

                    <div className={styles.email}>
                        <Link href="mailto:info@animanga.me"><p>info@animanga.me</p></Link>
                    </div>

                    <div>
                        <Link href="https://www.facebook.com/Halfmoon-Manga-Anime-21613267752/"><img src="/fbicon.svg" alt="logo" className={styles.fbIcon} /></Link>
                    </div>

                </div>

            </div>

        </footer>

    )
}