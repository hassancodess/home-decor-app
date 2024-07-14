import React from 'react';
import { TOnboardingItem } from '~/types';
import { Group, H2, Image, Spacer, Text, YStack } from 'tamagui';

const OnboardingItem = ({ item }: { item: TOnboardingItem }) => {
  return (
    <YStack flex={1} gap={'$4'}>
      <Image src={item.image} objectFit="cover" width={'100%'} height={'70%'} />
      <Spacer size="$1" />
      <Group marginHorizontal="$4" gap="$3">
        <H2 color={'$primary'} textAlign="center">
          {item.heading}
        </H2>
        <Text textAlign="center">{item.description}</Text>
      </Group>
    </YStack>
  );
};

export default OnboardingItem;
