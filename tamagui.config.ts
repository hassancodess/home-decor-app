import { config } from '@tamagui/config/v3';
import { createFont, createMedia, createTamagui, createTokens } from 'tamagui';

const generateNegativeSizes = (sizes: any) => {
  console.log('sizes', sizes);
  const negativeSizes: any = {};
  Object.keys(sizes).forEach((key, index) => {
    negativeSizes[`-${index + 1}`] = -sizes[key];
  });
  console.log('🚀 ~ generateNegativeSizes ~ negativeSizes:', negativeSizes);
  return negativeSizes;
};

const poppinsFont = createFont({
  family: 'Poppins',
  size: config.fonts.body.size,
  lineHeight: config.fonts.body.lineHeight,
  weight: {
    true: '400',
    1: '300',
    2: '400',
    3: '500',
    4: '600',
    5: '700',
  },
  letterSpacing: config.fonts.body.letterSpacing,
  face: {
    300: { normal: 'PoppinsLight' },
    400: { normal: 'Poppins' },
    500: { normal: 'PoppinsMedium' },
    600: { normal: 'PoppinsSemiBold' },
    700: { normal: 'PoppinsBold' },
  },
});

const tamaguiConfig = createTamagui({
  animations: config.animations,
  tokens: config.tokens,
  defaultFont: 'body',
  fonts: {
    body: poppinsFont,
    heading: poppinsFont,
  },
  themes: {
    light: {
      bg: '#f2f2f2',
      color: '#000000',
      primary: '#F4B5A4',
      accent: '#CC7861',
      tertiary: '#DCBEB6',
      beige: '#FAF0E6',
      background: '#363130',
      white: '#FFFFFF',
      black: '#363130',
    },
    dark: {
      bg: '#111',
      color: '#FFFFFF',
      primary: '#F4B5A4',
      accent: '#CC7861',
      tertiary: '#DCBEB6',
      beige: '#FAF0E6',
      background: '#363130',
      white: '#FFFFFF',
      black: '#363130',
    },
  },
  defaultProps: {
    Button: {
      fontWeight: '$4',
    },
  },
  media: createMedia({
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    short: { maxHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
  disableSSR: true,
  shouldAddPrefersColorThemes: false,
  onlyAllowShorthands: false,
  reactNative: true,
});

type Conf = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
export default tamaguiConfig;
