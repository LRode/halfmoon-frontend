import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Blog.module.css';
import axios from '../../services/axios.config';

import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import Blog_ from '../../components/FullBlog.js';
import PageTitle from '../../components/pageTitle.js';

export default function Blog({ post }) {
  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>{post.Title} | Halfmoon Manga + Anime</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header activePage="Blog" />
      <main className={styles.main}>
        <div>
          <PageTitle title='Blog' />
        </div>
        <div className={styles.blogContainer}>
          <div className={styles.filterBox}>
            <p>filter here</p>
          </div>
          <div className={styles.blogGrid}>
            <div className={styles.blog}>
              <div className={styles.redirect}>
                <Link href="/blog">
                  <a>
                    {'>'}Back to Blog
                </a>
                </Link>
              </div>
              <Blog_ post={post} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get products
  const res = await axios.get('/posts');
  const posts = res.data;

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => `/blog/${post.Slug}`);
  console.log('Paths', paths);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `Slug`.
  // If the route is like /products/1, then params.Slug is half-moon-s-recommended-manga
  const res = await axios.get(`/posts/${params.Slug}`);
  const post = res.data;

  // Pass post data to the page via props
  return { props: { post } }
}
