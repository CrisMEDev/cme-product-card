import React, { useContext, CSSProperties } from 'react';

import { ProductContext } from './ProductCard';

import noImg from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
    img?: string;
    className?: string;
    style?: CSSProperties
}

export const ProductImage = ({ img, className, style }: Props) => {

    const { product } = useContext(ProductContext);
    let imgToShow: string;

    if (img)              imgToShow = img;
    else if (product.img) imgToShow = product.img;
    else                  imgToShow = noImg;

    return (
        <img
        style={style}
            className={`${styles.productImg} ${className}`}
            src={imgToShow}
            alt='Product' />
    );
}