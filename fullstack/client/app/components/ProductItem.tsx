'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "../types/product";
import Image from 'next/image';

type ProductItemProps = {
    product: Product;
    onViewProduct: (product: Product) => void;
  };

const ProductItem = ({ product, onViewProduct }: ProductItemProps) => {
  return (
    <Card>
  <CardContent className="p-3">
    <div className="flex gap-4 flex-col items-center">
      <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
        <Image
          className="rounded-lg w-full"
          src={product.image}
          fill
          style={{ objectFit: 'contain' }}
          alt={product.name}
        />
      </div>
      <h2 className="text-xl mt-1">{product.name}</h2>
      <p className="text-sm text-gray-800">{product.description}</p>

      <div className="flex items-center gap-6 p-4">
        <p className="text-primary font-sm font-bold">
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(Number(product.price))}
        </p>

        <Button onClick={() => onViewProduct(product)} className=' bg-black text-white rounded-xl'>Ver produto</Button>
      </div>
    </div>
  </CardContent>
</Card>
  )
}
 
export default ProductItem;