import { Redirect, SplashScreen } from 'expo-router';
import Text from '~/components/shared/Text';
import { useAppContext } from '~/context/AppContext';

const Index = () => {
  const { isFirstTime } = useAppContext();
  console.log('🚀 ~ Index ~ isFirstTime:', isFirstTime);
  // <Text heading=''>asdasd</Text>
  if (isFirstTime != null) {
    SplashScreen.hideAsync();
    return <Redirect href={isFirstTime ? '/onboarding' : '/login'} />;
  }
};
export default Index;