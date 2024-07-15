import { Card, CardContent } from '@/components/ui/card';
import { Product } from '../types/product';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

type ProductModalProps = {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
};

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg max-w-lg w-full">
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
              <p className="text-primary font-sm font-bold">
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(Number(product.price))}
              </p>
              <Button onClick={onClose}>Fechar</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductModal;