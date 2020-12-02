import styles from '../styles/FullBlog.module.css';
import React from "react";
import ReactMarkdown from "react-markdown";

export default function FullBlog({ post }) {
    return (
        <div className={styles.container}>
            <div className={styles.blog}>
                {post.FeaturedImage ? <img src={post.FeaturedImage.url} className={styles.img} /> : null}
                <div className={styles.textBox}>
                    <div>
                        <h1 className={styles.postTitle}>{post.Title}</h1>
                    </div>
                    <div className={styles.date}>
                        <p>{post.Date} | {post.post_category.Name}</p>
                    </div>
                    <div>
                        <hr className={styles.solid} />
                    </div>
                    <div className={styles.contentBlock}>
                        <ReactMarkdown source={post.Content} />
                    </div>
                </div>
            </div>
        </div>
    )
}