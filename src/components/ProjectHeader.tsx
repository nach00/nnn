import { Image, XStack, YStack } from 'tamagui'
import { TopBar } from './TopBar'
import { Eyebrow } from './Eyebrow'
import { Title } from './Title'
// import { GradientBackgroundTypes } from '@my/ui/src'

export type ProjectHeaderTypes = {
  eyebrow?: any
  title?: any
  headerImage?: any
}

// export const ProjectHeader = () => {
export const ProjectHeader = ({ eyebrow, title, headerImage }: ProjectHeaderTypes) => {
  return (
    <YStack maw={1200} miw="100%" ai="center">
      {/*HEADER TEXT*/}
      <YStack miw={1200} paddingVertical="$10">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Title>{title}</Title>
      </YStack>

      {/*HEADER IMAGE*/}

      {/*<Image*/}
      {/*  source={{*/}
      {/*    uri: '/assets/portfolio/tamagui/iso1.png',*/}
      {/*    width: '100%',*/}
      {/*    height: 300,*/}
      {/*  }}*/}
      {/*/>*/}
    </YStack>
  )
}
