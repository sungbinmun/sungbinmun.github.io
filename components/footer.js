import { Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const Footer = () => {
  return (
    <Box align="center" fontSize="sm" opacity={0.4} pt={8}>
      This website is built based on{' '}
      <Link as={NextLink} href='https://www.craftz.dog/' target='_blank'>
        Takuya Matsuyama&apos;s website
      </Link>{' '}
      and{' '}
      <Link as={NextLink} href='https://www.changwoon.info' target='_blank'>
        Changwoon Choi&apos;s website
      </Link>
    </Box>
  )
}

export default Footer
