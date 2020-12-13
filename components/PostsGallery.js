import styles from '../styles/PostsGallery.module.css';
import PageTitle from './pageTitle.js'
import React from "react";
import BlogBlock from '../components/BlogBlock.js'
import CTAButton from './CTAButton.js';

export default function PostsGallery({ posts }) {

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <PageTitle title="Latest Posts" />
                <div className={styles.postBox}>
                    <div className={styles.contentColumn}>
                        {posts.slice(-3).reverse().map((post) => (
                            <BlogBlock key={post.Slug} post={post} />
                        ))}
                    </div>
                    <div className={styles.blogPhoto}>
                        <div className={styles.img}></div>
                    </div>

                </div>

                <CTAButton href="/blog" className={styles.CTAbutton}>
                    view all posts
                    </CTAButton>
            </div>
        </div>
    )
}