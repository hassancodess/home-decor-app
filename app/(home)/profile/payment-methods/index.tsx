import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Group, Spacer } from 'tamagui';
import { Link } from 'expo-router';
import Button from '~/components/shared/Button';

const PaymentMethodsPage = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text>Profile Page</Text>
      <Spacer size="$4" />
      <Group gap="$5">
        <Link href={'/(home)/profile/payment-methods/add-card'} asChild>
          <Button>Add Card</Button>
        </Link>
      </Group>
    </View>
  );
};

export default PaymentMethodsPage;

const styles = StyleSheet.create({});
