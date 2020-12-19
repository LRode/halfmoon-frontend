import styles from '../styles/CovidAlert.module.css';
import React from "react";
import ReactMarkdown from "react-markdown";

export default function Covid({ data }) {

    return (
        <div className={styles.container}>
            <div className={styles.covid}>
                <div className={styles.covid__description}>
                    <h3>COVID-19 Update</h3>
                    <ReactMarkdown source={data.CovidAlert} />
                </div>
            </div>
        </div>
    )
}