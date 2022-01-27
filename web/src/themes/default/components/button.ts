export default {
  baseStyle: {
    fontWeight: 'bold',
    boxShadow: 'lg',
    _focus: { ring: 'transparent' },
    _hover: { opacity: 0.8 },
  },
  variants: {
    solid: {
      bg: 'primary',
      color: 'paragraph',
    },
    accent: {
      bg: 'accent',
      color: 'paragraph',
    },
    secondary: {
      bg: 'white',
      color: 'primary',
    },
  },
}
