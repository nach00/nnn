import {
  YStack,
  XStack,
  Button,
  Anchor,
  H6,
  H5,
  H4,
  H3,
  Paragraph,
  Image,
  H1,
  Separator,
} from 'tamagui'
import React from 'react'
import { Email, Github, Instagram, LinkedIn } from '../assets/icons'
import { Link } from 'react-router-dom'

export const BottomBar = () => {
  return (
    <YStack>
      <Separator mt="$12" />
      <H1 ta="center" mt="$12" mx="$3">
        Let's work together.
      </H1>
      <XStack
        marginTop="$12"
        marginBottom="$12"
        marginHorizontal="auto"
        width="100%"
        maxWidth={1200}
        alignItems="center"
        justifyContent="center"
      >
        <XStack gap="$6" ai="center">
          <Link to="mailto:npradappet@gmail.com">
            <Email />
          </Link>
          <a href="https://www.linkedin.com/in/natcha-pradappet/">
            <LinkedIn />
          </a>
          <a href="https://www.instagram.com/planetnachodesigns/">
            <Instagram />
          </a>
          <a href="https://github.com/nach00/">
            <Github />
          </a>
          <a href="https://planetnacho.com">
            <Image
              source={{
                uri: '/assets/logos/planet-nacho-white.svg',
                width: 28,
                height: 28,
              }}
            />
          </a>
        </XStack>
      </XStack>
    </YStack>
  )
}
