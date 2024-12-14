import React from 'react';
import { Box, Image, Text, Button, HStack } from 'native-base';
import { StyleSheet } from 'react-native';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Box style={styles.cardContainer}>
      <Image source={{ uri: product.image }} alt={product.name} style={styles.image} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      <Button
        onPress={() => onAddToCart(product)}
        style={styles.addToCartButton}
        _text={styles.buttonText}
      >
        Add to Cart
      </Button>
    </Box>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 20, // Add space between cards
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    objectFit: 'cover',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  addToCartButton: {
    marginTop: 15,
    backgroundColor: '#0088cc',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ProductCard;
