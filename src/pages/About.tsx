import { H2, H6, Stack, H1, Paragraph, XStack, YStack, Image } from 'tamagui'
import React, { useState } from 'react'
import { Card, StaticCard } from '../components/Card'
import { ResumeItem } from '../components/ResumeItem'
import { Experience } from '../content/Experience'
import { Education } from '../content/Education'
import { TopBar } from '../components/TopBar'
import { BottomBar } from '../components/BottomBar'

export function About() {
  return (
    <>
      {/*<TopBar />*/}
      <YStack f={1} ai="center" jc="center" flexWrap="wrap">
        <YStack maw={1200} gap="$6">
          <XStack gap="$6">
            <StaticCard>
              <Image
                source={{
                  uri: './assets/photos/ai_profile.jpg',
                  width: 300,
                  height: 300,
                }}
                br="$7"
              />
            </StaticCard>

            <YStack f={1} gap="$6">
              <XStack alignItems="center" gap="$6" justifyContent="center">
                {/*<Sparkle size="$6" />*/}

                <H1 tt="uppercase">Self-summary and skills</H1>
                {/*<Sparkle size="$6" />*/}
              </XStack>
              <Stack w="100%" flexShrink={1} h="100%">
                <StaticCard>
                  <YStack w="100%" h="100%" justifyContent="flex-end">
                    <H2>Natcha Pradappet</H2>
                    <Paragraph color="$color11">
                      I am a Dallas-based UX/UI designer and front-end developer with a focus on web
                      design, information architecture, and design systems. I have a diverse range
                      of experience having worked across various fields and industries.
                    </Paragraph>
                  </YStack>
                </StaticCard>
              </Stack>
            </YStack>
          </XStack>

          <XStack gap="$6">
            <Stack f={1}>
              <StaticCard>
                <YStack gap="$6">
                  <Experience />
                </YStack>
              </StaticCard>
            </Stack>
            <Stack f={1}>
              <StaticCard>
                <YStack gap="$6">
                  <Education />
                </YStack>
              </StaticCard>
            </Stack>
          </XStack>

          <XStack f={1} gap="$6">
            <Stack w="100%" flexShrink={1}>
              {/*<Social />*/}
            </Stack>
            <Stack w="200%" flexShrink={1}>
              {/*<Connect />*/}
            </Stack>
            <Stack w="100%" flexShrink={1}>
              {/*<Resume />*/}
            </Stack>
          </XStack>
        </YStack>
      </YStack>
      {/*<BottomBar />*/}
    </>
  )
}
