import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('hsl(0, 0%, 98%)', '#202023')(props)
    }
  })
}

const components = {
  Button: {
    variants: {
      'soft-outline': props => ({
        borderRadius: '12px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: mode('hsl(0, 0%, 88%)', '#343841')(props),
        bg: mode('hsl(0, 0%, 98%)', '#202023')(props),
        color: mode('#111827', '#f8fafc')(props),
        _hover: {
          bg: mode('hsl(0, 0%, 96%)', '#26262a')(props)
        },
        _active: {
          bg: mode('hsl(0, 0%, 94%)', '#2d2d31')(props)
        }
      })
    }
  },
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      'page-title': {
        marginBottom: 5
      },
      'section-subtitle': {
        textDecoration: 'underline',
        fontSize: 16,
        marginTop: 3,
        marginBottom: 3
      },
      'hidden-component': {
        fontSize: 1
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#4367a8', '#ff63c3')(props),
      textUnderlineOffset: 3
    }),
  },
  Container: {
    baseStyle: {
      maxW: 'container.lg'
    }
  }
}

const fonts = {
  heading: "'Nunito Sans', sans-serif",
  body: "'Nunito Sans', sans-serif",
  mono: "'Roboto Mono', monospace"
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}



const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
