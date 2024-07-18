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
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        // headerSt
      }}>
      <Stack.Screen name="login" options={{ title: 'Login' }} />
      <Stack.Screen name="register" options={{ title: 'Create Account' }} />
      <Stack.Screen
        name="(reset-password)"
        options={{
          title: 'Forgot Password',
          presentation: 'modal',
          headerStyle: { backgroundColor: theme.bg.val },
          headerShown: false,
          // head
        }}
      />
      {/* <Stack.Screen
        name="forgot-password"
        options={{
          title: 'Forgot Password',
          presentation: 'modal',
          headerStyle: {},
        }}
      />
      <Stack.Screen
        name="set-password"
        options={{ title: 'Set Password', presentation: 'modal' }}
      /> */}
    </Stack>
  );
}
