import React from 'react';
import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  chakra,
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PubGridItem } from '../components/grid-item'
import { IoLogoGithub, IoMailUnread, IoSchool } from 'react-icons/io5'
import Image from 'next/image'
// import Script from 'next/script'
import LogoBanner from '../components/logobanner'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt', 'style'].includes(prop)
})

const PROFILE_WIDTH = 150
const PROFILE_HEIGHT = 170

const Home = () => {
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
                variant="soft-outline"
                leftIcon={<IoMailUnread />}
                minW="auto"
                justifyContent="flex-start"
                px={3}
              >
                E-mail
              </Button>
            </Link>
            <Link href="https://github.com/sungbinmun" target="_blank">
              <Button
                size="sm"
                variant="soft-outline"
                leftIcon={<IoLogoGithub />}
                minW="auto"
                justifyContent="flex-start"
                px={3}
              >
                GitHub
              </Button>
            </Link>
            <Link href="https://scholar.google.com/citations?user=zHQFSEcAAAAJ&hl=ko&oi=ao" target="_blank">
              <Button
                size="sm"
                variant="soft-outline"
                leftIcon={<IoSchool />}
                minW="auto"
                justifyContent="flex-start"
                px={3}
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
          I&apos;m a PhD student in the Department of Electrical and Computer Engineering at
          Seoul National University, advised by Prof.{' '}
          <Link as={NextLink} href="https://3d.snu.ac.kr" passHref scroll={false}>
            Young Min Kim
          </Link>
          . I received my bachelor&apos;s degrees in Mechanical Engineering and Artificial
          Intelligence from Korea University.
        </Paragraph>
        <Box height="0.3em"></Box>
        <Paragraph>
          My research focuses on 3D computer vision and robotics. My goal is to enable robots
          to understand the 3D world and use that understanding to perform a wide range of
          everyday tasks that can assist people in daily life.
        </Paragraph>
      </Section>


      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          News
        </Heading>
        <BioSection>
          <BioYear>2026.01</BioYear>
          My first paper was accepted to ICLR 2026. See you in Rio! 🇧🇷
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Research
        </Heading>
        <Box mt={4}>
          <PubGridItem
            title="3D-aware Disentangled Representation for Compositional Reinforcement Learning"
            thumbnail="/images/publications/3DiR_teaser.gif"
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
        <Box display="flex" flexDirection="column" gap={2.5}>
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
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <BioSection>
          <BioYear>2023.07 - 2024.08</BioYear>
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

      <Box align="center" h="2em">
      </Box>



    </Container>
  </Layout>
  );
};

export default Home
export { getServerSideProps } from '../components/chakra'
