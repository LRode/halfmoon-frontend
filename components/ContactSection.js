import styles from '../styles/ContactSection.module.css';
import PageTitle from '../components/pageTitle.js'
import React from "react";
import Link from 'next/link'

export default function ContactSection() {

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.contactContainer}>
                    <div>
                        <PageTitle title='Find Us' />
                    </div>
                    <div className={styles.contactBox}>
                        <div className={styles.content}>
                            <div className={styles.rowDisplay}>
                                <div>
                                    <Link href="mailto:info@animanga.me"><img src="/envelope.svg" alt="logo" className={styles.envelope} /></Link>
                                </div>
                                <div className={styles.email}>
                                    <Link href="mailto:info@animanga.me">info@animanga.me</Link>
                                </div>
                            </div>
                            <div className={styles.rowDisplay}>
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
                            </div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.rowDisplay}>
                                <div>
                                    <Link href="tel:123-456-7890"><img src="/phone.svg" alt="logo" className={styles.phone} /></Link>
                                </div>
                                <div className={styles.phoneNum}>
                                    <Link href="tel:123-456-7890">(604) 301-9075</Link>
                                </div>
                            </div>
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.4076630872037!2d-123.10477758413717!3d49.21179538371143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548674f6a6909e23%3A0x3d08bd25311f560!2sHalf%20Moon%20Bookstore!5e0!3m2!1sen!2spl!4v1607121652060!5m2!1sen!2spl" width="100%" height="100%" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
    )
}