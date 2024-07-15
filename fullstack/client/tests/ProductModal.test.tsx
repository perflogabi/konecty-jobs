import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Product } from "@/app/types/product";
import ProductModal from "@/app/components/ProductModal";

describe("ProductModal Component", () => {
  const product: Product = {
      id: 1,
      name: "Nike",
      description: "Air Force 1 Jester XX Black Sonic Yellow",
      price: 150,
      image: "/images/tenisNike.png",
      category: ""
  };

  it("deve renderizar corretamente quando aberto", () => {
    const onClose = jest.fn();
    const { getByText, getByAltText } = render(<ProductModal product={product} isOpen={true} onClose={onClose} />);
    expect(getByText(product.name)).toBeInTheDocument();
    expect(getByText(product.description)).toBeInTheDocument();
    expect(getByText("R$ 150,00")).toBeInTheDocument();
    expect(getByAltText(product.name)).toBeInTheDocument();
  });

  it("não deve renderizar quando não estiver aberto", () => {
    const onClose = jest.fn();
    const { queryByText } = render(<ProductModal product={product} isOpen={false} onClose={onClose} />);
    expect(queryByText(product.name)).not.toBeInTheDocument();
  });

  it("deve chamar onClose ao clicar no botão 'Fechar'", () => {
    const onClose = jest.fn();
    const { getByText } = render(<ProductModal product={product} isOpen={true} onClose={onClose} />);
    const closeButton = getByText("Fechar");
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });
});
