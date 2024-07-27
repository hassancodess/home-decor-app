import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import { YStack } from 'tamagui';
import Text from '../shared/Text';

export const NoInternetToast = () => {
  const { width } = useWindowDimensions();
  const netInfo = useNetInfo();
  console.log('🚀 ~ NoInternetToast ~ netInfo:', netInfo);
  if (!netInfo.isConnected) {
    return (
      <YStack
        position="absolute"
        backgroundColor={'$primary'}
        height={'$5'}
        width={width}
        bottom={0}
        justifyContent="center"
        alignItems="center"
        flexDirection="row">
        <Text variant="titleSmall" fontSize={'$4'}>
          No Internet Connection
        </Text>
      </YStack>
    );
  }
  return null;
};
