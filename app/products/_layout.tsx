import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerBackButtonMenuEnabled: true,
        headerBackVisible:true
      }}
    />
  );
}
