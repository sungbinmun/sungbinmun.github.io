import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorMode } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;

  .logo-icon {
    display: inline-flex;
    transition: 200ms ease;
  }

  &:hover .logo-icon {
    transform: rotate(-30deg);
  }
`

const Logo = () => {
  const { colorMode } = useColorMode()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const iconSrc = !mounted || colorMode === 'light'
    ? '/images/robot_black.svg'
    : '/images/robot_white.svg'
  const textColor = !mounted || colorMode === 'light'
    ? 'gray.800'
    : 'whiteAlpha.900'

  return (
    (<Link href="/" scroll={false}>

      <LogoBox>
        <span className="logo-icon">
          <Image src={iconSrc} alt="Robot icon" width={24} height={24} />
        </span>
        <Text
          color={textColor}
          fontFamily="'Nunito Sans', sans-serif"
          fontWeight="bold"
          ml={2}
        >
          Sungbin Mun
        </Text>
      </LogoBox>

    </Link>)
  );
}

export default Logo
