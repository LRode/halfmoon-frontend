import styles from '../styles/ContactSection.module.css';
import PageTitle from '../components/pageTitle.js'
import React from "react";
import Link from 'next/link'

export default function ContactSection() {

    return (
        <div id="contact" className={styles.container}>
            <div className={styles.main}>
                <div className={styles.contactContainer}>
                    <PageTitle title='Find Us' tag="h2" />

                    <div className={styles.contactBox}>
                        <div className={styles.content}>
                            <Link href="mailto:info@animanga.me">
                                <a className={styles.rowDisplay}>
                                    <img src="/envelope.svg" alt="logo" className={styles.envelope} />
                                    info@animanga.me
                                </a>
                            </Link>

                            <Link href="https://goo.gl/maps/eAUVuMgsLMhacw3S7">
                                <a target="_blank" className={styles.rowDisplay}>
                                    <div className={styles.addressContainer}>
                                        <img src="/mapicon.svg" className={styles.mapIcon} />
                                        <div className={styles.addressBox}>
                                            <p>8171 Main St</p>
                                            <p>Vancouver, BC</p>
                                            <p>VSX 3L2</p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>

                        <div className={styles.content}>
                            <Link href="tel:123-456-7890">
                                <a className={styles.rowDisplay}>
                                    <img src="/phone.svg" alt="logo" className={styles.phone} />
                                    <div className={styles.phoneNum}>
                                        (604) 301-9075
                                    </div>
                                </a>
                            </Link>

                            <div className={styles.rowDisplay}>
                                <div className={styles.hoursContainer}>
                                    <div className={styles.hoursBox}>
                                        <h3>Hours</h3>
                                        <p>Monday - Saturday</p>
                                        <p>Sunday</p>
                                    </div>
                                    <div className={styles.hoursTime}>
                                        <p>12 - 7 PM</p>
                                        <p>12 - 6 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles.mapBox}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.4076630872037!2d-123.10477758413717!3d49.21179538371143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548674f6a6909e23%3A0x3d08bd25311f560!2sHalf%20Moon%20Bookstore!5e0!3m2!1sen!2spl!4v1607121652060!5m2!1sen!2spl"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0">
                    </iframe>
                </div>
            </div>
        </div>
    )
}