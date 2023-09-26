import Link from "next/link";
import React, { useState, useRef } from "react";
import { useRouter } from "next/router";

import styles from "../styles/Header.module.css";
import useOnClickOutside from "../hooks/useOnClickOutside.js";

export default function Header({ activePage }) {
	const router = useRouter();

	const [isOpen, setIsOpen] = useState(false);
	const [isOpenSearch, setIsOpenSearch] = useState(false);
	const [searchValue, setSearchValue] = useState("");

	const mobileNavMenuRef = useRef(null);
	const navSearchRef = useRef(null);
	const searchButtonRef = useRef(null);
	const navButtonRef = useRef(null);

	useOnClickOutside(
		mobileNavMenuRef,
		() => {
			setIsOpen(false);
		},
		navButtonRef
	);
	useOnClickOutside(
		navSearchRef,
		() => {
			setIsOpenSearch(false);
		},
		searchButtonRef
	);

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			handleSearch();
		}
	};

	const handleChangeSearchValue = (e) => {
		if (e && e.target) {
			setSearchValue(e.target.value);
		}
	};

	const handleSearch = () => {
		router
			.push(`/products?search=${searchValue}`)
			.then(() => window.scrollTo(0, 0));
	};

	return (
		<React.Fragment>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			></meta>

			<nav className={styles.navBar}>
				<button
					ref={navButtonRef}
					className={isOpen ? styles.menuIconClose : styles.menuIcon}
					onClick={() => setIsOpen(!isOpen)}
				/>

				<Link href="/">
					<img src="/HMLogo.svg" alt="logo" className={styles.logo} />
				</Link>

				<div className={styles.navLinks}>
					<Link href="/">
						<a
							className={`${styles.links} ${
								activePage === "Home" ? styles.activeLink : ""
							}`}
						>
							Home
						</a>
					</Link>
					<Link href="/products">
						<a
							className={`${styles.links} ${
								activePage === "Products"
									? styles.activeLink
									: ""
							}`}
						>
							Products
						</a>
					</Link>
					<Link href="/blog">
						<a
							className={`${styles.links} ${
								activePage === "Blog" ? styles.activeLink : ""
							}`}
						>
							Blog
						</a>
					</Link>
					<Link href="/#contact">
						<a
							className={`${styles.links} ${
								activePage === "Contact Us"
									? styles.activeLink
									: ""
							}`}
						>
							Contact Us
						</a>
					</Link>
				</div>

				<button
					ref={searchButtonRef}
					className={
						isOpenSearch
							? styles.searchIconClose
							: styles.searchIcon
					}
					onClick={() => setIsOpenSearch(!isOpenSearch)}
				/>

				<div
					ref={navSearchRef}
					className={`${styles.navSearchContainer} ${
						isOpenSearch ? styles.open : ""
					}`}
				>
					<input
						type="text"
						name="search"
						placeholder="Search products..."
						className={styles.searchInput}
						value={searchValue}
						onKeyDown={handleKeyDown}
						onChange={handleChangeSearchValue}
					/>
					{searchValue && (
						<button
							className={styles.clearButton}
							onClick={() => setSearchValue("")}
						/>
					)}
					<button
						type="submit"
						className={styles.formButton}
						onClick={handleSearch}
					/>
				</div>

				<div
					ref={mobileNavMenuRef}
					className={`${styles.mobileNavMenu} ${
						isOpen ? styles.open : ""
					}`}
				>
					<Link href="/">
						<a
							className={`${styles.linksNav} ${
								activePage === "Home"
									? styles.activeLinkNav
									: ""
							}`}
						>
							Home
						</a>
					</Link>
					<Link href="/products">
						<a
							className={`${styles.linksNav} ${
								activePage === "Products"
									? styles.activeLinkNav
									: ""
							}`}
						>
							Products
						</a>
					</Link>
					<Link href="/blog">
						<a
							className={`${styles.linksNav} ${
								activePage === "Blog"
									? styles.activeLinkNav
									: ""
							}`}
						>
							Blog
						</a>
					</Link>
					<Link href="/#contact">
						<a
							className={`${styles.linksNav} ${
								activePage === "Contact Us"
									? styles.activeLinkNav
									: ""
							}`}
						>
							Contact Us
						</a>
					</Link>
				</div>
			</nav>
		</React.Fragment>
	);
}
