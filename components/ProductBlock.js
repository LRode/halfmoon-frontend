import Link from 'next/link'
import styles from '../styles/ProductBlock.module.css';


export default function ProductBlock({ product }) {
    return (
        <Link href={`/products/${product.id}`}>
            <a className={styles.block}>
                <article>
                    {
                        product.Image
                            ? (
                                <img src={product.Image.url} className={styles.productImage} />
                            )
                            : <img src="/productPlaceholder.png" className={styles.productImage} />
                    }
                    <div className={styles.productTextContainer}>
                        <h3 className={styles.productName}>
                            {product.Name}
                        </h3>
                        <div className={styles.productCategory}>
                            {product.category && product.category.Name}
                        </div>
                        <div className={styles.productPrice}>
                            {
                                (product.onSale && product.SalePrice) &&
                                <span className={styles.salePrice}>${Number.parseFloat(product.SalePrice).toFixed(2)}</span>
                            }
                            <span className={styles.originalPrice}>
                                ${product.Price && Number.parseFloat(product.Price).toFixed(2)}
                            </span>
                        </div>
                    </div>
                </article>
            </a>

        </Link>
    )
}
