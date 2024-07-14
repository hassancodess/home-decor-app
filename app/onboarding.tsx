import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, XStack, YStack, Text } from 'tamagui';
import { onboardingItems } from '~/data/onboardingItems';
import { ChevronRight } from '@tamagui/lucide-icons';
import OnboardingItem from '~/components/onboarding/OnboardingItem';
import Carousel from '~/components/onboarding/Carousel';
import { useRouter } from 'expo-router';
// import PinarCarousel from 'pinar';
// PinarCarousel.
const Page = () => {
  const carouselRef = useRef<any>();
  const router = useRouter();
  const [buttonTitle, setButtonTitle] = useState<string>('Next');

  const navigateToLoginScreen = () => {
    router.replace('/login');
  };

  const handleNextPress = () => {
    carouselRef.current.scrollToNext();
    if (carouselRef.current.state.activePageIndex === carouselRef.current.state.total - 2)
      setButtonTitle('Get Started');
    if (carouselRef.current.state.activePageIndex === carouselRef.current.state.total - 1)
      navigateToLoginScreen();
  };

  return (
    <SafeAreaView style={styles.container}>
      <YStack
        flex={1}
        justifyContent="space-between"
        overflow="hidden"
        paddingHorizontal="$4"
        position="relative"
        animation={'lazy'}
        enterStyle={{
          opacity: 0,
        }}>
        <YStack flex={1} marginHorizontal="$-4">
          <Carousel ref={carouselRef}>
            {onboardingItems.map((item, index) => (
              <OnboardingItem item={item} key={index} />
            ))}
          </Carousel>
        </YStack>
        <XStack
          onPress={navigateToLoginScreen}
          position="absolute"
          alignSelf="flex-end"
          paddingHorizontal="$4"
          marginVertical="$4"
          alignItems="center"
          justifyContent="center">
          <Text fontSize={'$5'} color={'$background'}>
            Skip
          </Text>
          <ChevronRight size={'$1'} color={'$background'} />
        </XStack>
        <Button
          onPress={handleNextPress}
          fontWeight={'$3'}
          letterSpacing={'$2'}
          size={'$5'}
          backgroundColor={'$primary'}>
          {buttonTitle}
        </Button>
      </YStack>
    </SafeAreaView>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
