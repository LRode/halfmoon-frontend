import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from '../services/axios.config';
import Hero from '../components/Hero.js'
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default function Home({home}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header activePage="Home"/>

      <main className={styles.main}>
        <Hero data={home}></Hero>
      </main>

      <Footer/>

    </div>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get products
  const res = await axios.get('/home');
  const home = res.data;

  // By returning { props: products }, the Products component
  // will receive `products` as a prop at build time
  return {
      props: {
          home,
      },
  }
}
