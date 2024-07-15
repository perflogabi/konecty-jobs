import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Product } from "@/app/types/product";
import ProductItem from "@/app/components/ProductItem";



describe("ProductItem Component", () => {
  const product: Product = {
      id: 1,
      name: "Nike",
      description: "Air Force 1 Jester XX Black Sonic Yellow",
      price: 150,
      image: "/images/tenisNike.png",
      category: ""
  };

  it("deve renderizar corretamente as informações do produto", () => {
    const { getByText, getByAltText } = render(<ProductItem product={product} onViewProduct={() => {}} />);
    expect(getByText(product.name)).toBeInTheDocument();
    expect(getByText(product.description)).toBeInTheDocument();
    expect(getByText("R$ 150,00")).toBeInTheDocument();
    expect(getByAltText(product.name)).toBeInTheDocument();
});

it("deve chamar onViewProduct com o produto correto ao clicar no botão 'Ver produto'", () => {
  const onViewProduct = jest.fn();
  const { getByText } = render(<ProductItem product={product} onViewProduct={onViewProduct} />);
  const button = getByText("Ver produto");
  fireEvent.click(button);
  expect(onViewProduct).toHaveBeenCalledWith(product);
});
});
