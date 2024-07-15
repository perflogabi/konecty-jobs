import React from 'react';
import "@testing-library/jest-dom";
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '@/app/components/SearchBar';


describe('SearchBar Component', () => {
  it('deve renderizar corretamente', () => {
    const setSearchQuery = jest.fn(); // Simula a função setSearchQuery

    const { getByPlaceholderText } = render(<SearchBar setSearchQuery={setSearchQuery} />);

    const inputElement = getByPlaceholderText('Pesquisar produtos...') as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
  });

  it('deve chamar setSearchQuery ao digitar no campo de busca', () => {
    const setSearchQuery = jest.fn();

    const { getByPlaceholderText } = render(<SearchBar setSearchQuery={setSearchQuery} />);

    const inputElement = getByPlaceholderText('Pesquisar produtos...') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'novo valor' } });

    expect(setSearchQuery).toHaveBeenCalledWith('novo valor');
  });
});