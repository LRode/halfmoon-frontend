import styles from '../styles/Hero.module.css';
import React from "react";

import CTAButton from '../components/CTAButton.js';

export default function Hero({ data }) {
    return (
        <div className={styles.hero}>
            <div className={styles.hero__block}>
                <div className={styles.hero__content}>
                    <img src="/HMLogoWhite.svg" className={styles.logo} />
                    <h1>{data.Headline}</h1>
                    <CTAButton href="/products">
                        View our products
                    </CTAButton>
                </div>
            </div>
        </div>
    )
}