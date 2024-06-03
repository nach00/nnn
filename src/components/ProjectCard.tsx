import { Stack, XStack } from 'tamagui'
import React from 'react'

export type ProjectCardTypes = {
  children?: any
}

export function ProjectCard({ children }: ProjectCardTypes) {
  return (
    <XStack
      height={600}
      width="$100vw"
      $gtXs={{ width: 600, height: 600 }}
      $gtSm={{ width: 500, height: 600 }}
      $gtMd={{ width: 500, height: 500 }}
      $gtLg={{ width: 600, height: 600 }}
      padding="$3"
    >
      <Stack
        backgroundColor="$color3"
        padding="$6"
        animation="bouncy"
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}
        borderColor="$color4"
        borderWidth="$1"
        borderRadius="$10"
        width="100%"
        gap="$6"
        style={{
          boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        }}
      >
        {children}
      </Stack>
    </XStack>
  )
}
