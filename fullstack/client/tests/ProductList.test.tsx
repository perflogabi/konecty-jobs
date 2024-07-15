import ProductList from "@/app/components/ProductList";
import { Product } from "@/app/types/product";
import "@testing-library/jest-dom";
import { render, fireEvent } from '@testing-library/react';

describe('ProductList Component', () => {
    const products: Product[] = [
      {
        id: 1,
        name: 'Nike',
        category: 'Nike',
        description: 'Air Force 1 Jester XX Black Sonic Yellow',
        price: 150.00,
        image: '/images/tenisNike.png'
      },
      {
        id: 2,
        name: 'Converse',
        category: 'Converse',
        description: 'Run Star Hike Three Color Unisex',
        price: 200.00,
        image: '/images/tenisConverse.png'
      },
      {
        id: 3,
        name: 'New Balance',
        category: 'New Balance',
        description: 'Air Jordan 1 Retro High Obsidian UNC',
        price: 250.00,
        image: '/images/tenisNB.png'
      },
      {
        id: 4,
        name: 'Asics',
        category: 'Asics',
        description: 'Air Force 1 Shadow Beige Pale Ivory',
        price: 100.00,
        image: '/images/tenisAsics.png'
      }
    ];
  
    const setUp = (props = {}) => {
      const initialProps = {
        products,
        onViewProduct: jest.fn(),
        ...props
      };
      return render(<ProductList {...initialProps} />);
    };
  
    it('deve renderizar corretamente a lista de produtos', () => {
      const { getByText } = setUp();
  
      products.forEach((product) => {
        expect(getByText(product.name)).toBeInTheDocument();
        expect(getByText(product.description)).toBeInTheDocument();
        expect(getByText(`R$ ${product.price.toFixed(2).replace(".", ",")}`)).toBeInTheDocument();
      });
    });
  
    it("deve chamar onViewProduct com o produto correto ao clicar no botão 'Ver produto'", () => {
        const onViewProduct = jest.fn();
        const { getAllByText } = render(<ProductList products={products} onViewProduct={onViewProduct} />);
        const buttons = getAllByText("Ver produto");
        buttons.forEach((button, index) => {
          fireEvent.click(button);
          expect(onViewProduct).toHaveBeenCalledWith(products[index]);
        });
    });
  });