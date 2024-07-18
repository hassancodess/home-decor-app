import { Stack } from 'expo-router';
import { getTokens, useTheme } from 'tamagui';

export default function Layout() {
  const theme = useTheme();
  const tokens = getTokens();
  return (
    <Stack
      screenOptions={{
        animation: 'simple_push',
        headerStyle: { backgroundColor: theme.bg.val },
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="forgot-password"
        options={{
          title: 'Forgot Password',
        }}
      />
      <Stack.Screen
        name="set-password"
        options={{
          title: 'Set Password',
        }}
      />
    </Stack>
  );
}
