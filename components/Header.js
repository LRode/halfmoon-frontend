import Link from 'next/link'
import { useState, useRef } from 'react';

import styles from '../styles/Header.module.css';
import useOnClickOutside from '../hooks/useOnClickOutside.js';

export default function Header({ activePage }) {
    const [isOpen, setIsOpen] = useState(false);
    const mobileNavMenuRef = useRef(null);
    useOnClickOutside(mobileNavMenuRef, () => setIsOpen(false));

    return (
        <React.Fragment>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <script src="https://kit.fontawesome.com/a076d05399.js" />
            <nav className={styles.navBar}>
                <button
                    className={styles.menuIcon}
                    onClick={() => setIsOpen(!isOpen)}>
                    <span class="fas fa-bars"></span>
                </button>

                <img src="/HMLogo.svg" alt="logo" className={styles.logo} />

                <div className={styles.navLinks}>
                    <Link href="/">
                        <a className={`${styles.links} ${activePage === 'Home' ? styles.activeLink : ''}`}>
                            Home
                        </a>
                    </Link>
                    <Link href="/products">
                        <a className={`${styles.links} ${activePage === 'Products' ? styles.activeLink : ''}`}>
                            Products
                        </a>
                    </Link>
                    <Link href="/blog">
                        <a className={`${styles.links} ${activePage === 'Blog' ? styles.activeLink : ''}`}>
                            Blogs
                        </a>
                    </Link>
                    <Link href="/blog">
                        <a className={`${styles.links} ${activePage === 'Contact Us' ? styles.activeLink : ''}`}>
                            Contact Us
                        </a>
                    </Link>
                </div>

                <div className={styles.searchIcon}>
                    <span class="fas fa-search"></span></div>
                <div className={styles.cancelIcon}>
                    <span class="fas fa-times"></span></div>

                <form action="/search" method="get" className={styles.searchForm}>
                    <input type="search" name="search" placeholder="Search..." className={styles.searchInput} />
                    <button type="submit" className={styles.formButton}><i class="fas fa-search"></i></button>
                </form>

                <div ref={mobileNavMenuRef} className={`${styles.mobileNavMenu} ${isOpen ? styles.open : ''}`}>
                    <Link href="/">
                        <a className={`${styles.links} ${activePage === 'Home' ? styles.activeLink : ''}`}>
                            Home
                        </a>
                    </Link>
                    <Link href="/products">
                        <a className={`${styles.links} ${activePage === 'Products' ? styles.activeLink : ''}`}>
                            Products
                        </a>
                    </Link>
                    <Link href="/blog">
                        <a className={`${styles.links} ${activePage === 'Blog' ? styles.activeLink : ''}`}>
                            Blogs
                        </a>
                    </Link>
                    <Link href="/blog">
                        <a className={`${styles.links} ${activePage === 'Contact Us' ? styles.activeLink : ''}`}>
                            Contact Us
                        </a>
                    </Link>
                </div>
            </nav>
        </React.Fragment>

    )
}

