import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { Spacer } from 'tamagui';
import Button from '~/components/shared/Button';

const ProductPage = () => {
  const { product } = useLocalSearchParams();
  const navigation = useNavigation();
  const router = useRouter();

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: product });
  }, [navigation]);

  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>ProductPage - {product}</Text>
      <Spacer size="$5" />
      <Button onPress={handleGoBack}>Go Back</Button>
    </View>
  );
};

export default ProductPage;

const styles = StyleSheet.create({});
