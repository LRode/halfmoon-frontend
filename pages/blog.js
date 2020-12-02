import Head from 'next/head'
import styles from '../styles/Blogs.module.css'
import axios from '../services/axios.config';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import BlogBlock from '../components/BlogBlock';
import PageTitle from '../components/pageTitle';

export default function Posts({ posts }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Blog | Halfmoon Manga + Anime</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header activePage="Blog" />
            <main className={styles.main}>
                <div >
                    <PageTitle title='Blog' url='/' />
                </div>
                <div className={styles.blogContainer}>
                    <div className={styles.filterBox}>
                        <p>filter here</p>
                    </div>
                    <div className={styles.blogGrid}>
                        <div>
                            {posts.map((post) => (
                                <a>
                                    <BlogBlock key={post.Slug} post={post} className={styles.blog} />
                                </a>
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
    // Call an external API endpoint to get posts
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

