import Head from 'next/head';

import styles from '../../styles/Products.module.css';

import axios from '../../services/axios.config';

import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';

export default function Product({ product }) {
    return (
      <div className={`${styles.container}`}>
        <Head>
          <title>{product.Name} | Halfmoon Manga + Anime </title>
        </Head>
  
        <Header activePage="Products" />
        <main className="main">
          {product.Name}
        </main>
        <Footer />
      </div>
    )
  }

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get products
    const res = await axios.get('/products');
    const products = res.data;
  
    // Get the paths we want to pre-render based on posts
    const paths = products.map((product) => `/products/${product.id}`);
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
  }

// This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /products/1, then params.id is 1
    const res = await axios.get(`/products/${params.id}`);
    const product = res.data;

    // Pass post data to the page via props
    return { props: { product } }
}
