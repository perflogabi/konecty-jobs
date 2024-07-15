import React from 'react';
import "@testing-library/jest-dom";
import { render, fireEvent } from '@testing-library/react';
import CategoryFilter from '@/app/components/CategoryFilter';

describe('CategoryFilter Component', () => {
  it('deve renderizar corretamente com categorias', () => {
    const categories = ['Eletrônicos', 'Roupas', 'Livros'];
    const setSelectedCategory = jest.fn();

    const { getByText } = render(<CategoryFilter categories={categories} setSelectedCategory={setSelectedCategory} />);

    expect(getByText('Todas')).toBeInTheDocument();
    categories.forEach((category) => {
      expect(getByText(category)).toBeInTheDocument();
    });
  });

  it('deve chamar setSelectedCategory com a categoria correta ao clicar nos botões', () => {
    const categories = ['Nike', 'New Balance', 'Asics', 'Converse'];
    const setSelectedCategory = jest.fn();

    const { getByText } = render(<CategoryFilter categories={categories} setSelectedCategory={setSelectedCategory} />);

   
    fireEvent.click(getByText('Todas'));
    expect(setSelectedCategory).toHaveBeenCalledWith('');

   
    categories.forEach((category) => {
      fireEvent.click(getByText(category));
      expect(setSelectedCategory).toHaveBeenCalledWith(category);
    });
  });
});
