import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from '../services/axios.config';
import Hero from '../components/Hero.js'
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import ContactSection from '../components/ContactSection.js';
import ProductsGallery from '../components/ProductGallery.js'
import PostsGallery from '../components/PostsGallery.js'

export default function Home({home,products,blogs}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Halfmoon Manga + Anime</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header activePage="Home"/>

      <main className={styles.main}>
        <Hero data={home} />

        <ProductsGallery products={products}/>

        <PostsGallery posts={blogs}/>

        <ContactSection/>
      </main>

      <Footer/>

    </div>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get Home data
  const [home, products, blogs] = await Promise.all([
    axios.get('/home').then(r => r.data),
    axios.get('/products').then(r => r.data),
    axios.get('/posts').then(r => r.data)
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
