import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import { Analytics } from '@vercel/analytics/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8034797123756399"
     crossorigin="anonymous"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Sungbin's homepage" />
        <meta name="author" content="Sungbin Mun" />
        <link rel="apple-touch-icon" href="/images/robot_black.svg" />
        <link rel="icon" href="/images/robot_black.svg" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/images/robot_white.svg" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/images/robot_black.svg" />
        <meta property="og:site_name" content="Sungbin Mun" />
        <meta name="og:title" content="Sungbin Mun" />
        <meta property="og:type" content="website" />
        <title>Sungbin Mun</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="95ch" pt={20}>

        {children}
        <Analytics />

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
