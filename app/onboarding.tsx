import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XStack, YStack, Text } from 'tamagui';
import { onboardingItems } from '~/data/onboardingItems';
import { ChevronRight } from '@tamagui/lucide-icons';
import OnboardingItem from '~/components/onboarding/OnboardingItem';
import Carousel from '~/components/onboarding/Carousel';
import { useRouter } from 'expo-router';
import { useAppContext } from '~/context/AppContext';
import Button from '~/components/shared/Button';
import PinarCarousel from 'pinar';

const Page = () => {
  const carouselRef = useRef<PinarCarousel | null>(null);
  const { setIsFirstTime } = useAppContext();

  const router = useRouter();
  const [buttonTitle, setButtonTitle] = useState<string>('Next');

  const navigateToLoginScreen = async () => {
    await setIsFirstTime();
    router.replace('/login');
  };

  const handleNextPress = () => {
    carouselRef.current?.scrollToNext();
    if (buttonTitle == 'Get Started') {
      navigateToLoginScreen();
    }
  };

  const handleCarouselIndexChange = ({ index, total }: { index: number; total: number }) => {
    console.log('🚀 ~ handleCarouselIndexChange ~ index, total:', index, total);
    if (index == total - 1) {
      setButtonTitle('Get Started');
    }
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
          <Carousel ref={carouselRef} onIndexChaged={handleCarouselIndexChange}>
            {onboardingItems.map((item, index) => (
              <OnboardingItem item={item} key={index} />
            ))}
          </Carousel>
        </YStack>
        {buttonTitle == 'Next' && (
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
        )}
        <Button onPress={handleNextPress}>{buttonTitle}</Button>
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
