import { H1, H2, H3, H4, H5, H6, Paragraph, Stack, YStack } from 'tamagui'
import React from 'react'
import { useHref } from 'react-router-dom'

export type CardTypes = {
  children?: any
  link?: any
}

export function Card({ children, link }: CardTypes) {
  return (
    <Stack
      bc="$color3"
      p="$6"
      gap="$6"
      w="100%"
      f={1}
      animation="bouncy"
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}
      boc="$color4"
      bw="$1"
      br="$10"
    >
      {children}
    </Stack>
  )
}

export function StaticCard({ children }) {
  return (
    <Stack bc="$color3" p="$6" gap="$6" w="100%" f={1} boc="$color4" bw="$1" br="$10">
      {children}
    </Stack>
  )
}

export function SmallCard({ children }) {
  return (
    <Stack
      col="$color11"
      bc="$color4"
      boc="$color5"
      bw="$1"
      ai="center"
      w="$10"
      h="$10"
      ai="center"
      gap="$2"
      jc="center"
      br="$7"
    >
      {children}
    </Stack>
  )
}
