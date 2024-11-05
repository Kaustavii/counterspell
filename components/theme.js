import base from '@rebass/preset'
import { merge } from 'lodash'

export const breakpoints = [32, 48, 64].map(w => `${w}em`)

export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

export const fontSizes = [14, 16, 20, 24, 32, 48, 64, 96, 128]

// Updated color palette with a darker pink
export const palette = {
  darker: '#0b0b0d', // Very dark background, almost black
  dark: '#1c1c1f',   // Darker grayish black
  darkless: '#2a2a2e', // Slightly lighter dark color
  bandark: '#181818', // Dark black for banners
  // New theme colors
  black: '#212F51',   // Black for base text and backgrounds
  pink: '#d1005b',    // Darker pink for accents and primary highlights
  blue: '#007acc',    // Blue for secondary accents
  neonGreen: '#39ff14', // Neon green for minor highlights
  // Greyscale
  steel: '#273444',
  slate: '#3c4858',
  muted: '#8492a6',
  smoke: '#CE155A', //counterspell dark pink
  snow: '#f9fafc',
  white: '#ffffff',
  // Brand colors
  primary: '#d1005b',  // Darker pink as primary color
  primaryWash: '#2B3856', // Gray blue as accent color
  accent: '#007acc',   // Blue as accent color
  accentLight: '#66bfff', // Lighter blue
  accentDark: '#004f8c', // Darker blue
  success: '#39ff14',   // Neon green for success
  error: '#ff4c4c',     // Bright red for error
  cool: '#00bdde',
  coolWash: '#7cecff',
  lemonade: '#ff5a5f'
}

const theme = merge(base, {
  breakpoints,
  space,
  fontSizes,
  initialColorMode: 'light',
  colors: {
    ...palette,
    text: palette.white,
    background: palette.black,
    cards: palette.darkless,
    muted: palette.muted,
    sunken: palette.bandark,
    bannerBG: palette.primary,
    bannerColor: palette.white,
    bannerColorAlt: palette.accentLight,
    coolBg: palette.cool,
    modes: {
      dark: {
        text: palette.white,
        background: palette.darker,
        cards: palette.darkless,
        sunken: palette.bandark,
        primaryWash: palette.primaryWash,
        bannerBG: palette.bandark,
        bannerColor: palette.neonGreen,
        bannerColorAlt: palette.primaryWash,
        coolBg: palette.dark,
        cards: palette.darkless,
      }
    }
  },
  fonts: {
    body:
      'Geo,"Segoe UI",Roboto,sans-serif',
    heading: 'Geo',
    mono: 'Menlo, monospace'
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
    tight: 0.875
  },
  fontWeights: {
    body: '400',
    medium: '700',
    mediumbold: '800',
    bold: '900'
  },
  letterSpacings: {
    heading: '-0.05em',
    caps: '0.05em'
  },
  sizes: {
    superslim: 512,
    slim: 640,
    narrow: 768,
    container: 1024,
    wide: 1536
  },
  radii: {
    default: 6,
    extra: 9,
    circle: 99999
  },
  shadows: {
    card: '0 4px 8px rgba(0, 0, 0, 0.125)',
    sheet: '0 8px 32px rgba(0, 0, 0, 0.0625)'
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    }
  },
  variants: {
    container: {
      width: '100%',
      maxWidth: 'container',
      mx: 'auto',
      px: 3
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    },
    card: {
      bg: 'cards',
      p: [3, 4],
      borderRadius: 'extra',
      boxShadow: 'card'
    },
    sheet: {
      bg: 'cards',
      borderRadius: 'extra',
      boxShadow: 'sheet',
      overflow: 'hidden'
    },
    avatar: {
      borderRadius: 'circle',
      objectFit: 'cover',
      objectPosition: 'center',
      flexShrink: 0
    }
  },
  styles: {
    a: {
      color: 'primary',
      cursor: 'pointer',
      ':hover, :focus': {
        color: 'accent'
      }
    },
    p: {
      fontFamily: 'mono'
    },
    img: {
      maxWidth: '100%',
      height: 'auto'
    },
    navitem: {
      cursor: 'pointer',
      borderRadius: 'circle',
      fontWeight: 'medium',
      fontSize: 2,
      lineHeight: 'body',
      textDecoration: 'none',
      py: 1,
      px: [2, 3],
      mx: [null, 1],
      transition: 'background .125s ease-in-out',
      ':focus, :hover, :active': {
        bg: 'sunken'
      }
    }
  }
})

export default theme