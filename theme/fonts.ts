import { createFont } from 'tamagui';
import { config } from '@tamagui/config/v3';

export const poppinsFont = createFont({
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
