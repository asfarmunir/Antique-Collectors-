'use client';

import { useEffect, useState } from "react";
import { Product } from "@/type/types";

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [favoriteProducts, setFavoriteProducts] = useState<number[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const toggleFavorite = (productId: number) => {
    setFavoriteProducts((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId) // Remove from favorites
        : [...prevFavorites, productId] // Add to favorites
    );
  };

  const isFavorite = (productId: number) => favoriteProducts.includes(productId);

  return { products, toggleFavorite, isFavorite };
};

export default useProducts;
