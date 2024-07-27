import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Group, Spacer } from 'tamagui';
import { Link } from 'expo-router';
import Button from '~/components/shared/Button';

const CategoriesPage = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text>Categories Page</Text>
      <Spacer size="$4" />
      <Group gap="$5">
        <Link href={'/(home)/categories/123123'} asChild>
          <Button>Category </Button>
        </Link>
      </Group>
    </View>
  );
};

export default CategoriesPage;

const styles = StyleSheet.create({});
