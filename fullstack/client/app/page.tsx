'use client';

import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import CategoryFilter from "./components/CategoryFilter";
import { Product } from "./types/product";
import SearchBar from "./components/SearchBar";
import ProductModal from "./components/ProductModal";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then((data: Product[]) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (!selectedCategory || product.category === selectedCategory)
  );

  const uniqueCategories = Array.from(new Set(products.map((product) => product.category).filter(Boolean)));

  return (
    <div className="container mx-auto p-4">
      <SearchBar setSearchQuery={setSearchQuery} />
      <CategoryFilter categories={uniqueCategories} setSelectedCategory={setSelectedCategory}  />
      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} onViewProduct={handleViewProduct} />
      ) : (
        <p className="text-center text-gray-600">Nenhum produto encontrado.</p>
      )}
      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}

export default Home;