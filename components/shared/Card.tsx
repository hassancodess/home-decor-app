import { styled, YStack, XStack, getTokens, useTheme } from 'tamagui';
import type { StackProps } from 'tamagui';

/**
 * CARD COMPONENT - COMPREHENSIVE TAMAGUI EXAMPLE
 *
 * This is a reference implementation showing ALL Tamagui patterns:
 * 1. VARIANTS - Style variants (elevated, flat, outlined)
 * 2. SIZE VARIANTS - Responsive sizing
 * 3. RESPONSIVE DESIGN - Media queries with $gtSm, $sm
 * 4. INTERACTIVE STATES - Press, hover, focus
 * 5. THEME AWARENESS - Automatic light/dark support
 * 6. ANIMATIONS - Entry/exit animations
 * 7. TOKENS - Proper use of spacing, color tokens
 *
 * USAGE EXAMPLES:
 *
 * Basic Card:
 *   <Card>
 *     <Text>Card content</Text>
 *   </Card>
 *
 * Variants:
 *   <Card variant="elevated">Elevated card with shadow</Card>
 *   <Card variant="flat">Flat card, no shadow</Card>
 *   <Card variant="outlined">Card with border</Card>
 *
 * Responsive padding (small padding on mobile, large on desktop):
 *   <Card padding="$3" $gtSm={{ padding: '$6' }}>
 *     Responsive card
 *   </Card>
 *
 * Interactive/pressable card:
 *   <Card pressable onPress={() => console.log('Pressed')}>
 *     Click me!
 *   </Card>
 *
 * With animation:
 *   <Card animated>
 *     Animates in with fade
 *   </Card>
 *
 * Responsive width (full width on mobile, fixed on desktop):
 *   <Card width="100%" $gtSm={{ width: 400 }}>
 *     Content
 *   </Card>
 *
 * Custom colors using theme tokens:
 *   <Card backgroundColor="$primary">
 *     Custom background
 *   </Card>
 */
export const Card = styled(YStack, {
  // Base styles - always applied
  backgroundColor: '$bg',
  borderRadius: '$4',
  padding: '$4',
  position: 'relative',
  overflow: 'hidden',

  // VARIANTS SYSTEM
  variants: {
    // Style variants
    variant: {
      elevated: {
        // Shadow for elevated appearance
        shadowColor: '$shadowColor',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,

        // Theme-aware shadow
        '$theme-dark': {
          shadowOpacity: 0.3,
        },
      },

      flat: {
        // No shadow, simple flat appearance
        shadowColor: 'transparent',
        elevation: 0,
      },

      outlined: {
        // Border instead of shadow
        borderWidth: 1,
        borderColor: '$borderColor',
        shadowColor: 'transparent',
        elevation: 0,

        // Stronger border in dark mode
        '$theme-dark': {
          borderColor: '$color',
          borderOpacity: 0.2,
        },
      },
    },

    // Size variants for consistent sizing
    size: {
      small: {
        padding: '$2',
        borderRadius: '$2',
        gap: '$2',
      },
      medium: {
        padding: '$4',
        borderRadius: '$4',
        gap: '$3',
      },
      large: {
        padding: '$6',
        borderRadius: '$6',
        gap: '$4',
      },
    },

    // Pressable variant - makes card interactive
    pressable: {
      true: {
        cursor: 'pointer',

        // INTERACTIVE STATES
        hoverStyle: {
          scale: 1.02,
          shadowOpacity: 0.15,
          borderColor: '$primary',
        },

        pressStyle: {
          scale: 0.98,
          opacity: 0.9,
        },

        focusStyle: {
          borderColor: '$primary',
          borderWidth: 2,
        },
      },
    },

    // Animated variant - entry animations
    animated: {
      true: {
        animation: 'quick',
        enterStyle: {
          opacity: 0,
          scale: 0.95,
          y: 10,
        },
        exitStyle: {
          opacity: 0,
          scale: 0.95,
          y: -10,
        },
      },
    },

    // Full width variant
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  } as const,

  // Default variant values
  defaultVariants: {
    variant: 'elevated',
    size: 'medium',
  },
});

/**
 * CARD HEADER - Specialized component for card headers
 *
 * USAGE:
 *   <Card>
 *     <CardHeader>
 *       <Text variant="heading">Title</Text>
 *       <Text variant="sub-heading">Subtitle</Text>
 *     </CardHeader>
 *   </Card>
 */
export const CardHeader = styled(YStack, {
  gap: '$2',
  marginBottom: '$3',

  // RESPONSIVE: Adjust spacing on larger screens
  $gtSm: {
    gap: '$3',
    marginBottom: '$4',
  },
});

/**
 * CARD CONTENT - Main content area with consistent spacing
 */
export const CardContent = styled(YStack, {
  gap: '$3',
  flex: 1,

  // RESPONSIVE: More spacing on larger screens
  $gtSm: {
    gap: '$4',
  },
});

/**
 * CARD FOOTER - Footer with actions/buttons
 *
 * USAGE:
 *   <Card>
 *     <CardContent>...</CardContent>
 *     <CardFooter>
 *       <Button>Action</Button>
 *     </CardFooter>
 *   </Card>
 */
export const CardFooter = styled(XStack, {
  gap: '$2',
  marginTop: '$3',
  justifyContent: 'flex-end',
  alignItems: 'center',

  // RESPONSIVE: Stack vertically on small screens
  $sm: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: '$2',
  },

  // Horizontal on larger screens
  $gtSm: {
    flexDirection: 'row',
    gap: '$3',
  },
});

/**
 * EXAMPLE: Complete Card with all features
 *
 * This shows how to compose all card components together:
 *
 * <Card
 *   variant="elevated"
 *   pressable
 *   animated
 *   onPress={handlePress}
 *   padding="$3"
 *   $gtSm={{ padding: '$5' }}
 * >
 *   <CardHeader>
 *     <Text variant="heading">Product Name</Text>
 *     <Text variant="sub-heading">$99.99</Text>
 *   </CardHeader>
 *
 *   <CardContent>
 *     <Image source={...} />
 *     <Text>Product description goes here...</Text>
 *   </CardContent>
 *
 *   <CardFooter>
 *     <Button variant="ghost">Details</Button>
 *     <Button variant="primary">Add to Cart</Button>
 *   </CardFooter>
 * </Card>
 */

export default Card;
