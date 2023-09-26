import Head from 'next/head';
import Link from 'next/link';
import { useState} from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import qs from 'qs';

import styles from '../styles/Products.module.css';
import axios from '../services/axios.config';
import fetcher from '../services/fetcher.js';
import getQueryParam from '../services/getQueryParam.js';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
<<<<<<< HEAD
import Dropdown from '../components/Dropdown.js';
import Accordion from '../components/Accordion';
import Checklist from '../components/Checklist';
=======
import ProductBlock from '../components/ProductBlock';
import PageTitle from '../components/pageTitle';
import Pagination from '../components/Pagination'
import Loading from '../components/Loading.js';
import CategoriesFilter from '../components/CategoriesFilter';

const PAGE_SIZE = 24;

export default function Products() {
    const router = useRouter();
    const [isSort, setIsSort] = useState('Name:ASC');
    let currentPage = 0;
    let pageQueryValue = getQueryParam(router, 'page');
    if (pageQueryValue) {
        // Pagination component expects page 1 to actually be page 0.
        // Renders as page 1, but is indexed at 0
        currentPage = pageQueryValue - 1;
    }
    let categoryQueryValue = getQueryParam(router, 'category');
    let searchQueryValue = getQueryParam(router, 'search');

    const { data: categories } = useSWR(`/categories`, fetcher);

    // use PAGE_SIZE and the current page to figure out which element we should start getting results from
    const start = PAGE_SIZE * currentPage;
    const countQueryString = qs.stringify({
        ...(categoryQueryValue && { category_eq: categoryQueryValue }),
        ...(searchQueryValue && {
            _where: {
                _or: [
                    { Name_contains: searchQueryValue },
                    { SecondaryName_contains: searchQueryValue },
                    { SeriesName_contains: searchQueryValue },
                    { SeriesNameAlternate_contains: searchQueryValue },
                    { Author_contains: searchQueryValue },
                    { AuthorAlternate_contains: searchQueryValue },
                    { Publisher_contains: searchQueryValue },
                    { PublisherAlternate_contains: searchQueryValue }
                ]
            }
        }),
    });

    const queryString = qs.stringify({
        _limit: PAGE_SIZE,
        _sort: isSort,
        _start: start,
        ...(categoryQueryValue && { category_eq: categoryQueryValue }),
        ...(searchQueryValue && {
            _where: {
                _or: [
                    { Name_contains: searchQueryValue },
                    { SecondaryName_contains: searchQueryValue },
                    { SeriesName_contains: searchQueryValue },
                    { SeriesNameAlternate_contains: searchQueryValue },
                    { Author_contains: searchQueryValue },
                    { AuthorAlternate_contains: searchQueryValue },
                    { Publisher_contains: searchQueryValue },
                    { PublisherAlternate_contains: searchQueryValue }
                ]
            }
        }),
    });

    // get total number of products so we can lay out proper pagination
    const { data: totalProducts } = useSWR(`/products/count?${countQueryString}`, fetcher);

    const { data: products, error } = useSWR(
        // `/products?_start=${start}&_limit=${PAGE_SIZE}&_sort=created_at:DESC${categoryQueryValue ? `&category_eq=${categoryQueryValue}` : ''}`,
        `/products?${queryString}`,
        fetcher);

    const handlePageClick = (selectedPage) => {
        router.push(`/products?page=${selectedPage}${categoryQueryValue ? `&category=${categoryQueryValue}` : ''}${searchQueryValue ? `&search=${searchQueryValue}` : ''}`, undefined, { shallow: true })
            .then(() => window.scrollTo(0, 0));
    };

    const handleClearFilter = () => {
        router.push(`/products?${categoryQueryValue ? `&category=${categoryQueryValue}` : ''}`, undefined, { shallow: true })
            .then(() => window.scrollTo(0, 0));
    };

    const renderProducts = !products
        ? (<div className="contentColumn"><Loading /></div>)
        : (
            <div className="contentColumn">
                
                {searchQueryValue && (
                    <div className={styles.searchResultsFor}>
                        Search results for "{searchQueryValue}":
                        <button className={styles.clearFilter} onClick={handleClearFilter}>Clear filter</button>
                    </div>
                )}
                {products.length === 0 && <p className="noResultsFound">No products found</p>}
                <div className={styles.productsGrid}>
                    {products.map((product) => (
                        <ProductBlock key={product.id} product={product} />
                    ))}
                </div>
                {
                    (totalProducts && totalProducts / PAGE_SIZE > 1)
                        ? (<Pagination
                            currentPage={currentPage}
                            pageCount={Math.ceil(totalProducts / PAGE_SIZE)}
                            handlePageClick={(page) => {
                                handlePageClick(parseInt(page.selected, 10) + 1);
                            }}
                            hrefBuilder={(pageNum) => `/products?page=${pageNum}${categoryQueryValue ? `&category=${categoryQueryValue}` : ''}${searchQueryValue ? `&search=${searchQueryValue}` : ''}`} />)
                        : null
                }
            </div>
        );
>>>>>>> d880f3190d2e6f963437a70ba536769bcb2f65fa

    return (
        <div className={styles.container}>
            <Head>
                <title>Products | Halfmoon Manga + Anime</title>
                <meta name='title' content='Products | Halfmoon Manga + Anime' />
                <meta property="og:title" content='Products | Halfmoon Manga + Anime' />
                <meta property="og:url" content="https://animanga.me/products" />
                <meta property="twitter:url" content="https://animanga.me/products" />
                <meta property="twitter:title" content="Products | Halfmoon Anime & Manga" />
                <link rel="canonical" href="https://www.animanga.me/products" />
            </Head>
            <Header activePage="Products" />
<<<<<<< HEAD
            <main className={styles.main}>
                <Accordion accordionTitle="Category" accordionContent={<Checklist menuItems={["1", "2", "3"]} menuName="Test"/>}/>
                <Dropdown sortOptions={["Newest", "Oldest", "Alphabetical"]} sortId="productSort"/>
                {products.map((product) => (
                    <Link href={`/products/${product.id}`}>
                        <a>
                            <article key={product.id}>
                                {product.Title}
                            </article>
                        </a>
                    </Link>
                ))}
=======
            <main className="main">
                <PageTitle title='Products' />
                <p className={styles.productsMessage}>
                    All products are subject to store availability.
                    If you would like to reserve an item, please give us a call at <Link href="tel:123-456-7890"><a>(604) 301-9075</a></Link> and we'd be happy to put the item aside for you!
                </p>
                <div className="sortingContainer">
                    <div className="sortingColumn">
                        <div class={styles.dropdown}>
                            <select id='sort' class={styles.dropbtn} onChange={() => setIsSort(sort.value)}>
                                <option key='Name:ASC' value='Name:ASC' className={styles.dropdownStyle}>Alphabetical</option>
                                <option key='created_at:DESC' value='created_at:DESC' className={styles.dropdownStyle}>Newest</option>
                                <option key='created_at:ASC' value='created_at:ASC' className={styles.dropdownStyle}>Oldest</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="filterAndContentContainer">
                    <div className="filterColumn">
                        <CategoriesFilter
                            headerText="Product Type"
                            categories={categories}
                            activeCategoryId={categoryQueryValue}
                            hrefBuilder={(categoryId) => {
                                if (!categoryId) {
                                    return `/products`;
                                }
                                return `/products?category=${categoryId}${searchQueryValue ? `&search=${searchQueryValue}` : ''}`;
                            }} />
                    </div>
                    {
                        error
                            ? (<div className="contentColumn">There was a problem loading products</div>)
                            : renderProducts
                    }
                </div>
>>>>>>> d880f3190d2e6f963437a70ba536769bcb2f65fa
            </main>
            
            <Footer />
        </div>
    )
}
