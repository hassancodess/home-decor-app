import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Group, Spacer } from 'tamagui';
import Button from '~/components/shared/Button';
import { Link } from 'expo-router';

const CartPage = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text>CartPage</Text>
      <Spacer size="$4" />
      <Group gap="$5">
        <Link href={'/(home)/cart/checkout'} asChild>
          <Button>Checkout</Button>
        </Link>
        <Link href={'/(home)/cart/track-order'} asChild>
          <Button>Track Order</Button>
        </Link>
        <Link href={'/(home)/cart/complete-order'} asChild>
          <Button>Complete Order</Button>
        </Link>
      </Group>
    </View>
  );
};

export default CartPage;

const styles = StyleSheet.create({});
