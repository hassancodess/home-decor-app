import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { Square } from 'tamagui';
import { onboardingItems } from '~/data/onboardingItems';
import PinarCarousel, { Props } from 'pinar';
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
type ICarouselProps = {
  onIndexChaged: Props['onIndexChanged'];
  children: ReactElement[];
};
const Carousel = React.forwardRef((props: ICarouselProps, ref: React.Ref<PinarCarousel>) => {
  return (
    <PinarCarousel
      onIndexChanged={props.onIndexChaged}
      ref={ref}
      showsControls={false}
      renderActiveDot={renderActiveDot}
      renderDot={renderDot}>
      {props.children}
    </PinarCarousel>
  );
});

export default Carousel;
