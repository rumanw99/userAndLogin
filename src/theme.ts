// theme.ts

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Poppins, sans-serif',
  },
  colors: {
    primary: {
      50: '#F3F4F6',
      100: '#E5E7EB',
      // Add more color shades here
    },
    // Define other color modes and palettes
  },
  spacing: {
    1: '0.25rem',
    2: '0.5rem',
    // Define custom spacing values
  },
  // Define more style customizations
});

export default theme;
