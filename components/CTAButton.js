import styles from '../styles/CTAButton.module.css';
import Link from 'next/link';

export default function ({ href, children }) {
    return (
        <Link href={href}>
            <a className={styles.btn}>
                {children}
            </a>
        </Link>
    );
};
