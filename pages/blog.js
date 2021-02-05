import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import fetcher from '../services/fetcher.js';
import getQueryParam from '../services/getQueryParam.js';

import styles from '../styles/Blogs.module.css'

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import BlogBlock from '../components/BlogBlock';
import PageTitle from '../components/pageTitle';
import Pagination from '../components/Pagination'
import Loading from '../components/Loading.js';
import CategoriesFilter from '../components/CategoriesFilter.js';

const PAGE_SIZE = 10;

export default function Posts() {
    const router = useRouter();
    let currentPage = 0;
    let queryValue = getQueryParam(router, 'page');
    if (queryValue) {
        // Pagination component expects page 1 to actually be page 0.
        // Renders as page 1, but is indexed at 0
        currentPage = queryValue - 1;
    }
    let categoryQueryValue = getQueryParam(router, 'category');

    // get total number of posts so we can lay out proper pagination
    const { data: totalPosts } = useSWR(`/posts/count${categoryQueryValue ? `?post_category=${categoryQueryValue}` : ''}`, fetcher);

    const { data: categories } = useSWR(`/post-categories`, fetcher);

    // use PAGE_SIZE and the current page to figure out which element we should start getting results from
    const start = PAGE_SIZE * currentPage;
    const { data: posts, error } = useSWR(
        `/posts?_start=${start}&_limit=${PAGE_SIZE}&_sort=updated_at:DESC${categoryQueryValue ? `&post_category_eq=${categoryQueryValue}` : ''}`,
        fetcher);

    const handlePageClick = (selectedPage) => {
        router.push(`/blog?page=${selectedPage}`, undefined, { shallow: true })
            .then(() => window.scrollTo(0, 0));
    };

    const renderPosts = !posts
        ? (<div className="contentColumn"><Loading /></div>)
        : (
            <div className="contentColumn">
                {posts.length === 0 && <p className="noResultsFound">No posts found</p>}
                {posts.map((post) => (
                    <BlogBlock key={post.Slug} post={post} />
                ))}
                {
                    (totalPosts && totalPosts / PAGE_SIZE > 1) &&
                    <Pagination
                        currentPage={currentPage}
                        pageCount={Math.ceil(totalPosts / PAGE_SIZE)}
                        handlePageClick={(page) => {
                            handlePageClick(parseInt(page.selected, 10) + 1);
                        }}
                        hrefBuilder={(pageNum) => `/blog?page=${pageNum}`} />
                }
            </div>
        );

    return (
        <div className={styles.container}>
            <Head>
                <title>Blog | Halfmoon Manga + Anime</title>
                <meta name='title' content='Blog | Halfmoon Manga + Anime' />
                <meta property="og:title" content='Blog | Halfmoon Manga + Anime' />
                <meta property="og:url" content="https://animanga.me/blog" />
                <meta property="twitter:url" content="https://animanga.me/blog" />
                <meta property="twitter:title" content="Blog | Halfmoon Anime & Manga" />
                <link rel="canonical" href="https://www.animanga.me/blog" />
            </Head>
            <Header activePage="Blog" />
            <main className="main">
                <PageTitle title='Blog' />
                <div className="filterAndContentContainer">
                    <div className="filterColumn">
                        <CategoriesFilter
                            headerText="Categories"
                            categories={categories}
                            activeCategoryId={categoryQueryValue}
                            hrefBuilder={(categoryId) => {
                                if (!categoryId) {
                                    return `/blog`;
                                }
                                return `/blog?category=${categoryId}`;
                            }} />
                    </div>
                    {
                        error
                            ? (<div className="contentColumn">There was a problem loading posts</div>)
                            : renderPosts
                    }
                </div>
            </main>
            <Footer />
        </div>
    )
}
