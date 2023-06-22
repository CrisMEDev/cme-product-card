import React, { createContext, CSSProperties } from 'react';

import { onChangeArgs, Product, ProductContextProps, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

import { useProduct } from '../hooks';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    // children?: ReactElement | ReactElement[]; // Se puede usar también () => JSX.Element
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    onChange?: (args: onChangeArgs) => void;
    product: Product;
    style?: CSSProperties;
    value?: number;
    initialValues?: InitialValues
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { productCounter, increaseBy, maxCount, isMaxCountReached, reset }
        = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            productCounter,
            product,
            maxCount,
            increaseBy
        }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >

                {children({
                    count: productCounter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,

                    increaseBy,
                    reset
                })}

            </div>
        </Provider>
    )
}

