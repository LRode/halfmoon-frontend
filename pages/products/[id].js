import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/ProductPage.module.css';
import { useRouter } from 'next/router'
import ReactMarkdown from "react-markdown";

import axios from '../../services/axios.config';

import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import Loading from '../../components/Loading';

export default function Product({ product }) {
  const router = useRouter();

  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>{product.Name} | Halfmoon Manga + Anime </title>
      </Head>

      <Header activePage="Products" />
      <main className="main">
        {
          // If the page is not yet generated, this will be displayed
          // initially until getStaticProps() finishes running
          router.isFallback
            ? (<div className={styles.loadingContainer}><Loading /></div>)
            : (<div className={styles.productPageContainer}>
              <div className={styles.block}>

                <div className={styles.productImageContainer}>{
                  product.Image
                    ? (
                      <img src={product.Image.url} className={styles.productImage} />
                    )
                    : <img src="/productPlaceholder.png" className={styles.productImage} />
                }</div>
                <div className={styles.productDetails}>
                  <h1 className={styles.productTitle}>{product.Name}</h1>
                  <h2 className={styles.productSecondaryTitle}>{product.SecondaryName}</h2>
                  <div className={styles.categoryPriceRow}>
                    <span className={styles.productCategory}>{product.category && product.category.Name}</span>
                    <span className={styles.productPrice}>
                      {
                        (product.onSale && product.SalePrice) &&
                        <span className={styles.salePrice}>${Number.parseFloat(product.SalePrice).toFixed(2)}</span>
                      }
                      <span className={styles.originalPrice}>
                        ${product.Price && Number.parseFloat(product.Price).toFixed(2)}
                      </span>
                    </span>
                  </div>
                  <hr></hr>
                  <div className={styles.productFieldsContainer}>
                    <h3 className={styles.productFieldHeader}>Series</h3>
                    <div className={styles.productField}>
                      <span className={styles.fieldsRight}>{product.SeriesName}</span><span className={styles.fieldsLeft}>{product.SeriesNameAlternate}</span>
                    </div>
                    <h3 className={styles.productFieldHeader}>Author</h3>
                    <div className={styles.productField}>
                      <span className={styles.fieldsRight}>{product.Author}</span><span className={styles.fieldsLeft}>{product.AuthorAlternate}</span>
                    </div>
                    <h3 className={styles.productFieldHeader}>Publisher</h3>
                    <div className={styles.productField}>
                      <span className={styles.fieldsRight}>{product.Publisher}</span><span className={styles.fieldsLeft}>{product.PublisherAlternate}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.description}>
                <h3>Description</h3>
                <div>
                  <ReactMarkdown source={product.Description} />
                </div>
                <p className={styles.storeAvailability}>
                  All products are subject to store availability. If you would like to reserve an item, please give us a call at <Link href="tel:123-456-7890"><a>(604) 301-9075</a></Link> and we'd be happy to put the item aside for you!
                </p>
              </div>
            </div>)
        }

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
