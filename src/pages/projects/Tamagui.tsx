import { H2, H6, Stack, H1, Paragraph, XStack, YStack, Image, Button } from 'tamagui'
import { YStack } from 'tamagui'
import { Eyebrow } from '../../components/Eyebrow'
import { Title } from '../../components/Title'
import { Link } from 'react-router-native'

export function Tamagui() {
  return (
    <>
      <YStack>
        <YStack
          maw={1200}
          marginHorizontal="auto"
          marginVertical="$6"
          w="100%"
          paddingHorizontal="$3"
        >
          <Eyebrow>Design system</Eyebrow>
          <Title>Tamagui</Title>
        </YStack>
        <YStack bc="$color9" h={300} $gtXs={{ h: 400 }} $gtSm={{ h: 550 }} $gtXl={{ h: 800 }}>
          <Image
            source={{
              uri: '/assets/portfolio/tamagui/laptop-tamagui-mock.png',
              width: '100%',
              height: '100%',
            }}
          />
        </YStack>
        {/*<Image*/}
        {/*  source={{*/}
        {/*    uri: '/assets/portfolio/tamagui/mock5wide.png',*/}
        {/*    width: '100vw',*/}
        {/*    height: 300,*/}
        {/*  }}*/}
        {/*/>*/}
        <YStack maw={1200} m="auto">
          <YStack
            m="$3"
            bc="$color3"
            p="$6"
            br="$10"
            boc="$color4"
            bw="$1"
            gap="$6"
            $gtSm={{ fd: 'row' }}
            style={{
              boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            }}
          >
            <YStack
              bc="$color4"
              p="$6"
              br="$7"
              boc="$color5"
              bw="$1"
              $gtSm={{ w: '100%', f: 1 }}
              gap="$6"
            >
              <Eyebrow>What is a design system?</Eyebrow>
              <Paragraph>
                A design system is a set of standards to manage design at scale by reducing
                redundancy while creating a shared language and visual consistency across different
                pages and channels.
              </Paragraph>
              <a
                href="https://www.figma.com/file/Vj2tgOgM43Kiq1I4VdfR0h/Tamagui-v1.2.1-Community?type=design&is-community-duplicate=1&fuid="
                style={{ textDecoration: 'none' }}
              >
                <Button theme="active" w="100%">
                  Open in Figma
                </Button>
              </a>
              <a
                href="https://www.figma.com/community/file/1326593766534421119"
                style={{ textDecoration: 'none' }}
              >
                <Button w="100%" boc="$color7" bw="$1">
                  Figma Community page
                </Button>
              </a>
            </YStack>
            <YStack
              bc="$color4"
              p="$6"
              br="$7"
              boc="$color5"
              bw="$1"
              $gtSm={{ w: '100%', f: 1 }}
              gap="$6"
            >
              <Eyebrow>What is Tamagui?</Eyebrow>
              <Paragraph>
                Tamagui is a modular style solution for React - web or native. It aims to compete
                with the best web-only style libraries, while bringing many much-needed styling
                capabilities to React Native.{' '}
              </Paragraph>
              <a href="https://tamagui.dev" style={{ textDecoration: 'none' }}>
                <Button theme="active" w="100%">
                  Tamagui website
                </Button>
              </a>
            </YStack>
          </YStack>
          <YStack
            backgroundColor="$color3"
            gap="$6"
            p="$6"
            br="$12"
            m="$3"
            boc="$color4"
            bw="$1"
            $gtSm={{ fd: 'row' }}
            style={{
              boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            }}
          >
            <YStack
              p="$6"
              f={1}
              backgroundColor="$color4"
              br="$7"
              miw="$20"
              gap="$4"
              boc="$color5"
              bw="$1"
            >
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
            </YStack>
            <YStack f={1} gap="$6">
              <Eyebrow>OVERVIEW</Eyebrow>
              <YStack gap="$6">
                <Paragraph>
                  Towards the end of 2023, I started developing my website (this website) and needed
                  to decide on a front-end framework. There were several at the time, but I decided
                  to use Tamagui, which is currently a very new framework. Seeing that the Figma
                  design system at the time was severly out dated, I reached out to Nate, the
                  creator of Tamagui, to see if I could help.
                </Paragraph>
                <Paragraph>
                  This design system utilizes color variables, which allow for easy color changes.
                  Users of this design system can easily change the color of the entire design
                  system by changing the color layers, for both light and dark themes. Other
                  variables can be adjusted as well, including: padding, margin, gaps, border radii,
                  and more.
                </Paragraph>
              </YStack>
            </YStack>
          </YStack>
          <YStack m="$3" gap="$4">
            {/*<Stack bc="$color9" br="$10" h={300} $gtXs={{ h: 400 }}>*/}
            {/*  <Image*/}
            {/*    source={{*/}
            {/*      uri: '/assets/portfolio/tamagui/mock5wide.png',*/}
            {/*      width: '100%',*/}
            {/*      height: '100%',*/}
            {/*    }}*/}
            {/*    br="$10"*/}
            {/*  />*/}
            {/*</Stack>*/}
            <YStack gap="$4" $gtSm={{ fd: 'row' }}>
              <Stack h={300} $gtXs={{ h: 400 }} $gtSm={{ w: '100%', f: 1 }}>
                <Image
                  source={{
                    uri: '/assets/portfolio/tamagui/button-variations.png',
                    width: '100%',
                    height: '100%',
                  }}
                  br="$10"
                />
              </Stack>
              <Stack h={300} $gtXs={{ h: 400 }} $gtSm={{ w: '100%', f: 1 }}>
                <Image
                  source={{
                    uri: '/assets/portfolio/tamagui/input-variations.png',
                    width: '100%',
                    height: '100%',
                  }}
                  br="$10"
                />
              </Stack>
            </YStack>
            <YStack gap="$4" $gtSm={{ fd: 'row' }}>
              <Stack h={300} $gtXs={{ h: 400 }} $gtSm={{ w: '100%', f: 1 }}>
                <Image
                  source={{
                    uri: '/assets/portfolio/tamagui/color-theme-adjust.png',
                    width: '100%',
                    height: '100%',
                  }}
                  br="$10"
                />
              </Stack>
              <Stack h={300} $gtXs={{ h: 400 }} $gtSm={{ w: '100%', f: 1 }}>
                <Image
                  source={{
                    uri: '/assets/portfolio/tamagui/dark-gray-2.png',
                    width: '100%',
                    height: '100%',
                  }}
                  br="$10"
                />
              </Stack>
            </YStack>
          </YStack>
        </YStack>
        <Image
          source={{
            uri: '/assets/portfolio/tamagui/mock6wide.png',
            width: '100%',
            height: 700,
          }}
        />
        {/*<Button size="$10" marginVertical="$20">*/}
        {/*  Next Project*/}
        {/*</Button>*/}
      </YStack>
    </>
  )
}
