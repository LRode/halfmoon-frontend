import Link from 'next/link'
import styles from '../styles/BlogBlock.module.css';


export default function BlogBlock({ post }) {
    return (

        <div className={styles.block}>

            <div className={styles.blogBox}>
                <div className={styles.imgBox}>
                    <img src={post.FeaturedImage.url} className={styles.img}></img>
                </div>
                <div className={styles.textBox}>
                    <h3>{post.Title}</h3>
                    <div>
                        <p>{post.Date} | {post.post_category.Name}</p>
                    </div>
                    <div className={styles.blogDetails}>
                        <p className={styles.demo}>{post.Content}</p>
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

                {/* <Link href={`/posts/${post.id}`}>
                        <a>
                            <article key={post.id}>
                                <div className={styles.imgBox}>
                                    <img src={post.FeaturedImage.url} className={styles.img}></img>
                                </div>
                                
                                
                                <div className={styles.textBox}>
                                    <h2>{post.Title}</h2>
                                </div>
                            </article>
                            
                        </a>
                </Link> */}

        </div>
    )
}

