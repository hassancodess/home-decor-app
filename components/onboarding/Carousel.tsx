import React, { PropsWithChildren } from 'react';
import { Square } from 'tamagui';
import { onboardingItems } from '~/data/onboardingItems';
import PinarCarousel, { Props as PinarProps } from 'pinar';
import OnboardingItem from './OnboardingItem';

const renderActiveDot = () => {
  return (
    <Square height={'$0.75'} backgroundColor={'$primary'} width={'$2.5'} borderRadius={'$10'} />
  );
};

const renderDot = () => {
  return (
    <Square
      height={'$0.75'}
      width={'$0.75'}
      backgroundColor={'$primary'}
      borderRadius={'$10'}
      marginHorizontal="$1.5"
      opacity={0.6}
    />
  );
};

const Carousel = React.forwardRef<any, any>(({ children }, ref) => {
  return (
    <PinarCarousel
      // onIndexChanged={() => }
      ref={ref}
      showsControls={false}
      renderActiveDot={renderActiveDot}
      renderDot={renderDot}>
      {children}
    </PinarCarousel>
  );
});

export default Carousel;
