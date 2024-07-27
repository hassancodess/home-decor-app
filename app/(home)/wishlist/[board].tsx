import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const WishlistBoard = () => {
  const { board } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>WishlistBoard - {board}</Text>
    </View>
  );
};

export default WishlistBoard;

const styles = StyleSheet.create({});
