import { Text as _Text, styled } from 'tamagui';

const Text = styled(_Text, {
  color: '$black',
  fontWeight: '$2',
  fontSize: '$4',
  variants: {
    variant: {
      heading: {
        fontSize: '$8',
        fontWeight: '$4',
      },
      'sub-heading': {
        fontWeight: '$1',
      },
      'input-title': {
        fontSize: '$5',
      },
      titleSmall: {
        fontWeight: '$3',
      },
      error: {
        color: '$accent',
        fontWeight: '$3',
        fontSize: '$3',
      },
    },

    centered: {
      true: {
        textAlign: 'center',
      },
    },
  } as const,
});
export default Text;
