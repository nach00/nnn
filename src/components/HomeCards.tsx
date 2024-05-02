import { Stack, XStack } from 'tamagui'
import React from 'react'

export type HomeCardTypes = {
  children?: any
}

export function SmallHomeCard({ children }: HomeCardTypes) {
  return (
    <XStack
      height={360}
      // width={'100vw'}
      $gtXs={{ width: 300, height: 300 }}
      $gtSm={{ width: 300, height: 300 }}
      $gtMd={{ width: 250, height: 250 }}
      $gtLg={{ width: 300, height: 300 }}
      padding="$3"
    >
      <Stack
        backgroundColor="$color3"
        padding="$6"
        animation="bouncy"
        hoverStyle={{
          scale: 0.925,
        }}
        pressStyle={{
          scale: 0.875,
        }}
        borderColor="$color4"
        borderWidth="$1"
        borderRadius="$10"
        width="100%"
        style={{
          boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        }}
      >
        {children}
      </Stack>
    </XStack>
  )
}

export function MiniHomeCard({ children }: HomeCardTypes) {
  return (
    <Stack
      col="$color11"
      bc="$color4"
      boc="$color5"
      bw="$1"
      ai="center"
      w="$10"
      h="$10"
      gap="$2"
      jc="center"
      br="$7"
    >
      {children}
    </Stack>
  )
}

export function MiniHomeCardNoBg({ children }: HomeCardTypes) {
  return (
    <Stack w="$10" h="$10" ai="center" gap="$2" jc="center" p="$1">
      {children}
    </Stack>
  )
}
