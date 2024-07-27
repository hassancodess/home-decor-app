import { SplashScreen, Stack } from 'expo-router';
import { TamaguiProvider } from 'tamagui';
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import tamaguiConfig from '~/tamagui.config';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { AppProvider } from '~/context/AppContext';
import { NoInternetToast } from '~/components/NoInternet';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Poppins: Poppins_400Regular,
    PoppinsLight: Poppins_300Light,
    PoppinsMedium: Poppins_500Medium,
    PoppinsSemiBold: Poppins_600SemiBold,
    PoppinsBold: Poppins_700Bold,
  });

  if (!loaded) return null;

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <AppProvider>
          <Stack screenOptions={{ headerShown: false, animation: 'fade' }}>
            <Stack.Screen name="onboarding" />
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(home)" />
            <Stack.Screen name="orders" />
            <Stack.Screen name="products" />
            <Stack.Screen name="search" />
          </Stack>
          <NoInternetToast />
        </AppProvider>
      </ThemeProvider>
    </TamaguiProvider>
  );
}
