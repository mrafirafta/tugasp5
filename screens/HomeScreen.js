import React, { useState } from 'react';
import { Box, Button, Text, ScrollView, VStack, HStack } from 'native-base';
import { StyleSheet } from 'react-native';
import ProductList from '../components/ProductList';
import { useNavigation } from '@react-navigation/native';

const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 19.99, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 39.99, image: 'https://via.placeholder.com/150' },
  // Add more products
];

const HomeScreen = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigation = useNavigation();

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleGoToCart = () => {
    navigation.navigate('Cart', { cartItems });
  };

  return (
    <Box style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <VStack space={4}>
          <Text style={styles.heading}>Shop Our Products</Text>
          <ProductList products={products} onAddToCart={handleAddToCart} />
        </VStack>
      </ScrollView>

      <Button
        onPress={handleGoToCart}
        colorScheme="primary"
        style={styles.cartButton}
        _text={styles.cartButtonText}
      >
        <HStack space={2} alignItems="center">
          <Text style={styles.cartText}>Go to Cart</Text>
          <Text style={styles.cartCount}>({cartItems.length})</Text>
        </HStack>
      </Button>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  scrollContainer: {
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#333',
  },
  cartButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20, // Padding on the sides
    backgroundColor: '#ff8c00', // Bright orange color
    elevation: 5, // Adds shadow on Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  cartButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  cartText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  cartCount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default HomeScreen;
