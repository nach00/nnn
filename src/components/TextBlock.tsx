import { Anchor, Button, H6, Paragraph, Stack, styled, XStack, YStack } from 'tamagui'
import { useLink } from 'solito/link'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { Eyebrow } from './Eyebrow'
import { Card, StaticCard } from './Card'

export type TextBlockTypes = {
  eyebrow?: any
  description?: any
  children?: any
}

export const TextBlock = ({ eyebrow, description, children }: TextBlockTypes) => {
  return (
    <StaticCard>
      <Stack gap="$6">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Paragraph>{description}</Paragraph>
        {children}
      </Stack>
    </StaticCard>
  )
}
