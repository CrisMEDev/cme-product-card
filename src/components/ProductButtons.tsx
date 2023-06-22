import React, { useContext, CSSProperties, useCallback } from 'react';

import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface Props {
    className?: string;
    style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {

    const { increaseBy, productCounter, maxCount } = useContext(ProductContext);

    const isMaxReached = useCallback(
        () => !!maxCount && productCounter === maxCount,
        [productCounter, maxCount],
    )


    return (
        <div
            className={`${styles.buttonsContainer} ${className}`}
            style={style}
        >
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
                -
            </button>
            <div className={styles.countLabel}>{productCounter}</div>
            <button className={`${styles.buttonAdd} ${ isMaxReached() && styles.disabled}`} onClick={() => increaseBy(1)}>
                +
            </button>
        </div>
    );
}