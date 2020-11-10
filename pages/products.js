import Head from 'next/head'
import styles from '../styles/Products.module.css'
import axios from '../services/axios.config';
import Link from 'next/link';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Dropdown from '../components/Dropdown.js';
import Accordion from '../components/Accordion';
import Checklist from '../components/Checklist';

export default function Products({ products }) {
    return (
        <div className={`${styles.container}`}>
            <Head>
                <title>Halfmoon Manga + Anime | Products </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header activePage="Products" />
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
            </main>
            
            <Footer />
        </div>
    )
}

// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get products
    const res = await axios.get('/products');
    const products = res.data;

    // By returning { props: products }, the Products component
    // will receive `products` as a prop at build time
    return {
        props: {
            products,
        },
    }
}