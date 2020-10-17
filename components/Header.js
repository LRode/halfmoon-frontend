import Link from 'next/link'
import styles from '../styles/Header.module.css';

export default function Header({ activePage }) {
    return (
        <header>
           Header
           
           <Link href="/">
                <a className={`${styles.link} ${activePage === 'Home' ?  styles.activeLink : '' }`}>
                    Home
                </a>
            </Link>
            <Link href="/products">
                <a className={`${styles.link} ${activePage === 'Products' ?  styles.activeLink : '' }`}>
                    Products
                </a>
            </Link>
        </header>
    )
}
