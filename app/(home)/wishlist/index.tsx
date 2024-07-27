import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Group, Spacer } from 'tamagui';
import { Link } from 'expo-router';
import Button from '~/components/shared/Button';

const WishlistPage = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text>Wishlist Page</Text>
      <Spacer size="$4" />
      <Group gap="$5">
        <Link href={'/(home)/wishlist/123123'} asChild>
          <Button>Wishlist </Button>
        </Link>
        <Link href={'/(home)/wishlist/create-board'} asChild>
          <Button>Create Board </Button>
        </Link>
      </Group>
    </View>
  );
};

export default WishlistPage;

const styles = StyleSheet.create({});
