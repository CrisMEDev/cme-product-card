import { useState } from 'react';

import { Product, ProductInCart } from '../interfaces/interfaces';


export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {

        setShoppingCart(prevShoppingCart => {

            if (count === 0) {
                const { [product.id]: toDelete, ...rest } = prevShoppingCart;
                return {
                    ...rest
                }
            }

            return {
                ...prevShoppingCart,
                [product.id]: {
                    ...product, // El product en spread va primero, ya que JS sobreescribe siempre el
                                // último valor que se define
                    count
                }
            }
        });
    }

    return {
        shoppingCart,

        onProductCountChange
    }
}
