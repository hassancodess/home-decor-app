import { Redirect, SplashScreen } from 'expo-router';
import { useAppContext } from '~/context/AppContext';

const Index = () => {
  const { isFirstTime } = useAppContext();
  console.log('🚀 ~ Index ~ isFirstTime:', isFirstTime);
  if (isFirstTime != null) {
    SplashScreen.hideAsync();
    return <Redirect href={isFirstTime ? '/onboarding' : '/login'} />;
  }
};
export default Index;
