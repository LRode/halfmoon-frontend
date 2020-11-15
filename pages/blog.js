import Head from 'next/head'
import styles from '../styles/Products.module.css'
import axios from '../services/axios.config';
import Link from 'next/link';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default function Blogs({ posts }) {
    return (
        <div className={`${styles.container}`}>
            <Head>
                <title>Halfmoon Manga + Anime | Blog </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header activePage="Blog" />
            <main className={styles.main}>
                {posts.map((post) => (
                    <Link href={`/blog/${post.id}`}>
                        <a>
                            <article key={post.id}>
                                {post.Title}
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
    const res = await axios.get('/posts');
    const posts = res.data;

    // By returning { props: products }, the Products component
    // will receive `products` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}

