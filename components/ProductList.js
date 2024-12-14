// components/ProductList.js
import React from 'react';
import { ScrollView, Box, Text } from 'native-base';
import ProductCard from './ProductCard';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <Box padding={4}>
      <Text fontSize="xl" fontWeight="bold" marginBottom={4}>Shop Our Products</Text>
      <ScrollView horizontal>
        {products.map((product) => (
          <Box key={product.id} marginRight={4}>
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </Box>
        ))}
      </ScrollView>
    </Box>
  );
};

export default ProductList;
