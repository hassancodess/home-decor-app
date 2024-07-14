import { config } from '@tamagui/config/v3';
import { createMedia, createTamagui } from 'tamagui';
import { poppinsFont, lightTheme, darkTheme } from './theme';

const tamaguiConfig = createTamagui({
  animations: config.animations,
  tokens: config.tokens,
  defaultFont: 'body',
  fonts: {
    body: poppinsFont,
    heading: poppinsFont,
  },
  themes: {
    light: lightTheme,
    dark: darkTheme,
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
