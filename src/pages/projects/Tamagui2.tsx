import { H2, H6, Stack, H1, Paragraph, XStack, YStack, Image, Button } from 'tamagui'
import { TopBar } from '../../components/TopBar'
import { BottomBar } from '../../components/BottomBar'
import { YStack } from 'tamagui'
import { ProjectHeader } from '../../components/ProjectHeader'
import { Card, StaticCard } from '../../components/Card'
import { TextBlock } from '../../components/TextBlock'
import { Eyebrow } from '../../components/Eyebrow'
import { Title } from '../../components/Title'

export function Tamagui() {
  return (
    <>
      <YStack>
        <YStack m="$3">
          <Eyebrow>Design system</Eyebrow>
          <Title>Tamagui</Title>
        </YStack>
        <Image
          source={{
            uri: '/assets/portfolio/tamagui/mock5wide.png',
            width: '100vw',
            height: 300,
          }}
        />
        <Stack bc="$color3" p="$6" boc="$color4" bw="$1" br="$10" gap="$6" m="$3">
          <Stack bc="$color3" p="$6" boc="$color4" bw="$1" br="$7" gap="$6" m="$3">
            <Stack gap="$6">
              <Eyebrow>What is a design system?</Eyebrow>
              <Paragraph>
                A design system is a set of standards to manage design at scale by reducing
                redundancy while creating a shared language and visual consistency across different
                pages and channels.
              </Paragraph>
              <Button theme="active">See Live Project</Button>
            </Stack>
          </Stack>
          <Stack bc="$color3" p="$6" boc="$color4" bw="$1" br="$7" gap="$6" m="$3">
            <Stack gap="$6">
              <Eyebrow>What is Tamagui?</Eyebrow>
              <Paragraph>
                Tamagui is a modular style solution for React - web or native. It aims to compete
                with the best web-only style libraries, while bringing many much-needed styling
                capabilities to React Native.{' '}
              </Paragraph>
              <Button theme="active">Learn more about Tamagui</Button>
            </Stack>
          </Stack>
        </Stack>
        <YStack m="$3" gap="$4">
          <Image
            br="$10"
            source={{
              uri: '/assets/portfolio/tamagui/colorvariables.png',
              width: null,
              height: 250,
              resizeMode: 'cover',
            }}
          />
          <Image
            br="$10"
            flex={1}
            source={{
              uri: '/assets/portfolio/tamagui/mock1.png',
              width: null,
              height: 250,
            }}
          />
          <Image
            br="$10"
            flex={1}
            source={{
              uri: '/assets/portfolio/tamagui/mock2.png',
              width: null,
              height: 250,
            }}
          />
          <Image
            br="$10"
            flex={1}
            source={{
              uri: '/assets/portfolio/tamagui/mock4.png',
              width: null,
              height: 250,
              resizeMode: 'cover',
            }}
          />
          <Image
            br="$10"
            flex={1}
            source={{
              uri: '/assets/portfolio/tamagui/light-red.png',
              width: null,
              height: 250,
            }}
          />
        </YStack>
      </YStack>

      <YStack maw={1200} miw="100%" ai="center">
        <YStack ai="center">
          <YStack miw={1200} paddingVertical="$10">
            <Eyebrow>Design system</Eyebrow>
            <Title>Tamagui</Title>
          </YStack>
        </YStack>
        <Image
          source={{
            uri: '/assets/portfolio/tamagui/mock5wide.png',
            width: '100%',
            height: 600,
          }}
        />

        <YStack maw={1200} gap="$6">
          <YStack gap="$6" marginVertical="$6">
            {/*OVERVIEW*/}
            {/*<XStack backgroundColor="$color3" gap="$6" p="$6" br="$12">*/}
            <StaticCard gap="$6">
              <TextBlock
                eyebrow="What is a design system?"
                description="A design system is a set of standards to manage design at scale by reducing redundancy while creating a shared language and visual consistency across different pages and channels."
              >
                <Button theme="active">See Live Project</Button>
              </TextBlock>
              <TextBlock
                eyebrow="What is Tamagui?"
                description="Tamagui is a modular style solution for React - web or native. It aims to compete with the best web-only style libraries, while bringing many much-needed styling capabilities to React Native."
              >
                <Button theme="active">Learn more about Tamagui</Button>
              </TextBlock>
              {/*</XStack>*/}
            </StaticCard>

            {/*IMAGES*/}
            <YStack gap="$6">
              <Image
                br="$12"
                source={{
                  uri: '/assets/portfolio/tamagui/colorvariables.png',
                  width: '100%',
                  height: 600,
                  resizeMode: 'cover',
                }}
              />
              <XStack f={1} w="100%" gap="$6">
                <Image
                  br="$12"
                  flex={1}
                  source={{
                    uri: '/assets/portfolio/tamagui/mock1.png',
                    width: '50%',
                    height: 450,
                  }}
                />
                <Image
                  br="$12"
                  flex={1}
                  source={{
                    uri: '/assets/portfolio/tamagui/mock2.png',
                    width: '50%',
                    height: 450,
                  }}
                />

                {/*<XStack backgroundColor="$color4" h="$20" br="$12" f={1} />*/}
              </XStack>
              <XStack f={1} w="100%" gap="$6">
                <Image
                  br="$12"
                  flex={1}
                  source={{
                    uri: '/assets/portfolio/tamagui/mock4.png',
                    width: '50%',
                    height: 450,
                    resizeMode: 'cover',
                  }}
                />
                <Image
                  br="$12"
                  flex={1}
                  source={{
                    uri: '/assets/portfolio/tamagui/light-red.png',
                    width: '50%',
                    height: 450,
                  }}
                />
              </XStack>
            </YStack>

            {/*DESCRIPTION*/}
            <XStack backgroundColor="$color3" gap="$6" p="$6" br="$12">
              <YStack p="$6" f={1} backgroundColor="$color4" br="$7" miw="$20" gap="$4">
                <YStack>
                  <Eyebrow>Year</Eyebrow>
                  <Paragraph>2024</Paragraph>
                </YStack>
                <YStack>
                  <Eyebrow>Services</Eyebrow>
                  <Paragraph>Design</Paragraph>
                </YStack>
                <YStack>
                  <Eyebrow>Tools</Eyebrow>
                  <Paragraph>Figma</Paragraph>
                </YStack>
                {/*<YStack>*/}
                {/*  <Eyebrow>Project</Eyebrow>*/}
                {/*  <Paragraph>2019</Paragraph>*/}
                {/*</YStack>*/}
              </YStack>
              <YStack f={1}>
                <Eyebrow>OVERVIEW</Eyebrow>
                <YStack gap="$6">
                  <Paragraph>
                    Towards the end of 2023, I started developing my website (this website) and
                    needed to decide on a front-end framework. There were several at the time, but I
                    decided to use Tamagui, which is currently a very new framework. Seeing that the
                    Figma design system at the time was severly out dated, I reached out to Nate,
                    the creator of Tamagui, to see if I could help.
                  </Paragraph>
                  <Paragraph>
                    This design system utilizes color variables, which allow for easy color changes.
                    Users of this design system can easily change the color of the entire design
                    system by changing the color layers, for both light and dark themes. Other
                    variables can be adjusted as well, including: padding, margin, gaps, border
                    radii, and more.
                  </Paragraph>
                </YStack>
              </YStack>
            </XStack>
          </YStack>
        </YStack>
        <Image
          source={{
            uri: '/assets/portfolio/tamagui/mock6wide.png',
            width: '100%',
            height: 700,
          }}
        />

        <Button size="$10" marginVertical="$20">
          Next Project
        </Button>

        {/*<BottomBar />*/}
      </YStack>
    </>
  )
}
