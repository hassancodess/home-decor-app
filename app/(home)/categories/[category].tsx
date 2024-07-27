import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import { Link, Stack, useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { Group } from 'tamagui';
import Button from '~/components/shared/Button';

const CategoryPage = () => {
  const { category } = useLocalSearchParams();
  const navigation = useNavigation();
  const router = useRouter();
  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: category });
  }, [navigation]);

  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>CategoryPage - {category}</Text>
        <Group gap="$5">
          {/* <Link href={'/products/product-1'} asChild> */}
          <Button onPress={() => router.push('/products/asdadsa')}>Product 1</Button>
          {/* </Link> */}
          <Link href={'/products/product-2'} asChild>
            <Button>Product 2</Button>
          </Link>
          <Link href={'/products/product-3'} asChild>
            <Button>Product 3</Button>
          </Link>
          <Link href={'/products/product-4'} asChild>
            <Button>Product 4</Button>
          </Link>
        </Group>
      </View>
    </>
  );
};

export default CategoryPage;

const styles = StyleSheet.create({});
