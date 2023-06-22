import { useState, useEffect, useRef } from 'react';

import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}


export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
    
    const [productCounter, setProductCounter] = useState<number>(initialValues?.count || value );
    const isMounted = useRef(false);

    const increaseBy = (value: number = 1) => {
        
        let newValue = Math.max(productCounter + value, 0);
        if ( initialValues?.maxCount ){
            newValue = Math.min(newValue, initialValues.maxCount);
        }

        setProductCounter(newValue);

        // Una vez que cambia el estado nos interesa notificar el cambio
        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setProductCounter(initialValues?.count || value);
    }

    // El isMounted es solo para actualizar el value cuando se requiera
    useEffect(() => {
        if ( !isMounted.current ) return;
        else isMounted.current = true;
        
        setProductCounter( value );
    }, [value]);


    return {
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === productCounter,
        maxCount: initialValues?.maxCount,
        productCounter,

        increaseBy,
        reset
    }
}
