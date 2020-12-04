import Link from 'next/link'
import { useState, useRef } from 'react';

import styles from '../styles/Header.module.css';
import useOnClickOutside from '../hooks/useOnClickOutside.js';
import SearchBar from './SearchBar';

export default function Header({ activePage }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const mobileNavMenuRef = useRef(null);
    const navSearchRef = useRef(null);
    useOnClickOutside(mobileNavMenuRef, () => setIsOpen(false));
    useOnClickOutside(navSearchRef, () => setIsOpenSearch(false));

    return (
        <React.Fragment>

            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

            <nav className={styles.navBar}>
            
                {isOpen && <button className={styles.menuIconClose} onClick={() => setIsOpen(false)}></button>}
                {!isOpen && <button className={styles.menuIcon} onClick={() => setIsOpen(true)}></button>}

                <Link href="/"><img src="/HMLogo.svg" alt="logo" className={styles.logo}/></Link>

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
                            Blog
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

                <div ref={navSearchRef} className={`${styles.navSearchContainer} ${isOpenSearch ? styles.open : ''}`}>
                    <SearchBar/>
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

