import React, { useState } from 'react';
import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  chakra,
  Collapse,
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PubGridItem } from '../components/grid-item'
import { IoLogoGithub, IoMailUnread, IoSchool } from 'react-icons/io5'
import Image from 'next/image'
// import Script from 'next/script'
import LogoBanner from '../components/logobanner'
import thumbProbeOptim from '../public/images/publications/3DiR_teaser.gif'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt', 'style'].includes(prop)
})

const PROFILE_WIDTH = 150
const PROFILE_HEIGHT = 170

const Home = () => {
  const [showMap, setShowMap] = useState(false);
  return (
  <Layout>
    <Container>

      <Box display="flex" alignItems="flex-start" justifyContent="space-between" gap={4}>
        <Box flexGrow={1} minW={0}>
          <Heading as="h2" variant="page-title">
            Sungbin Mun
          </Heading>
          <p><b>Ph.D. Student</b> <br/>Seoul National University</p>
          <Box mt={3} display="flex" gap={2} flexWrap="wrap" justifyContent="flex-start">
            <Link href="mailto: brian0429@snu.ac.kr" target="_blank">
              <Button
                size="sm"
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMailUnread />}
                minW="auto"
                justifyContent="flex-start"
                px={0}
              >
                E-mail
              </Button>
            </Link>
            <Link href="https://github.com/sungbinmun" target="_blank">
              <Button
                size="sm"
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
                minW="auto"
                justifyContent="flex-start"
                px={0}
              >
                GitHub
              </Button>
            </Link>
            <Link href="https://scholar.google.com/citations?user=DmPZo4QAAAAJ" target="_blank">
              <Button
                size="sm"
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoSchool />}
                minW="auto"
                justifyContent="flex-start"
                px={0}
              >
                Google Scholar
              </Button>
            </Link>
          </Box>
        </Box>
        <Box flexShrink={0} textAlign="center">
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w={`${PROFILE_WIDTH}px`}
            h={`${PROFILE_HEIGHT}px`}
            display="inline-block"
            borderRadius="16px"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/SungbinMun.JPG"
              alt="Profile image"
              borderRadius="16px"
              width={PROFILE_WIDTH}
              height={PROFILE_HEIGHT}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </Box>
        </Box>
      </Box>

      <Box h="0.8em" />

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          I&apos;m a PhD student at Seoul National University ECE department, advised by Prof.{' '}
          <Link as={NextLink} href="https://3d.snu.ac.kr" passHref scroll={false}>
            Young Min Kim
          </Link>
          .
          I obtained my Bacheler&apos;s degree from Korea University.
        </Paragraph>
        <Box height="0.3em"></Box>
        <Paragraph>
          My research is focused on 3D computer vision and robotics.
        </Paragraph>
      </Section>


      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          News
        </Heading>
        <BioSection>
          <BioYear>2026.01</BioYear>
          My first paper accepted to ICLR 2026.
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Research
        </Heading>
        <Box mt={4}>
          <PubGridItem
            title="3D-aware Disentangled Representation for Compositional Reinforcement Learning"
            thumbnail={thumbProbeOptim}
            journal="International Conference on Learning Representations (ICLR), 2026"
            project_page="/3DiR_ICLR2026/index.html"
            author={<><b>Sungbin Mun</b>, Younghwan Lee, Cheol-Hui Min, Mineui Hong, Young Min Kim</>}
            paper="https://openreview.net/forum?id=GE0IFoDx8a"
            video="none"
            code="none"
          />
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
          <BioYear>2024.09 - Present </BioYear>
           M.S./Ph.D., Seoul National University, ECE, advised by {' '}
          <Link as={NextLink} href="https://3d.snu.ac.kr/members/" passHref scroll={false} target="_blank">
            Young Min Kim
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>2021.03 - 2024.08</BioYear>
          B.S., Korea University, Artificial Intelligence (double major)
        </BioSection>
        <BioSection>
          <BioYear>2019.03 - 2024.08</BioYear>
          B.S., Korea University, Mechanical Engineering (double major)
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <BioSection>
          <BioYear>2024.07 - 2025.08</BioYear>
          Research Intern, {' '}
          <Link as={NextLink} href="https://3d.snu.ac.kr" passHref scroll={false} target="_blank">
            3D VISION LAB(Seoul National University)
          </Link>
          , advised by {' '}
          <Link as={NextLink} href="https://3d.snu.ac.kr/members/" passHref scroll={false} target="_blank">
            Young Min Kim
          </Link>
        </BioSection>
      </Section>
      <LogoBanner />

      <Heading
        onClick={() => setShowMap(!showMap)}
        display="flex"
        cursor="pointer"
        variant="hidden-component"
      >
        Traveled countries
        {showMap ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Heading>
      <Collapse in={showMap} animateOpacity align="center">
        <iframe src="https://visitedplaces.com/embed/?map=world&projection=geoOrthographic&position=3.5_130.1_36.3_-133.3_-35.8&theme=dark-yellow&width=594&height=435&water=1&graticule=1&names=1&duration=2000&placeduration=100&slider=0&autoplay=0&autozoom=none&autostep=0&home=KR&places=~US_CA_GB_FR_NL_CH_CZ_IT_DE_CN_JP_TH_KH_LA_AU_MY_BE_AT" style={{width: "70%", height: "250px"}}></iframe>
      </Collapse>

      <Box align="center" h="2em">
      </Box>



    </Container>
  </Layout>
  );
};

export default Home
export { getServerSideProps } from '../components/chakra'
