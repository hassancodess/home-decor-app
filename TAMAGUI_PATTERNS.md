# Tamagui Patterns & Best Practices

This guide provides consistent patterns for using Tamagui in our codebase. Follow these patterns to maintain consistency as the team grows.

## Table of Contents
1. [Variants System](#variants-system)
2. [Responsive Design](#responsive-design)
3. [Theme Usage](#theme-usage)
4. [Interactive States](#interactive-states)
5. [Animations](#animations)
6. [Component Structure](#component-structure)
7. [Common Patterns](#common-patterns)

---

## 1. Variants System

Variants provide different visual styles for components while maintaining consistency.

### Basic Variant Structure

```typescript
import { styled, YStack } from 'tamagui';

const MyComponent = styled(YStack, {
  // Base styles (always applied)
  padding: '$4',
  borderRadius: '$4',

  variants: {
    // Variant name
    variant: {
      // Variant options
      primary: {
        backgroundColor: '$primary',
        color: '$white',
      },
      secondary: {
        backgroundColor: '$secondary',
        color: '$black',
      },
    },

    // Size variants
    size: {
      small: {
        padding: '$2',
        fontSize: '$3',
      },
      large: {
        padding: '$6',
        fontSize: '$5',
      },
    },

    // Boolean variants
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  } as const,

  // Default values
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});
```

### Usage

```typescript
// Uses default variants
<MyComponent>Content</MyComponent>

// Explicit variants
<MyComponent variant="secondary" size="large">
  Content
</MyComponent>

// Boolean variant
<MyComponent fullWidth>
  Content
</MyComponent>

// Combine multiple variants
<MyComponent variant="primary" size="small" fullWidth>
  Content
</MyComponent>
```

### Nested Variant Styles

You can nest interactive states within variants:

```typescript
variants: {
  variant: {
    primary: {
      backgroundColor: '$primary',

      // Nested interactive state
      hoverStyle: {
        backgroundColor: '$accent',
      },

      pressStyle: {
        scale: 0.97,
      },
    },
  },
}
```

---

## 2. Responsive Design

Use media queries to adapt components to different screen sizes.

### Media Queries (configured in tamagui.config.ts)

- `$sm` - Small screens (maxWidth: 860px)
- `$gtSm` - Greater than small (minWidth: 861px)
- `$short` - Short screens (maxHeight: 820px)

### Responsive Props Pattern

```typescript
// Mobile-first approach
<YStack
  // Mobile styles (base)
  padding="$3"
  flexDirection="column"
  gap="$2"

  // Tablet/Desktop styles
  $gtSm={{
    padding: '$6',
    flexDirection: 'row',
    gap: '$4',
  }}
>
  <Text fontSize="$4" $gtSm={{ fontSize: '$6' }}>
    Responsive Text
  </Text>
</YStack>
```

### Responsive Layout Pattern

```typescript
// Stack vertically on mobile, horizontally on desktop
<XStack
  flexDirection="column"
  $gtSm={{ flexDirection: 'row' }}
  gap="$3"
>
  <Card flex={1}>Item 1</Card>
  <Card flex={1}>Item 2</Card>
  <Card flex={1}>Item 3</Card>
</XStack>
```

### Responsive Component Visibility

```typescript
// Hide on mobile, show on desktop
<YStack display="none" $gtSm={{ display: 'flex' }}>
  Desktop only content
</YStack>

// Show on mobile, hide on desktop
<YStack display="flex" $gtSm={{ display: 'none' }}>
  Mobile only content
</YStack>
```

### Responsive in Variants

```typescript
const Card = styled(YStack, {
  variants: {
    size: {
      responsive: {
        // Base (mobile)
        padding: '$3',

        // Desktop
        $gtSm: {
          padding: '$6',
        },
      },
    },
  },
});
```

---

## 3. Theme Usage

Our app supports light and dark themes. Always use theme tokens for colors.

### Available Theme Tokens

```typescript
// From theme/themes.ts
{
  bg: 'background color',
  color: 'text color',
  primary: '#F4B5A4',
  accent: '#CC7861',
  tertiary: '#DCBEB6',
  beige: '#FAF0E6',
  background: '#363130',
  white: '#FFFFFF',
  black: '#363130', // or white in dark mode
}
```

### Using Theme Tokens

```typescript
// ✅ CORRECT - Uses theme tokens
<YStack backgroundColor="$bg" borderColor="$primary">
  <Text color="$color">Text adapts to theme</Text>
</YStack>

// ❌ WRONG - Hard-coded colors
<YStack backgroundColor="#f2f2f2">
  <Text color="#000000">Won't adapt to dark mode</Text>
</YStack>
```

### Accessing Theme in Code

```typescript
import { useTheme, getTokens } from 'tamagui';

function MyComponent() {
  const theme = useTheme();
  const tokens = getTokens();

  // Access theme colors
  const primaryColor = theme.primary.val;

  // Access tokens
  const spacing = tokens.space.$4.val;

  return (
    <YStack backgroundColor={theme.bg}>
      <Text color={theme.color}>Themed text</Text>
    </YStack>
  );
}
```

### Theme-Specific Styles

```typescript
const Card = styled(YStack, {
  backgroundColor: '$bg',

  // Override in dark theme
  '$theme-dark': {
    borderColor: '$primary',
    shadowOpacity: 0.3,
  },

  // Override in light theme
  '$theme-light': {
    borderColor: '$tertiary',
    shadowOpacity: 0.1,
  },
});
```

---

## 4. Interactive States

Always provide visual feedback for interactive elements.

### Available Interactive States

- `pressStyle` - When pressed/tapped
- `hoverStyle` - When hovered (web/desktop)
- `focusStyle` - When focused (accessibility)
- `disabledStyle` - When disabled

### Basic Interactive Pattern

```typescript
const Button = styled(_Button, {
  backgroundColor: '$primary',

  // Press feedback
  pressStyle: {
    scale: 0.97,
    opacity: 0.85,
  },

  // Hover feedback
  hoverStyle: {
    backgroundColor: '$accent',
    borderColor: '$accent',
  },

  // Focus for accessibility
  focusStyle: {
    borderColor: '$primary',
    borderWidth: 2,
  },

  // Disabled state
  disabledStyle: {
    backgroundColor: '$beige',
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});
```

### Interactive Card Pattern

```typescript
<Card
  pressable // Enable press variant
  cursor="pointer"
  onPress={() => navigation.navigate('Details')}

  hoverStyle={{
    scale: 1.02,
    shadowOpacity: 0.2,
  }}

  pressStyle={{
    scale: 0.98,
  }}
>
  <Text>Clickable card</Text>
</Card>
```

### Combining States with Variants

```typescript
variants: {
  variant: {
    primary: {
      backgroundColor: '$primary',

      // Variant-specific hover
      hoverStyle: {
        backgroundColor: '$accent',
      },
    },
    outline: {
      backgroundColor: 'transparent',
      borderColor: '$primary',

      // Different hover for outline
      hoverStyle: {
        backgroundColor: '$primary',
        color: '$white',
      },
    },
  },
}
```

---

## 5. Animations

Tamagui provides smooth, performant animations.

### Basic Animation

```typescript
<YStack
  animation="quick" // or "bouncy", "lazy"
  enterStyle={{ opacity: 0, y: -10 }}
  exitStyle={{ opacity: 0, y: 10 }}
>
  <Text>I fade and slide in!</Text>
</YStack>
```

### Animation Types

```typescript
// Quick (fast, smooth)
animation="quick"

// Bouncy (spring-like)
animation="bouncy"

// Lazy (slow, gentle)
animation="lazy"
```

### Animated Interactions

```typescript
<YStack
  animation="quick"
  scale={1}
  pressStyle={{
    scale: 0.95,
  }}
  hoverStyle={{
    scale: 1.05,
  }}
>
  <Text>Press me!</Text>
</YStack>
```

### Conditional Animation

```typescript
function AnimatedBox({ isVisible }) {
  return (
    <YStack
      animation="quick"
      opacity={isVisible ? 1 : 0}
      y={isVisible ? 0 : -20}
    >
      <Text>Animated content</Text>
    </YStack>
  );
}
```

### List Item Animation

```typescript
// Animate list items with delay
{items.map((item, index) => (
  <YStack
    key={item.id}
    animation="quick"
    enterStyle={{ opacity: 0, x: -20 }}
    animateOnly={['opacity', 'transform']}
    delay={index * 50} // Stagger animation
  >
    <Text>{item.name}</Text>
  </YStack>
))}
```

---

## 6. Component Structure

Follow this structure for consistent, maintainable components.

### File Structure

```
components/
├── shared/           # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Text.tsx
│   └── Input.tsx
├── layout/          # Layout components
│   ├── Container.tsx
│   └── Section.tsx
└── features/        # Feature-specific components
    ├── ProductCard.tsx
    └── CartItem.tsx
```

### Component Template

```typescript
import { styled, YStack } from 'tamagui';
import type { YStackProps } from 'tamagui';

/**
 * COMPONENT_NAME - Brief description
 *
 * Purpose and usage information.
 *
 * USAGE EXAMPLES:
 *   <ComponentName>Basic usage</ComponentName>
 *   <ComponentName variant="special">With variant</ComponentName>
 */

// 1. Define base component with styled()
export const ComponentName = styled(YStack, {
  // 2. Base styles
  padding: '$4',
  backgroundColor: '$bg',

  // 3. Interactive states
  pressStyle: {
    opacity: 0.8,
  },

  // 4. Variants
  variants: {
    variant: {
      default: {},
      special: {},
    },
  } as const,

  // 5. Default variants
  defaultVariants: {
    variant: 'default',
  },
});

// 6. Export with type
export type ComponentNameProps = YStackProps & {
  variant?: 'default' | 'special';
};

export default ComponentName;
```

---

## 7. Common Patterns

### Layout Container Pattern

```typescript
// Consistent page container with responsive padding
<YStack
  flex={1}
  backgroundColor="$bg"
  padding="$4"
  $gtSm={{ padding: '$6' }}
>
  {/* Page content */}
</YStack>
```

### Spacing Pattern

```typescript
// Use Spacer for flexible spacing
<YStack>
  <Text>First</Text>
  <Spacer size="$4" />
  <Text>Second</Text>
</YStack>

// Or use gap for consistent spacing
<YStack gap="$4">
  <Text>First</Text>
  <Text>Second</Text>
  <Text>Third</Text>
</YStack>
```

### Form Pattern

```typescript
<YStack gap="$4" padding="$4">
  <YStack gap="$2">
    <Text variant="input-title">Email</Text>
    <Input
      placeholder="Enter email"
      keyboardType="email-address"
      autoCapitalize="none"
    />
  </YStack>

  <YStack gap="$2">
    <Text variant="input-title">Password</Text>
    <Input
      placeholder="Enter password"
      secureTextEntry
    />
  </YStack>

  <Spacer size="$2" />

  <Button fullWidth>Submit</Button>
</YStack>
```

### Grid Pattern

```typescript
// Responsive grid (1 column mobile, 2 columns desktop)
<XStack
  flexWrap="wrap"
  gap="$4"
>
  <Card
    width="100%"
    $gtSm={{ width: 'calc(50% - 8px)' }}
  >
    Item 1
  </Card>
  <Card
    width="100%"
    $gtSm={{ width: 'calc(50% - 8px)' }}
  >
    Item 2
  </Card>
</XStack>
```

### Conditional Rendering with Animation

```typescript
<AnimatePresence>
  {isVisible && (
    <YStack
      animation="quick"
      enterStyle={{ opacity: 0, y: -10 }}
      exitStyle={{ opacity: 0, y: 10 }}
    >
      <Text>Conditional content</Text>
    </YStack>
  )}
</AnimatePresence>
```

### Loading State Pattern

```typescript
<YStack>
  {isLoading ? (
    <YStack animation="quick" enterStyle={{ opacity: 0 }}>
      <Text>Loading...</Text>
    </YStack>
  ) : (
    <YStack animation="quick" enterStyle={{ opacity: 0 }}>
      {/* Content */}
    </YStack>
  )}
</YStack>
```

---

## Quick Reference: Token Usage

### Spacing Tokens
```typescript
$0  // 0px
$1  // 4px
$2  // 8px
$3  // 12px
$4  // 16px
$5  // 20px
$6  // 24px
$8  // 32px
```

### Color Tokens
```typescript
$bg          // Background
$color       // Text color
$primary     // Primary brand color
$accent      // Accent color
$tertiary    // Tertiary color
$beige       // Beige color
$background  // Background overlay
$white       // White
$black       // Black (or white in dark)
```

### Font Size Tokens
```typescript
$3  // Small
$4  // Medium (default)
$5  // Large
$8  // Extra large
```

---

## Checklist for New Components

- [ ] Use `styled()` API, not inline styles
- [ ] Use theme tokens (`$primary`, `$bg`) instead of hard-coded colors
- [ ] Define variants for different visual styles
- [ ] Add size variants if the component needs different sizes
- [ ] Include interactive states (pressStyle, hoverStyle)
- [ ] Make it responsive with `$gtSm` media queries
- [ ] Add proper TypeScript types
- [ ] Document usage examples in comments
- [ ] Use consistent naming (same as existing components)
- [ ] Export both named and default exports

---

## Need Help?

- **Tamagui Docs**: https://tamagui.dev
- **Example Components**: Check `components/shared/Button.tsx` and `Card.tsx`
- **Config**: See `tamagui.config.ts` for available tokens and settings
- **Themes**: See `theme/themes.ts` for color definitions
