import styles from '../styles/ProductGallery.module.css';
import ProductBlock from '../components/ProductBlock.js'
import PageTitle from '../components/pageTitle.js'
import React from "react";
import CTAButton from '../components/CTAButton.js';

export default function ProductGallery({ products }) {

    return (
        
        <div className={styles.container}>
            <div className={styles.main}>
                <PageTitle title="Latest Products" />
                <div className={styles.productsGrid}>
                    {products.slice(-8).reverse().map((product) => (
                        <ProductBlock key={product.id} product={product} />
                        
                    ))}
                </div>
                <CTAButton href="/products">
                    view all products
                    </CTAButton>
            </div>
        </div>
    )
}