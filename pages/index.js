import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from '../services/axios.config';

import Hero from '../components/Hero'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import ProductsGallery from '../components/ProductGallery';
import PostsGallery from '../components/PostsGallery';
import About from '../components/About';
import CovidAlert from '../components/CovidAlert';

export default function Home({ home, products, blogs }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Halfmoon Manga + Anime</title>
        <meta name='title' content='Halfmoon Manga + Anime' />
        <meta property='og:title' content='Halfmoon Manga + Anime' />
        <link rel="canonical" href="https://www.animanga.me/" />
      </Head>
      <Header activePage="Home" />
      <main className={styles.main}>
        <Hero data={home} />
        <div className={styles.homeContentContainer}>
          {home.CovidAlert ? <CovidAlert data={home} /> : null}
          <About data={home} />
          {(products && products.length > 0) && <ProductsGallery products={products} />}
          {(blogs && blogs.length > 0) && <PostsGallery posts={blogs} />}
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get Home data
  const [home, products, blogs] = await Promise.all([
    axios.get('/home').then(r => r.data),
    axios.get('/products?_sort=updated_at:DESC&_limit=8').then(r => r.data),
    axios.get('/posts?_sort=updated_at:DESC&_limit=3').then(r => r.data)
  ])

  // By returning { props: home }, the Home component
  // will receive `home` as a prop at build time
  return {
    props: {
      home,
      products,
      blogs
    },
  }
}
