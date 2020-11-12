import Link from 'next/link'
import styles from '../styles/BlogBlock.module.css';


export default function BlogBlock({ post }) {
    return (

        <div className={styles.block}>
            <Link href={`/posts/${post.id}`}>
                <div className={styles.blogBox}>
                    <div className={styles.imgBox}>
                        <Link href={`/posts/${post.id}`}><img src={post.FeaturedImage.url} className={styles.img}></img></Link>
                    </div>
                    <div className={styles.textBox}>

                        <div>
                            <h3>{post.Title}</h3>
                        </div>
                        <div>
                            <p>{post.Date} | {post.post_category.Name}</p>
                        </div>
                        <div className={styles.blogDetails}>
                            <p className={styles.content}>{post.Content}</p>
                        </div>
                        <div>
                            <Link href={`/posts/${post.id}`}>
                                <a className={styles.linkText}>
                                    Read More
                            </a>
                            </Link>
                        </div>

                    </div>
                </div>
            </Link>
        </div>
    )
}

