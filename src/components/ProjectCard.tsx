import { H1, H2, H3, H4, H5, H6, Image, Paragraph, Stack, XStack, YStack } from 'tamagui'
import React from 'react'
import { useHref } from 'react-router-dom'
import { Eyebrow } from './Eyebrow'
import { Title } from './Title'
import { ChevronRight } from '../assets/icons'

export type ProjectCardTypes = {
  children?: any
  link?: any
}

export function ProjectCard({ children, link }: ProjectCardTypes) {
  return (
    <XStack
      h={600}
      w="100vw"
      $gtXs={{ w: 600, h: 600 }}
      $gtSm={{ w: 500, h: 600 }}
      $gtMd={{ w: 500, h: 500 }}
      $gtLg={{ w: 600, h: 600 }}
      p="$3"
    >
      <Stack
        bc="$color3"
        p="$6"
        animation="bouncy"
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}
        boc="$color4"
        bw="$1"
        br="$10"
        w="100%"
        gap="$6"
        style={{
          boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        }}
      >
        <Image
          source={{
            uri: '/assets/portfolio/scoutify/scoutify-tablet-cover.png',
            width: '100%',
            height: '100%',
          }}
          f={1}
          br="$7"
        />
        <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
          <YStack f={1} gap="$1">
            <Eyebrow>User Experience Design</Eyebrow>
            <Title>Scoutify</Title>
          </YStack>
          <Stack>
            <ChevronRight />
          </Stack>
        </XStack>
      </Stack>
    </XStack>
  )
}
