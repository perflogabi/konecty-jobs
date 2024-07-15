import Home from "@/app/page";
import fetchMock from 'fetch-mock';
import '@testing-library/jest-dom';
import { render, fireEvent, waitFor, act, queryByText } from "@testing-library/react";


describe('Home Page', () => {
    beforeEach(() => {
      fetchMock.resetMocks();
    });
  
    it('deve renderizar corretamente a página inicial com produtos', async () => {
      fetchMock.mockResponseOnce(JSON.stringify([
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
      ]));
  
      const { getByText } = render(<Home />);
  
      await waitFor(() => {
        expect(getByText('Nike')).toBeInTheDocument();
        expect(getByText('Converse')).toBeInTheDocument();
        expect(getByText('New Balance')).toBeInTheDocument();
        expect(getByText('Asics')).toBeInTheDocument();
      });
    });
  
    it('deve exibir mensagem de "Nenhum produto encontrado" quando a busca não encontrar resultados', async () => {
      fetchMock.mockResponseOnce(JSON.stringify([]));
  
      const { getByText, getByPlaceholderText } = render(<Home />);
      const searchInput = getByPlaceholderText('Buscar produtos...');
  
      fireEvent.change(searchInput, { target: { value: 'Produto Inexistente' } });
  
      await waitFor(() => {
        expect(getByText('Nenhum produto encontrado.')).toBeInTheDocument();
      });
    });
  
    it('deve abrir o modal ao clicar em "Ver produto" e fechar ao clicar em "Fechar"', async () => {
      fetchMock.mockResponseOnce(JSON.stringify([
        {
          id: 1,
          name: 'Produto Teste 1',
          description: 'Descrição do Produto Teste 1',
          price: 100,
          category: 'Categoria A',
          image: '/images/produto1.png',
        },
      ]));
  
      const { getByText, queryByText } = render(<Home />);
  
      await waitFor(() => {
        expect(getByText('Produto Teste 1')).toBeInTheDocument();
      });
  
      fireEvent.click(getByText('Ver produto'));
  
      await waitFor(() => {
        expect(getByText('Descrição do Produto Teste 1')).toBeInTheDocument();
      });
  
      fireEvent.click(getByText('Fechar'));
  
      await waitFor(() => {
        expect(queryByText('Descrição do Produto Teste 1')).not.toBeInTheDocument();
      });
    });
  });