import Link from "next/link";
import styles from "../styles/CategoriesFilter.module.css";
import React from "react";

export default function CategoriesFilter({
	headerText,
	categories,
	activeCategoryId,
	hrefBuilder,
}) {
	return (
		<React.Fragment>
			<h2 className={styles.categoriesHeader}>{headerText}</h2>
			<div className={styles.categoriesSeparator} />
			<ul className={styles.categoriesList}>
				<li
					key="all"
					className={`${styles.categoryItem} ${
						!activeCategoryId ? styles.active : ""
					}`}
				>
					<Link href={hrefBuilder(null)}>
						<a>All</a>
					</Link>
				</li>
				{categories &&
					categories
						.sort((a, b) => (a.Name > b.Name ? 1 : -1))
						.map((category) => (
							<li
								key={category.id}
								className={`${styles.categoryItem} ${
									parseInt(activeCategoryId, 10) ===
									parseInt(category.id, 10)
										? styles.active
										: ""
								}`}
							>
								<Link href={hrefBuilder(category.id)}>
									<a>{category.Name}</a>
								</Link>
							</li>
						))}
			</ul>
		</React.Fragment>
	);
}
