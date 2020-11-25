import styles from '../styles/Hero.module.css';
import Link from 'next/link'
import React from "react";

export default function Hero({ data }) {
    return (
        <div className={styles.hero}>
                <div className={styles.hero__block}>
                    <div className={styles.hero__content}>
                        <img src="/HMLogoWhite.svg" className={styles.logo} />
                        <h2>{data.Headline}</h2>
                        <a href="https://example.com/" className={styles.btn}>VIEW OUR PRODUCTS</a>
                    </div>
                </div>
        </div>
    )
}