import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Group, Spacer } from 'tamagui';
import Button from '~/components/shared/Button';
import { Link } from 'expo-router';

const ProfilePage = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text>Profile Page</Text>
      <Spacer size="$4" />
      <Group gap="$5">
        <Link href={'/(home)/profile/edit-profile'} asChild>
          <Button>Edit Profile</Button>
        </Link>
        <Link href={'/(home)/profile/settings'} asChild>
          <Button>Settings</Button>
        </Link>
        <Link href={'/(home)/profile/payment-methods'} asChild>
          <Button>Payment Methods</Button>
        </Link>
      </Group>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({});
