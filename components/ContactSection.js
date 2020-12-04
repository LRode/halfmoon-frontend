import styles from '../styles/ContactSection.module.css';
import PageTitle from '../components/pageTitle.js'
import React from "react";
import Link from 'next/link'
import {withScriptjs,withGoogleMap,GoogleMap,Marker} from "react-google-maps";

const defaultCenter = { lat: 40.748817, lng: -73.985428 };

const defaultOptions = { scrollwheel: false };

const RegularMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={ defaultCenter }
      defaultOptions={ defaultOptions }
    >
      <Marker position={ defaultCenter } />
    </GoogleMap>
  ))
);

const loadingElementStyle = { height: '100%' };
const containerElementStyle = { height: '100%' };
const mapElementStyle = { height: '100%' };

export default function ContactSection() {

    return (
        <div className={styles.container}>
            <PageTitle title='Find Us' />
            <div className={styles.main}>
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
                <div className={styles.mapBox}>
                    <RegularMap
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA7E21PtntMkoiE9WN53w7AaP6g2QTNsUA"
                        loadingElement={<div style={loadingElementStyle} />}
                        containerElement={<div style={containerElementStyle} />}
                        mapElement={<div style={mapElementStyle} />}
                    />
                </div>
            </div>

        </div>
    )
}