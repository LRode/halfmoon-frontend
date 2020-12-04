import Head from 'next/head'
import { useState } from 'react';
import useSWR from 'swr'
import styles from '../styles/Blogs.module.css'
import axios from '../services/axios.config';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import BlogBlock from '../components/BlogBlock';
import PageTitle from '../components/pageTitle';
import SearchBar from '../components/SearchBar';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Posts(props) {
    const [query, updateQuery] = useState('');
    const initialData = props.posts;
    const url = '/posts?'

    const {data} = useSWR('/posts', {initialData})

    return (
        <div className={styles.container}>
            <Head>
                <title>Blog | Halfmoon Manga + Anime</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header activePage="Blog" />
            <main className={styles.main}>
                <div >
                    <PageTitle title='Blog' />
                </div>
                <div className={styles.blogContainer}>
                    <div className={styles.filterBox}>
                        <div>
                           <SearchBar/>
                           <input onChange={e => updateQuery(e.target.value.toLocaleLowerCase())}
                                value={query} id='searchBar'/>
                        </div>
                    </div>
                    <div className={styles.blogGrid}>
                        <div className={styles.blog}>
                            {data.map((post) => (
                                <BlogBlock key={post.Slug} post={post} className={styles.blog} />
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
export async function getServerSideProps(context) {
    // Call an external API endpoint to get posts
    const res = await axios.get('/posts', {
        params: {
           Title_contains: 'anime',
        }
     })
    const posts = res.data;
    // By returning { props: posts }, the Posts component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}

