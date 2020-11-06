import styles from '../styles/Footer.module.css';
import Link from 'next/link'
import React from "react";

export default function Footer() {
    return (
        <footer className={styles.footer}>

            <div className={styles.topLine}>

                <div className={styles.logoBox}>
                    <Link href="/"><img src="/HMLogo.svg" alt="logo" className={styles.logo} /></Link>
                </div>

                <div className={styles.leftBox}>

                    <div className={styles.addressContainer}>
                        <div>
                            <img src="/mapicon.svg" className={styles.mapIcon} />
                        </div>

                        <Link href="https://goo.gl/maps/eAUVuMgsLMhacw3S7">
                            <a target="_blank">
                                <div className={styles.addressBox}>
                                    <p>8171 Main St</p>
                                    <p>Vancouver, BC</p>
                                    <p>VSX 3L2</p>
                                </div>
                            </a>
                        </Link>
                    </div>

                    <div className={styles.hoursContainer}>
                        <div className={styles.hoursBox}>
                            <p>Monday - Saturday</p>
                            <p>Sunday</p>
                        </div>
                        <div className={styles.hoursTime}>
                            <p>12 - 7 PM</p>
                            <p>12 - 6 PM</p>
                        </div>
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
                        © Halfmoon, {new Date().getFullYear()}
                    </p>

                </div>

                <div className={styles.bottomRightBox}>

                    <div>
                        <Link href="tel:123-456-7890"><img src="/phone.svg" alt="logo" className={styles.phone} /></Link>
                    </div>

                    <div className={styles.phoneNum}>
                        <Link href="tel:123-456-7890">(604) 301-9075</Link>
                    </div>

                    <div>
                        <Link href="mailto:info@animanga.me"><img src="/envelope.svg" alt="logo" className={styles.envelope} /></Link>
                    </div>

                    <div className={styles.email}>
                        <Link href="mailto:info@animanga.me">info@animanga.me</Link>
                    </div>

                    <div>
                        <Link href="https://www.facebook.com/Halfmoon-Manga-Anime-21613267752/"><img src="/fbicon.svg" alt="logo" className={styles.fbIcon} /></Link>
                    </div>

                </div>

            </div>

        </footer>

    )
}