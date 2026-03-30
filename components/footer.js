import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" fontSize="sm" opacity={0.5} pt={8}>
      Copyright {new Date().getFullYear()} Sungbin Mun
    </Box>
  )
}

export default Footer
