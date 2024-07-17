import { Stack } from 'expo-router';
import { getTokens, useTheme } from 'tamagui';

export default function Layout() {
  const theme = useTheme();
  const tokens = getTokens();
  return (
    <Stack
      screenOptions={{
        animation: 'simple_push',
        headerTitleStyle: {
          color: theme.primary.val,
          fontSize: tokens.size.$1.val,
        },
        headerStyle: {
          backgroundColor: 'transparent',
        },
      }}>
      <Stack.Screen name="login" options={{ title: 'Login' }} />
      <Stack.Screen name="register" options={{ title: 'Create Account' }} />
    </Stack>
  );
}
