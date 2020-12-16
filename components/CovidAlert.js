import styles from '../styles/CovidAlert.module.css';
import React from "react";
import ReactMarkdown from "react-markdown";

export default function Covid({ data }) {

    return (
        <div className={styles.container}>
            <div className={styles.covid}>
                <p className={styles.covid__description}>
                    <h3>Covid-19 Update</h3>
                    <ReactMarkdown source={data.CovidAlert} />
                </p>
            </div>
        </div>
    )
}