import Link from 'next/link'
import styles from '../styles/ProductBlock.module.css';


export default function ProductBlock({ product }) {
    return (
        <Link href={`/products/${product.id}`}>
            <article className={styles.block}>
                <a>
                    {
                        product.Image
                            ? (
                                <img src={product.Image.url} className={styles.productImage} />
                            )
                            : <img src="/heroImage.jpg" className={styles.productImage} />
                    }
                    <div className={styles.productTextContainer}>
                        <h3 className={styles.productName}>
                            {product.Name}
                        </h3>
                        <div className={styles.productCategory}>
                            {product.category && product.category.Name}
                        </div>
                        <div className={styles.productPrice}>
                            {product.Price}
                        </div>
                    </div>
                </a>
            </article>
        </Link>
    )
}
