# Projeto de Catálogo de Produtos

Este projeto consiste em uma aplicação web que exibe uma lista de produtos em uma única página, com funcionalidades básicas de front-end e back-end.

## Funcionalidades

- Listagem de produtos com imagem, descrição e preço.
- Filtragem por categoria.
- Pesquisa por nome do produto.

## Tecnologias Utilizadas

- Front-end: Next.js com Typescript, TailwindCSS.
- Back-end: Node.js (API simples com dados estáticos).
- Testes: Jest para testes unitários.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

- `client/`: Contém o front-end desenvolvido com Next.js.
- `server/`: Contém a API em Node.js.

## Explicação de cada componente

# CategoryFilter
Explicação:

CategoryFilterProps: Define as propriedades esperadas pelo componente, incluindo categories (array de strings com as categorias disponíveis) e setSelectedCategory (função para atualizar a categoria selecionada).

Renderização dos botões: Utiliza o método map para iterar sobre o array categories e renderizar dinamicamente botões para cada categoria. Cada botão tem um evento onClick que chama setSelectedCategory com a categoria correspondente.

Estilo com TailwindCSS: Aplica classes do TailwindCSS (p-2, border, rounded-md, hover:bg-gray-300, duration-300 e duration-200) para estilizar os botões com espaçamento, borda arredondada e efeitos de hover.


# ProductItem
Explicação:

ProductItemProps: Define as propriedades esperadas pelo componente, incluindo product (dados do produto a ser exibido) e onViewProduct (função para lidar com a visualização detalhada do produto).

Exibição da imagem: Utiliza o componente Image do Next.js para renderizar a imagem do produto de forma responsiva e otimizada.

Estilo com TailwindCSS: Aplica classes do TailwindCSS (rounded-lg, w-full, text-xl, text-sm, text-gray-800, text-primary, font-sm, font-bold, p-4, gap-4, flex, items-center, rounded-xl, bg-black, text-white) para estilizar o layout do item do produto, garantindo uma interface limpa e agradável.


# ProductList
Explicação:

ProductListProps: Define as propriedades esperadas pelo componente, incluindo products (array de objetos Product) e onViewProduct (função para lidar com a visualização detalhada de um produto).

Renderização dos produtos: Utiliza um layout de grade com classes do TailwindCSS (grid, grid-cols-1, md:grid-cols-2, lg:grid-cols-3, gap-4) para exibir os produtos em colunas, sendo 1 coluna em dispositivos pequenos, 2 em médios e 3 em grandes.

Componente ProductItem: Renderiza cada item de produto utilizando o componente ProductItem, passando as propriedades product e onViewProduct para cada instância.



# ProductModal
Explicação:

ProductModalProps: Define as propriedades esperadas pelo componente, incluindo product (dados do produto a ser exibido), isOpen (estado do modal) e onClose (função para fechar o modal).

Condicional de renderização: Verifica se o modal deve ser renderizado com base nas props isOpen e product. Se isOpen for falso ou product for nulo, retorna null para não renderizar o modal.

Estilização do modal: Utiliza classes do TailwindCSS (fixed, inset-0, bg-black, bg-opacity-50, flex, justify-center, items-center, bg-white, p-4, rounded-lg, max-w-lg, w-full) para estilizar o modal e o conteúdo interno.


# SearchBar
Explicação:

SearchBarProps: Define as propriedades esperadas pelo componente, incluindo setSearchQuery (função para atualizar a consulta de pesquisa).

Campo de pesquisa: Renderiza um campo de entrada de texto (<input type="text">) com um placeholder ("Pesquisar produtos..."). Quando o usuário digita no campo, o evento onChange é acionado para atualizar o estado da consulta de pesquisa através da função setSearchQuery.

Estilo com TailwindCSS: Aplica classes do TailwindCSS (w-full, p-2, border, rounded-md, mb-4) para estilizar o campo de entrada com largura total, espaçamento interno, borda arredondada e margem inferior.



## Executando o Projeto Localmente
Front-end (Next.js)
Na pasta client/, execute o seguinte comando:

bash
Copy code
npm run dev
Abra o navegador e acesse http://localhost:3000 para visualizar a aplicação.

Back-end (Node.js)
Na pasta server/, execute o seguinte comando:

bash
Copy code
npm start
A API estará disponível em http://localhost:8000.

Testes
Os testes unitários foram implementados utilizando Jest para o front-end e o back-end.

Rodando os Testes
Para rodar os testes do front-end (Next.js), na pasta client/, execute:

Para rodar os testes do back-end (Node.js), na pasta server/, execute:

npm test


