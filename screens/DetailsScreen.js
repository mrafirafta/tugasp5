import React from 'react';
import { Box, Text, Button, VStack } from 'native-base';

export default function DetailsScreen({ navigation }) {
  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg="primary.50">
      <VStack space={4} alignItems="center">
        <Text fontSize="lg" fontFamily="heading">Details Screen</Text>
        <Button onPress={() => navigation.goBack()} size="lg" bg="primary.400">
          Go Back
        </Button>
      </VStack>
    </Box>
  );
}
