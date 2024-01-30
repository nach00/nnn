import { YStack, XStack, Button, Anchor, H6, H5, H4, H3, Paragraph, Image } from 'tamagui'

// import { useLink } from 'solito/link'
import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import { Link } from 'solito/link'
export const TopBar = () => {
  return (
    <XStack
      marginTop="$6"
      marginBottom="$16"
      marginHorizontal="auto"
      w="100%"
      jc="space-between"
      maw={1200}
      ai="center"
    >
      <XStack ai="center" gap="$3">
        <Image
          source={{
            uri: './assets/icons/n-logo-white.svg',
            width: 40,
            height: 40,
          }}
        />

        <Link to="/">
          <H4>Natcha Pradappet</H4>
        </Link>
      </XStack>

      <XStack gap="$6" ai="center">
        <Link to="/about">
          <Paragraph>About</Paragraph>
        </Link>
        <Link to="/projects">
          <Paragraph>Projects</Paragraph>
        </Link>
        <Link to="/resume">
          <Paragraph>Resume</Paragraph>
        </Link>
      </XStack>

      <Button>
        <Link to="/contact">
          <Paragraph>Let's Talk</Paragraph>
        </Link>
      </Button>
    </XStack>
  )
}
