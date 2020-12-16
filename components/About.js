import styles from '../styles/About.module.css';
import PageTitle from './pageTitle.js'
import React from "react";
import ReactMarkdown from "react-markdown";

export default function About({ data }) {

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <PageTitle title='About'/>
                <div className={styles.about}>
                    <p className={styles.about__description}><ReactMarkdown source={data.AboutDescription} /></p>
                    <img src='/sparkleMoon.svg' className={styles.moon} />
                </div>
                <div className={styles.firstPhoto}>
                    <img src='/storePhoto1.jpg' className={styles.storePhoto1} />
                </div>
                <div className={styles.secondPhoto}>
                    <img src='/storePhoto2.jpg' className={styles.storePhoto2} />
                </div>
                <div className={styles.consignment}>
                    <p className={styles.consignment__description}>
                        <h2>We Sell For You!</h2>
                        <ReactMarkdown source={data.ConsignmentDescription}/>
                    </p>
                    <img src='/sparkleBunny.svg' className={styles.bunny} />
                </div>
            </div>
        </div>
    )
}