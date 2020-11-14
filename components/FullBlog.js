import styles from '../styles/FullBlog.module.css';
import Link from 'next/link'
import React from "react";
import ReactMarkdown from "react-markdown";

export default function FullBlog({ post }) {
    return (
        <div className={styles.container}>
            <div className={styles.blog}>
                <div className={styles.imgBox}>
                    <img src={post.FeaturedImage.url} className={styles.img} />
                </div>
                <div className={styles.textBox}>
                    <div>
                        <h3>{post.Title}</h3>
                    </div>
                    <div className={styles.date}>
                        <p>{post.Date} | {post.post_category.Name}</p>
                    </div>
                    <div>
                        <hr className={styles.solid} />
                    </div>
                    <div className={styles.contentBlock}>
                        <ReactMarkdown source={post.Content}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}