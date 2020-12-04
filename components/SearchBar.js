import styles from '../styles/SearchBar.module.css';
import React from "react";

export default function SearchBar() {
    return (
        <div className={styles.container}>
            <div className={styles.navSearchContainer}>
            <input type="search" name="search" placeholder="Search..." className={styles.searchInput} />
                <button type="submit" className={styles.formButton}></button>
            </div>
        </div>
    )
}