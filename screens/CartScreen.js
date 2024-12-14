import React, { useState, useEffect } from 'react';
import { Box, Text, Button, HStack, ScrollView } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = ({ route }) => {
  const [cartItems, setCartItems] = useState(route.params.cartItems || []);
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleRemoveFromCart = (productId) => {
   
    const indexToRemove = cartItems.findIndex(item => item.id === productId);
    if (indexToRemove !== -1) {
      const newCartItems = [...cartItems];
      newCartItems.splice(indexToRemove, 1); 
      setCartItems(newCartItems);
    }
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
  };

  useEffect(() => {
    const saveCartToStorage = async () => {
      try {
        
        await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
      } catch (e) {
        console.error("Failed to save cart to AsyncStorage", e);
      }
    };

    
    if (cartItems.length > 0) {
      saveCartToStorage();
    }
  }, [cartItems]);

  useEffect(() => {
    const loadCartFromStorage = async () => {
      try {
        const savedCart = await AsyncStorage.getItem('cartItems');
        if (savedCart) {
          setCartItems(JSON.parse(savedCart));
        }
      } catch (e) {
        console.error("Failed to load cart from AsyncStorage", e);
      }
    };
    loadCartFromStorage();
  }, []);

  if (!cartItems) {
    return null; 
  }

  return (
    <Box flex={1} padding={4}>
      <Text fontSize="xl" fontWeight="bold" marginBottom={4}>Your Cart</Text>
      <ScrollView>
        {cartItems.length === 0 ? (
          <Text>No items in cart</Text>
        ) : (
          cartItems.map((item, index) => (
            <HStack key={index} justifyContent="space-between" alignItems="center" marginBottom={4}>
              <Text>{item.name}</Text>
              <Text>${item.price}</Text>
              <Button onPress={() => handleRemoveFromCart(item.id)} size="xs" colorScheme="danger">
                Remove
              </Button>
            </HStack>
          ))
        )}
      </ScrollView>
      <HStack justifyContent="space-between" marginTop={4}>
        <Text fontSize="lg" fontWeight="bold">Total: ${total}</Text>
        <Button onPress={handleCheckout} colorScheme="primary">Checkout</Button>
      </HStack>
    </Box>
  );
};

export default CartScreen;
