'use client';

import { Product } from "../types/product";
import ProductItem from "./ProductItem";

type ProductListProps = {
    products: Product[];
    onViewProduct: (product: Product) => void;
}

const ProductList = ({ products, onViewProduct}: ProductListProps) => {
    return ( 
    <div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
                 <ProductItem key={product.id} product={product} onViewProduct={onViewProduct} />
            ))}
       </div>
    </div> );
}
 
export default ProductList;