import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import styles from '../styles/Products.module.css';
import axios from '../services/axios.config';
import fetcher from '../services/fetcher.js';
import getQueryParam from '../services/getQueryParam.js';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import ProductBlock from '../components/ProductBlock';
import PageTitle from '../components/pageTitle';
import Pagination from '../components/Pagination'
import Loading from '../components/Loading.js';

const PAGE_SIZE = 24;

export default function Products() {
    const router = useRouter();
    let currentPage = 0;
    let queryValue = getQueryParam(router, 'page');
    if (queryValue) {
        // Pagination component expects page 1 to actually be page 0.
        // Renders as page 1, but is indexed at 0
        currentPage = queryValue - 1;
    }

    // get total number of products so we can lay out proper pagination
    const { data: totalProducts } = useSWR(`/products/count`, fetcher);

    // use PAGE_SIZE and the current page to figure out which element we should start getting results from
    const start = PAGE_SIZE * currentPage;
    const { data: products, error } = useSWR(`/products?_start=${start}&_limit=${PAGE_SIZE}`, fetcher);

    const handlePageClick = (selectedPage) => {
        router.push(`/products?page=${selectedPage}`, undefined, { shallow: true })
            .then(() => window.scrollTo(0, 0));
    };

    const renderProducts = !products
        ? (<div className="contentColumn"><Loading /></div>)
        : (
            <div className="contentColumn">
                {products.length === 0 && <p>No products found</p>}
                <div className={styles.productsGrid}>
                    {products.map((product) => (
                        <ProductBlock key={product.id} product={product} />
                    ))}
                </div>
                {
                    (totalProducts && totalProducts / PAGE_SIZE > 1) &&
                    <Pagination
                        currentPage={currentPage}
                        pageCount={Math.ceil(totalProducts / PAGE_SIZE)}
                        handlePageClick={(page) => {
                            handlePageClick(parseInt(page.selected, 10) + 1);
                        }}
                        hrefBuilder={(pageNum) => `/products?page=${pageNum}`} />
                }
            </div>
        );

    return (
        <div className={styles.container}>
            <Head>
                <title>Products | Halfmoon Manga + Anime</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header activePage="Products" />
            <main className="main">
                <PageTitle title='Products' />
                <div className="filterAndContentContainer">
                    <div className="filterColumn">
                        <p>filter here</p>
                    </div>
                    {
                        error
                            ? (<div className="contentColumn">There was a problem loading products</div>)
                            : renderProducts
                    }
                </div>
            </main>
            <Footer />
        </div>
    )
}
