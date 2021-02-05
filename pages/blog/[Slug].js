import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'

import styles from '../../styles/Blog.module.css';
import axios from '../../services/axios.config';

import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import Blog_ from '../../components/FullBlog.js';
import PageTitle from '../../components/pageTitle.js';
import Loading from '../../components/Loading';

export default function Blog({ post }) {
  const router = useRouter();

  const canonicalURL = post ? `https://www.animanga.me/${post.Slug}` : '';

  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>{post && post.Title} | Halfmoon Manga + Anime</title>
        <meta name='title' content={`${post && post.Title} | Halfmoon Manga + Anime`} />
        <meta property="og:title" content={`${post && post.Title} | Halfmoon Manga + Anime`} />
      </Head>
      <Header activePage="Blog" />
      <main className="main">
        {/* Use h2 here since we want the Blog's title to be the main h1 */}
        <PageTitle title='Blog' tag="h2" />
        <div className="filterAndContentContainer">
          <div className="contentColumn">
            {/* <div className={styles.redirect}>
              <Link href="/blog">
                <a>
                  {'>'}Back to Blog
                </a>
              </Link>
            </div> */}
            {
              // If the page is not yet generated, this will be displayed
              // initially until getStaticProps() finishes running
              router.isFallback
                ? (<div className={styles.loadingContainer}><Loading /></div>)
                : (<Blog_ post={post} />)
            }
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
  // Default Strapi limit is 100 so increase that to ideally render generate all posts
  const res = await axios.get('/posts?_limit=1000');
  const posts = res.data;

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => `/blog/${post.Slug}`);

  // We'll pre-render only these paths at build time.
  // fallback: true means routes not generated at build time will be generated when visited
  return {
    paths,
    fallback: true
  };
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
