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
import { Email, Instagram, LinkedIn } from '../assets/icons'

export const BottomBar = () => {
  return (
    <YStack>
      <Separator mt="$16" />
      <H1 ta="center" mt="$16">
        Let's work together.
      </H1>
      <XStack
        marginTop="$12"
        marginBottom="$20"
        marginHorizontal="auto"
        width="100%"
        maxWidth={1200}
        alignItems="center"
        justifyContent="center"
      >
        <XStack gap="$10" ai="center">
          <Email />
          <LinkedIn />
          <Instagram />
        </XStack>
      </XStack>
    </YStack>
  )
}
