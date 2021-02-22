import Link from 'next/link';
import styles from '../styles/SortingFilter.module.css';

export default function SortingFilter() {
    return (
        <div class={styles.dropdown}>
            <button class={styles.dropbtn}>Sort Products ▼</button>
            <div class={styles.dropdownContent}>
                <a key='created_at:DESC'>Newest</a>
                <a key='created_at:ASC'>Oldest</a>
                <a key='Name:ASC'>Alphabetical</a>
            </div>
        </div>
    );
};