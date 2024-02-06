import { H2, Stack, XStack, YStack, Image, H6, H1, Paragraph } from 'tamagui'
import { Link } from 'react-router-native'
import { Eyebrow } from '../components/Eyebrow'
import { Title } from '../components/Title'
import { UXUIDesign, DesignSystem, WebDevelopment, ChevronRight, Sparkle } from '../assets/icons'

export function Services() {
  return (
    <>
      <YStack m="auto" ai="center">
        <YStack
          m="$3"
          $gtXs={{ w: 600, m: 'auto' }}
          $gtSm={{ w: 800, fd: 'row' }}
          $gtMd={{ w: 1000 }}
          $gtLg={{ w: 1200 }}
        >
          <YStack f={1} $gtSm={{ w: 300 }} $gtLg={{ w: 400 }}>
            <YStack
              m="$3"
              f={1}
              bc="$color3"
              p="$6"
              br="$10"
              boc="$color4"
              bw="$1"
              jc="space-evenly"
              style={{
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
              }}
            >
              <XStack gap="$6" ai="center" p="$6" $gtSm={{ p: '$3' }}>
                <Stack w="$3" h="$3" ai="center" jc="center">
                  <UXUIDesign />
                </Stack>
                <H6>UX/UI Design</H6>
              </XStack>
              <XStack gap="$6" ai="center" p="$6" $gtSm={{ p: '$3' }}>
                <Stack w="$3" h="$3" ai="center" jc="center">
                  <DesignSystem />
                </Stack>
                <H6>Design Systems</H6>
              </XStack>
              <XStack gap="$6" ai="center" p="$6" $gtSm={{ p: '$3' }}>
                <Stack w="$3" h="$3" ai="center" jc="center">
                  <WebDevelopment />
                </Stack>
                <H6>Front-end Development</H6>
              </XStack>
            </YStack>
          </YStack>
          <YStack $gtSm={{ w: 500 }} $gtMd={{ w: 700 }} $gtLg={{ w: 800 }}>
            <YStack ai="center">
              <XStack gap="$2">
                <Sparkle />
                <H2 tt="uppercase">Services</H2>
                <Sparkle />
              </XStack>
            </YStack>
            <YStack>
              <YStack
                p="$3"
                bc="$color3"
                boc="$color4"
                bw="$1"
                br="$10"
                p="$6"
                gap="$6"
                m="$3"
                style={{
                  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                }}
              >
                <YStack bc="$color4" p="$6" boc="$color5" bw="$1" br="$7" gap="$3">
                  <Eyebrow>UX/UI Design</Eyebrow>
                  <Paragraph>
                    I started my professional career as a UX/UI designer upon joining Zimperium.
                    Ever since then, I have continued to hone my skills, branching out into other
                    areas of design and development. I've worked on several projects, from mobile to
                    desktop apps, and have experience working with a variety of design tools.
                  </Paragraph>
                </YStack>
                <YStack bc="$color4" p="$6" boc="$color5" bw="$1" br="$7" gap="$3">
                  <Eyebrow>Design Systems</Eyebrow>
                  <Paragraph>
                    I have always been passionate about design systems and their ability to help
                    teams work more efficiently and consistently. I have experience building design
                    systems from the ground up, as well as maintaining and improving existing ones.{' '}
                  </Paragraph>
                </YStack>
                <YStack bc="$color4" p="$6" boc="$color5" bw="$1" br="$7" gap="$3">
                  <Eyebrow>Front-end development</Eyebrow>
                  <Paragraph>
                    I have experience working with HTML, CSS, and JavaScript. I have also worked
                    with React, Angular, and Vue. I am currently learning TypeScript and Next.js.{' '}
                  </Paragraph>
                </YStack>
              </YStack>
            </YStack>
          </YStack>
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
