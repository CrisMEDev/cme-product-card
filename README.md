# Create product card

Este es un paquete para hacer prueba de despliegue a NPM

## Ejemplo

Use el siguiente ejemplo para probar el paquete

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'do-product-cart';
```

```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10
    }}
>
    {
        ({reset, count, isMaxCountReached, maxCount, increaseBy }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```