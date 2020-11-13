import Head from 'next/head'
import styles from '../styles/Blog.module.css'
import axios from '../services/axios.config';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import BlogBlock from '../components/BlogBlock';
import PageTitle from '../components/pageTitle';

export default function Posts({ posts }) {
    return (
        <div className={styles.container}>

            <Head>
                <title>Halfmoon Manga + Anime | Blog </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header activePage="Blog" />

            {/* <div className={styles.titleBox}>
                    <PageTitle title='Blog' url='/'/>
                </div> */}

            <main className={styles.main}>

                <div >
                    <PageTitle title='Products' url='/'/>
                </div>
               

                <div className={styles.blogContainer}>
                    <div className={styles.filterBox}>
                        <p>filter here</p>
                    </div>
                    <div className={styles.blogGrid}>
                        <div>
                            {posts.map((post) => (
                                <BlogBlock post={post} className={styles.blog} />
                            ))}
                        </div>
                    </div>
                </div>
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

    // By returning { props: posts }, the Posts component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}