import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Flex,
  Text,
  Link,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import { Global } from '@emotion/react'

var make_link = function (url, text, slash) {
  var none="none"
  if (none.localeCompare(url) == 0) {
    return ''
  }
  if (slash) {
    // return <><Link as={NextLink} href={url} target="_blank">{text}</Link> / </>
    return <Text fontSize={14} display="inline"><nobr>{' '}<Link as={NextLink} href={url} target="_blank">{text}</Link> / </nobr></Text>
  }
  else {
    // return <Link as={NextLink} href={url} target="_blank">{text}</Link>
    return <Text fontSize={14} display="inline">{' '}<Link as={NextLink} href={url} target="_blank">{text}</Link></Text>
  }
}

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/publications/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
      />
      <LinkOverlay as="div" href={`/works/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

// export const PubGridItem = ({ children, id, title, thumbnail, journal, author, project_page, paper, video, code }) => (
//   <SimpleGrid columns={{sm: 1, md: 4}} gap={4}>
//     <Box w={{sm:"100%", md: "100%"}} textAlign="center">
//       <LinkBox
//         as={NextLink}
//         href={`/publications/${id}`}
//         scroll={false}
//         cursor="pointer"
//       >
//         <Image
//           src={thumbnail}
//           alt={title}
//           className="grid-item-thumbnail"
//         />
//       </LinkBox>
//     </Box>
//     <Box w={{sm: "100%", md: "300%"}} textAlign="left">
//       <LinkBox
//         as={NextLink}
//         href={`/publications/GCA`}
//         scroll={false}
//         cursor="pointer"
//       >
//         <LinkOverlay as="div" href={`/publications/${id}`}>
//           <Text mt={2} fontSize={20}>
//             {title}
//           </Text>
//           <Text fontSize={14}>
//             {author}
//           </Text>
//           <Text fontSize={14} color="grey" fontStyle="italic">
//             {journal}
//           </Text>
//         </LinkOverlay>
//         {make_link (`${project_page}`, "project page", true)}
//         {make_link (`${paper}`, "paper", true)} 
//         {make_link (`${video}`, "video", true)} 
//         {make_link (`${code}`, "code", false) }
//       </LinkBox>
//     </Box>
//   </SimpleGrid>
// )

export const PubGridItem = ({ title, thumbnail, journal, author, project_page, paper, video, code }) => (
  <PublicationCard
    title={title}
    thumbnail={thumbnail}
    journal={journal}
    author={author}
    project_page={project_page}
    paper={paper}
    video={video}
    code={code}
  />
)

export const PubGridItemLink = ({ id, title, thumbnail, journal, author, project_page, paper, video, code }) => (
  <SimpleGrid columns={4} gap={4}>
    <Box w="100%" textAlign="center">
      <Image
        src={thumbnail}
        alt={title}
        className="pub-item-thumbnail"
      />
    </Box>
    <Box w="100%" textAlign="left" gridColumn="span 3">
      <Text mt={0} fontSize={20}>
        {' '}
        <Link as={NextLink} href={`/publications/${id}`} variants="pub_title">
          {title}
        </Link>
      </Text>
      <Box as="div" fontSize={14}>
        {author}
      </Box>
      <Text fontSize={14} color="grey" fontStyle="italic">
        {journal}
      </Text>
      {make_link (`${project_page}`, "project page", paper !== 'none' || video !== 'none' || code !== 'none')}
      {make_link (`${paper}`, "paper", video !== 'none' || code !== 'none')} 
      {make_link (`${video}`, "video", code !== 'none')} 
      {make_link (`${code}`, "code", false) }
    </Box>
  </SimpleGrid>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
      .pub-item-thumbnail {
        width: 100%;
        aspect-ratio: 16 / 10;
        object-fit: contain;
        object-position: center;
        background: #ffffff;
        border-radius: 12px;
      }
    `}
  />
)

const PublicationCard = ({ title, thumbnail, journal, author, project_page, paper, video, code }) => {
  const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const cardBg = useColorModeValue('hsl(0, 0%, 98%)', '#202023')
  const mutedColor = useColorModeValue('gray.600', 'gray.400')
  const thumbnailSrc = typeof thumbnail === 'string' ? thumbnail : thumbnail?.src

  return (
    <Box
      borderWidth="1px"
      borderStyle="solid"
      borderColor={borderColor}
      borderRadius="14px"
      bg={cardBg}
      overflow="hidden"
    >
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Box
          w={{ base: '100%', md: '38%' }}
          minW={{ md: '260px' }}
          borderRightWidth={{ base: 0, md: '1px' }}
          borderBottomWidth={{ base: '1px', md: 0 }}
          borderColor={borderColor}
        >
          <Link
            as={NextLink}
            href={project_page}
            target="_blank"
            display="block"
            _hover={{ opacity: 0.92 }}
          >
            <Box position="relative" w="100%" aspectRatio={16 / 10}>
              <Box
                as="img"
                src={thumbnailSrc}
                alt={title}
                w="100%"
                h="100%"
                objectFit="cover"
                display="block"
              />
            </Box>
          </Link>
        </Box>
        <Box flex="1" px={{ base: 5, md: 6 }} py={{ base: 5, md: 6 }} textAlign="left">
          <Text mt={0} fontSize={{ base: 18, md: 20 }} fontWeight={600} lineHeight={1.3}>
            {title}
          </Text>
          <Box as="div" mt={2} fontSize={14}>
            {author}
          </Box>
          <Text mt={1.5} fontSize={14} color={mutedColor} fontStyle="italic">
            {journal}
          </Text>
          <Box mt={2}>
            {make_link(`${project_page}`, 'project page', paper !== 'none' || video !== 'none' || code !== 'none')}
            {make_link(`${paper}`, 'paper', video !== 'none' || code !== 'none')}
            {make_link(`${video}`, 'video', code !== 'none')}
            {make_link(`${code}`, 'code', false)}
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}
