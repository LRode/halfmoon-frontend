import Link from 'next/link'
import styles from '../styles/BlogBlock.module.css';


export default function BlogBlock({ post }) {
    return (
        <article>
            <Link href={`/blog/${post.Slug}`}>
                <a>
                    <div className={styles.block}>
                        {
                            post.FeaturedImage
                                ? (
                                    <div className={styles.imgBox}>
                                        <img src={post.FeaturedImage.url} className={styles.img} />
                                    </div>
                                )
                                : null
                        }
                        <div className={styles.textBox}>
                            <div>
                                <h3>{post.Title}</h3>
                            </div>
                            <div>
                                {
                                    (post.Date || post.post_category) &&
                                    <p>{post.Date} | {post.post_category && post.post_category.Name}</p>
                                }
                            </div>
                            <div className={styles.blogDetails}>
                                <p className={styles.content}>{post.Content}</p>
                            </div>
                            <div>
                                <div className={styles.linkText}>
                                    Read More
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </article>
    )
}
