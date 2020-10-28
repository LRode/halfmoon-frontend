import Link from 'next/link'
import { useState, useRef } from 'react';

import styles from '../styles/Header.module.css';
import useOnClickOutside from '../hooks/useOnClickOutside.js';

export default function Header({ activePage }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const mobileNavMenuRef = useRef(null);
    const mobileNavSearchRef = useRef(null);
    useOnClickOutside(mobileNavMenuRef, () => setIsOpen(false));
    useOnClickOutside(mobileNavSearchRef, () => setIsOpenSearch(false));

    return (
        <React.Fragment>

            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

            <nav className={styles.navBar}>
            
                {isOpen && <button className={styles.menuIconClose} onClick={() => setIsOpen(false)}></button>}
                {!isOpen && <button className={styles.menuIcon} onClick={() => setIsOpen(true)}></button>}

                <img src="/HMLogo.svg" alt="logo" className={styles.logo} href="/" />

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

                {isOpenSearch && <button className={styles.searchIconClose} onClick={() => setIsOpenSearch(false)}></button>}
                {!isOpenSearch && <button className={styles.searchIcon} onClick={() => setIsOpenSearch(true)}></button>}
                
                <input type="search" name="search" placeholder="Search..." className={styles.searchInput} />
                <button type="submit" className={styles.formButton}></button>

                <div ref={mobileNavSearchRef} className={`${styles.mobileNavSearch} ${isOpenSearch ? styles.open : ''}`}>
                    <input type="search" name="search" placeholder="Search..." className={styles.searchInput} />
                    <button type="submit" className={styles.formButton}></button>
                </div>
            
                <div ref={mobileNavMenuRef} className={`${styles.mobileNavMenu} ${isOpen ? styles.open : ''}`}>
                    <Link href="/">
                        <a className={`${styles.linksNav} ${activePage === 'Home' ? styles.activeLinkNav : ''}`}>
                            Home
                        </a>
                    </Link>
                    <Link href="/products">
                        <a className={`${styles.linksNav} ${activePage === 'Products' ? styles.activeLinkNav : ''}`}>
                            Products
                        </a>
                    </Link>
                    <Link href="/blog">
                        <a className={`${styles.linksNav} ${activePage === 'Blog' ? styles.activeLinkNav : ''}`}>
                            Blogs
                        </a>
                    </Link>
                    <Link href="/blog">
                        <a className={`${styles.linksNav} ${activePage === 'Contact Us' ? styles.activeLinkNav : ''}`}>
                            Contact Us
                        </a>
                    </Link>
                </div>
            </nav>
        </React.Fragment>
    )
}

