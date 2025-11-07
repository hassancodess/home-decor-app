import { Button as _Button, styled } from 'tamagui';

/**
 * ENHANCED BUTTON COMPONENT - TEAM REFERENCE
 *
 * This demonstrates Tamagui best practices:
 * 1. VARIANTS - Different button styles (primary, secondary, outline, ghost)
 * 2. SIZE VARIANTS - Responsive sizing (small, medium, large)
 * 3. INTERACTIVE STATES - Press, hover, focus, disabled states
 * 4. RESPONSIVE DESIGN - Media query support
 * 5. THEME AWARENESS - Uses theme tokens
 *
 * USAGE EXAMPLES:
 *
 * Basic:
 *   <Button>Click Me</Button>
 *
 * Variants:
 *   <Button variant="primary">Primary</Button>
 *   <Button variant="secondary">Secondary</Button>
 *   <Button variant="outline">Outline</Button>
 *   <Button variant="ghost">Ghost</Button>
 *
 * Sizes:
 *   <Button size="small">Small</Button>
 *   <Button size="medium">Medium</Button>
 *   <Button size="large">Large</Button>
 *
 * Responsive (changes size on larger screens):
 *   <Button size="small" $gtSm={{ size: 'large' }}>Responsive</Button>
 *
 * Disabled:
 *   <Button disabled>Disabled</Button>
 *
 * Combine variants and props:
 *   <Button variant="outline" size="large">Large Outline</Button>
 */
const Button = styled(_Button, {
  // Base styles - applied to all buttons
  fontWeight: '$3',
  letterSpacing: '$2',
  borderRadius: '$4',
  cursor: 'pointer',

  // Default appearance
  backgroundColor: '$primary',
  color: '$white',
  borderWidth: 2,
  borderColor: 'transparent',

  // INTERACTIVE STATES - Provides visual feedback
  pressStyle: {
    scale: 0.97,
    opacity: 0.85,
  },

  hoverStyle: {
    backgroundColor: '$accent',
    borderColor: '$accent',
  },

  focusStyle: {
    borderColor: '$primary',
    outlineWidth: 2,
    outlineColor: '$primary',
    outlineStyle: 'solid',
  },

  // Disabled state
  disabledStyle: {
    backgroundColor: '$beige',
    color: '$color',
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  // SIZE VARIANTS - Consistent sizing across app
  variants: {
    size: {
      small: {
        paddingHorizontal: '$3',
        paddingVertical: '$2',
        fontSize: '$3',
        height: 36,
      },
      medium: {
        paddingHorizontal: '$4',
        paddingVertical: '$3',
        fontSize: '$4',
        height: 44,
      },
      large: {
        paddingHorizontal: '$5',
        paddingVertical: '$4',
        fontSize: '$5',
        height: 52,
      },
    },

    // STYLE VARIANTS - Different button appearances
    variant: {
      primary: {
        backgroundColor: '$primary',
        color: '$white',

        hoverStyle: {
          backgroundColor: '$accent',
        },

        pressStyle: {
          backgroundColor: '$accent',
          scale: 0.97,
        },
      },

      secondary: {
        backgroundColor: '$tertiary',
        color: '$black',

        hoverStyle: {
          backgroundColor: '$beige',
        },

        pressStyle: {
          backgroundColor: '$beige',
          scale: 0.97,
        },
      },

      outline: {
        backgroundColor: 'transparent',
        borderColor: '$primary',
        color: '$primary',

        hoverStyle: {
          backgroundColor: '$primary',
          color: '$white',
        },

        pressStyle: {
          backgroundColor: '$primary',
          color: '$white',
          scale: 0.97,
        },
      },

      ghost: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: '$primary',

        hoverStyle: {
          backgroundColor: '$beige',
        },

        pressStyle: {
          backgroundColor: '$beige',
          scale: 0.97,
        },
      },
    },

    // BOOLEAN VARIANT - Full width button
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  } as const,

  // Default variant values
  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
});

export default Button;
