import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Group, Spacer } from 'tamagui';
import { Link } from 'expo-router';
import Button from '~/components/shared/Button';

const SettingsPage = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text>Profile Page</Text>
      <Spacer size="$4" />
      <Group gap="$5">
        <Link href={'/(home)/profile/settings/notification-settings'} asChild>
          <Button>Notification Settings</Button>
        </Link>
        <Link href={'/(home)/profile/settings/password-settings'} asChild>
          <Button>Password Settings</Button>
        </Link>
      </Group>
    </View>
  );
};

export default SettingsPage;

const styles = StyleSheet.create({});
