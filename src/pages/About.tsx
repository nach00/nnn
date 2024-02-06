import { H2, H6, Stack, H1, Paragraph, XStack, YStack, Image, H5, H4, H3 } from 'tamagui'
import React, { useState } from 'react'
import { Card, SmallCard, StaticCard } from '../components/Card'
import { ResumeItem } from '../components/ResumeItem'
import { Experience } from '../content/Experience'
import { Education } from '../content/Education'
import { TopBar } from '../components/TopBar'
import { BottomBar } from '../components/BottomBar'
import { Eyebrow } from '../components/Eyebrow'
import { Title } from '../components/Title'
import { ChevronRight, DesignSystem, UXUIDesign, WebDevelopment, Sparkle } from '../assets/icons'
import { Link } from 'react-router-native'

export function About() {
  return (
    <>
      <YStack ai="center">
        <YStack ai="center" $gtMd={{ fd: 'row', w: 1000, ai: 'flex-end' }} $gtLg={{ w: 1200 }}>
          <XStack h="100vw" w="100vw" p="$3" $gtXxs={{ w: 400, h: 400 }}>
            <Stack
              bc="$color3"
              p="$6"
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
                  uri: '/assets/photos/ai_profile.jpg',
                  width: '100%',
                  height: '100%',
                }}
                f={1}
                br="$7"
              />
            </Stack>
          </XStack>

          <YStack ai="center" $gtMd={{ w: 600 }} $gtLg={{ w: 800 }}>
            <XStack ai="center" gap="$2">
              <Sparkle />
              <H3
                tt="uppercase"
                marginVertical="$6"
                $gtXs={{ size: '$10', textTransform: 'uppercase' }}
              >
                Self-summary
              </H3>
              <Sparkle />
            </XStack>

            <XStack
              w="100vw"
              p="$3"
              $gtXs={{ w: 600 }}
              $gtSm={{ w: 800 }}
              $gtMd={{ w: 600 }}
              $gtLg={{ w: 800 }}
            >
              <YStack
                bc="$color3"
                p="$6"
                boc="$color4"
                bw="$1"
                br="$10"
                w="100%"
                gap="$3"
                style={{
                  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                }}
              >
                <H3>Natcha Pradappet</H3>
                <Paragraph>
                  I am a Dallas-based UX/UI designer and front-end developer with a focus on web
                  design, information architecture, and design systems. I have a diverse range of
                  experience having worked across various fields and industries.
                </Paragraph>
              </YStack>
            </XStack>
          </YStack>
        </YStack>

        <YStack $gtSm={{ fd: 'row' }}>
          <XStack
            w="100vw"
            p="$3"
            $gtXs={{ w: 600 }}
            $gtSm={{ w: 400 }}
            $gtMd={{ w: 500 }}
            $gtLg={{ w: 600 }}
          >
            <Stack
              bc="$color3"
              p="$6"
              boc="$color4"
              bw="$1"
              br="$10"
              w="100%"
              gap="$3"
              style={{
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
              }}
            >
              <Experience />
            </Stack>
          </XStack>
          <XStack
            w="100vw"
            p="$3"
            $gtXs={{ w: 600 }}
            $gtSm={{ w: 400 }}
            $gtMd={{ w: 500 }}
            $gtLg={{ w: 600 }}
          >
            <Stack
              bc="$color3"
              p="$6"
              boc="$color4"
              bw="$1"
              br="$10"
              w="100%"
              gap="$3"
              style={{
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
              }}
            >
              <Education />
            </Stack>
          </XStack>
        </YStack>

        <Link to="/resume" underlayColor="$color9">
          <XStack
            h={300}
            w="100vw"
            $gtXs={{ w: 600 }}
            $gtSm={{ w: 800 }}
            $gtMd={{ w: 1000 }}
            $gtLg={{ w: 1200 }}
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
              style={{
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
              }}
            >
              <Stack ai="center" jc="center" h="100%" f={1}>
                <Image
                  source={{
                    uri: '/assets/icons/fade1.svg',
                    width: 150,
                    height: 150,
                  }}
                />
              </Stack>

              <XStack color="$color9" jc="space-between" ai="flex-end" w="100%" f={1}>
                <Title>Resume</Title>
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
