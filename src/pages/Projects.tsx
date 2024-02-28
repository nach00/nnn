import { H2, Stack, XStack, YStack, Image } from 'tamagui'
// import { Link } from 'react-router-dom'
import { Link } from 'react-router-native'

import { ChevronRight, Sparkle } from '../assets/icons'
import { Eyebrow } from '../components/Eyebrow'
import { Title } from '../components/Title'

export function Projects() {
  return (
    <>
      <YStack ai="center" m="$3">
        <XStack ai="center" mb="$6" gap="$2">
          <Sparkle />

          <H2 tt="uppercase">All projects</H2>
          <Sparkle />
        </XStack>

        <Link to="/projects/tamagui" underlayColor="$color9">
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
                  uri: '/assets/portfolio/tamagui/mock1.png',
                  width: '100%',
                  height: '100%',
                }}
                f={1}
                br="$7"
              />
              <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
                <YStack f={1} gap="$1">
                  <Eyebrow>Design system</Eyebrow>
                  <Title>Tamagui</Title>
                </YStack>
                <Stack>
                  <ChevronRight />
                </Stack>
              </XStack>
            </Stack>
          </XStack>
        </Link>
        <Link to="/projects/fossil" underlayColor="$color9">
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
                  uri: '/assets/portfolio/fossil/skagen-mock1.png',
                  width: '100%',
                  height: '100%',
                }}
                f={1}
                br="$7"
              />
              <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
                <YStack f={1} gap="$1">
                  <Eyebrow>Email development</Eyebrow>
                  <Title>Fossil</Title>
                </YStack>
                <Stack>
                  <ChevronRight />
                </Stack>
              </XStack>
            </Stack>
          </XStack>
        </Link>
        <Link to="/projects/scoutify" underlayColor="$color9">
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
        </Link>
      </YStack>
    </>
  )
}
