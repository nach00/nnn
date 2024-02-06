import '@tamagui/core/reset.css'
import '../assets/styles.css'
import { Title } from '../components/Title'
import { Eyebrow } from '../components/Eyebrow'
import { SmallCard, Card, StaticCard } from '../components/Card'
import { UXUIDesign, DesignSystem, WebDevelopment, Strategy, ChevronRight } from '../assets/icons'

import { H1, H4, Image, Paragraph, Stack, XStack, YStack } from 'tamagui'
import { Link } from 'react-router-native'

export const Home = () => {
  return (
    <>
      <YStack ai="center" $gtSm={{ fd: 'row', jc: 'center' }}>
        <Link to="/about" underlayColor="$color9">
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
              // animation="bouncy"
              // hoverStyle={{
              //   scale: 0.925,
              //   rotate: '2deg',
              //   backgroundColor: '$blue3',
              //   borderColor: '$blue4',
              // }}
              // pressStyle={{ scale: 0.875, rotate: '-2deg' }}
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
              <XStack color="$color9" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
                <YStack f={1} gap="$1">
                  <Eyebrow>Designer & Developer</Eyebrow>
                  <Title>Natcha Pradappet</Title>
                </YStack>
                <Stack>
                  <ChevronRight />
                </Stack>
              </XStack>
            </Stack>
          </XStack>
        </Link>
        <YStack>
          <YStack $gtXs={{ fd: 'row' }} $gtSm={{ fd: 'column' }} $gtMd={{ fd: 'row' }}>
            <Link to="/projects" underlayColor="$color9">
              <XStack
                h={360}
                w="100vw"
                $gtXs={{ w: 300, h: 300 }}
                $gtSm={{ w: 300, h: 300 }}
                $gtMd={{ w: 250, h: 250 }}
                $gtLg={{ w: 300, h: 300 }}
                p="$3"
              >
                <Stack
                  bc="$color3"
                  p="$6"
                  // animation="bouncy"
                  // hoverStyle={{
                  //   scale: 0.925,
                  //   rotate: '-1deg',
                  //   backgroundColor: '$red3',
                  //   borderColor: '$red4',
                  // }}
                  // pressStyle={{ scale: 0.875, rotate: '1deg' }}
                  boc="$color4"
                  bw="$1"
                  br="$10"
                  w="100%"
                  style={{
                    boxShadow:
                      '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                  }}
                >
                  <Stack ai="center" jc="center" h="100%" f={1}>
                    <Image
                      source={{
                        uri: '/assets/portfolio/tamagui/laptop-transparent-bg.png',
                        width: 150,
                        height: 150,
                      }}
                      $gtSm={{ scale: 1 }}
                      $gtMd={{ scale: 0.75 }}
                      $gtLg={{ scale: 1 }}
                    />
                  </Stack>

                  <XStack color="$color9" jc="space-between" ai="flex-end" w="100%" f={1}>
                    <Title>Projects</Title>
                    <Stack>
                      <ChevronRight />
                    </Stack>
                  </XStack>
                </Stack>
              </XStack>
            </Link>
            <Link to="/projects/tamagui" underlayColor="$color9">
              <XStack
                h={360}
                w="100vw"
                $gtXs={{ w: 300, h: 300 }}
                $gtSm={{ w: 300, h: 300 }}
                $gtMd={{ w: 250, h: 250 }}
                $gtLg={{ w: 300, h: 300 }}
                p="$3"
              >
                <Stack
                  bc="$color3"
                  p="$6"
                  // animation="bouncy"
                  // hoverStyle={{
                  //   scale: 0.925,
                  //   rotate: '-2deg',
                  //   backgroundColor: '$green3',
                  //   borderColor: '$green4',
                  // }}
                  // pressStyle={{ scale: 0.875, rotate: '2deg' }}
                  boc="$color4"
                  bw="$1"
                  br="$10"
                  w="100%"
                  style={{
                    boxShadow:
                      '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                  }}
                >
                  <Stack ai="center" jc="center" h="100%" f={1}>
                    <Image
                      source={{
                        uri: '/assets/icons/tamagui-logo.svg',
                        width: 160,
                        height: 120,
                      }}
                      $gtSm={{ scale: 1 }}
                      $gtMd={{ scale: 0.75 }}
                      $gtLg={{ scale: 1 }}
                    />
                  </Stack>

                  <XStack color="$color9" jc="space-between" ai="flex-end" w="100%" f={1}>
                    <Title>Featured</Title>
                    <Stack>
                      <ChevronRight />
                    </Stack>
                  </XStack>
                </Stack>
              </XStack>
            </Link>
          </YStack>
          <Link to="/services" underlayColor="$color9">
            <XStack
              h={360}
              w="100vw"
              $gtXs={{ w: 600, h: 300 }}
              $gtSm={{ display: 'none' }}
              $gtMd={{ w: 500, h: 250, display: 'flex' }}
              $gtLg={{ w: 600, h: 300, display: 'flex' }}
              p="$3"
            >
              <Stack
                bc="$color3"
                p="$6"
                animation="bouncy"
                hoverStyle={{
                  scale: 0.925,
                  rotate: '3deg',
                  // backgroundColor: '$yellow3',
                  // borderColor: '$yellow4',
                }}
                pressStyle={{ scale: 0.875, rotate: '-3deg' }}
                boc="$color4"
                bw="$1"
                br="$10"
                w="100%"
                style={{
                  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                }}
              >
                <XStack ai="center" jc="space-evenly" h="100%" f={1} $xs={{ fd: 'row' }}>
                  <SmallCard>
                    <UXUIDesign />
                    <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                      UX/UI Design
                    </Paragraph>
                  </SmallCard>
                  <SmallCard>
                    <DesignSystem />
                    <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                      Design Systems
                    </Paragraph>
                  </SmallCard>
                  <SmallCard>
                    <WebDevelopment />
                    <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                      Front-end Development
                    </Paragraph>
                  </SmallCard>
                </XStack>

                <XStack color="$color9" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
                  <Title>Services</Title>
                  <ChevronRight />
                </XStack>
              </Stack>
            </XStack>
          </Link>
        </YStack>
      </YStack>
      <YStack ai="center" $gtSm={{ fd: 'row', jc: 'center' }}>
        <YStack>
          <YStack $gtXs={{ fd: 'row' }} $gtSm={{ fd: 'column' }} $gtMd={{ fd: 'row' }}></YStack>
          <Link to="/services" underlayColor="$color9">
            <XStack
              h={360}
              w="100vw"
              display="none"
              $gtXs={{ display: 'none' }}
              $gtSm={{ w: 800, h: 300, display: 'flex' }}
              $gtLg={{ w: 600, h: 300, display: 'none' }}
              $gtMd={{ w: 500, h: 250, display: 'none' }}
              p="$3"
            >
              <Stack
                bc="$color3"
                p="$6"
                // animation="bouncy"
                // hoverStyle={{
                //   scale: 0.925,
                //   rotate: '3deg',
                //   backgroundColor: '$yellow3',
                //   borderColor: '$yellow4',
                // }}
                // pressStyle={{ scale: 0.875, rotate: '-3deg' }}
                boc="$color4"
                bw="$1"
                br="$10"
                w="100%"
                style={{
                  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                }}
              >
                <XStack ai="center" jc="space-evenly" h="100%" f={1}>
                  <SmallCard>
                    <UXUIDesign />
                    <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                      UX/UI Design
                    </Paragraph>
                  </SmallCard>
                  <SmallCard>
                    <DesignSystem />
                    <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                      Design Systems
                    </Paragraph>
                  </SmallCard>
                  <SmallCard>
                    <WebDevelopment />
                    <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                      Front-end Development
                    </Paragraph>
                  </SmallCard>
                </XStack>

                <XStack color="$color9" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
                  <Title>Services</Title>
                  <ChevronRight />
                </XStack>
              </Stack>
            </XStack>
          </Link>
        </YStack>
      </YStack>
      <YStack ai="center" $gtSm={{ fd: 'row', jc: 'center' }}>
        <XStack
          h={360}
          w="100vw"
          $gtXs={{ w: 600, h: 300 }}
          $gtSm={{ w: 300, h: 600 }}
          $gtMd={{ w: 500, h: 250 }}
          $gtLg={{ w: 600, h: 300 }}
          p="$3"
        >
          <Stack
            bc="$color3"
            p="$6"
            boc="$color4"
            bw="$1"
            br="$10"
            w="100%"
            style={{
              boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            }}
          >
            <XStack
              justifyContent="space-evenly"
              w="100%"
              ai="center"
              h="100%"
              $gtSm={{ flexDirection: 'column' }}
              $gtMd={{ flexDirection: 'row' }}
            >
              <SmallCard>
                <YStack ai="center" jc="center" gap="$1" $gtXs={{ maw: '$10' }}>
                  <H4 color="$color11">5</H4>
                  <Paragraph ta="center" color="$color12" tt="uppercase" size="$1">
                    Years experience
                  </Paragraph>
                </YStack>
              </SmallCard>
              <SmallCard>
                <YStack ai="center" jc="center" gap="$1" $gtXs={{ maw: '$10' }}>
                  <H4 color="$color11">20+</H4>
                  <Paragraph ta="center" color="$color12" tt="uppercase" size="$1">
                    Clients worldwide
                  </Paragraph>
                </YStack>
              </SmallCard>
              <SmallCard>
                <YStack ai="center" jc="center" gap="$1" $gtXs={{ maw: '$10' }}>
                  <H4 color="$color11">100+</H4>
                  <Paragraph ta="center" color="$color12" tt="uppercase" size="$1">
                    Total projects
                  </Paragraph>
                </YStack>
              </SmallCard>
            </XStack>{' '}
          </Stack>
        </XStack>
        <YStack>
          <YStack $gtXs={{ fd: 'row' }} $gtSm={{ fd: 'column' }} $gtMd={{ fd: 'row' }}>
            <Link to="/resume" underlayColor="$color9">
              <XStack
                h={360}
                w="100vw"
                $gtXs={{ w: 300, h: 300 }}
                $gtSm={{ w: 500, h: 300 }}
                $gtMd={{ w: 250, h: 250 }}
                $gtLg={{ w: 300, h: 300 }}
                p="$3"
              >
                <Stack
                  bc="$color3"
                  p="$6"
                  // animation="bouncy"
                  // hoverStyle={{
                  //   scale: 0.925,
                  //   rotate: '1deg',
                  //   backgroundColor: '$purple3',
                  //   borderColor: '$purple4',
                  // }}
                  // pressStyle={{ scale: 0.875, rotate: '-1deg' }}
                  boc="$color4"
                  bw="$1"
                  br="$10"
                  w="100%"
                  style={{
                    boxShadow:
                      '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                  }}
                >
                  <Stack ai="center" jc="center" h="100%" f={1}>
                    <Image
                      source={{
                        uri: '/assets/icons/fade1.svg',
                        width: 150,
                        height: 150,
                      }}
                      $gtSm={{ scale: 1 }}
                      $gtMd={{ scale: 0.75 }}
                      $gtLg={{ scale: 1 }}
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
            <a
              href="https://darntoot.in"
              underlayColor="$color9"
              style={{ textDecoration: 'none' }}
            >
              <XStack
                h={360}
                w="100vw"
                $gtXs={{ w: 300, h: 300 }}
                $gtSm={{ w: 500, h: 300 }}
                $gtMd={{ w: 250, h: 250 }}
                $gtLg={{ w: 300, h: 300 }}
                p="$3"
              >
                <Stack
                  bc="$color3"
                  p="$6"
                  // animation="bouncy"
                  // hoverStyle={{
                  //   scale: 0.925,
                  //   rotate: '-3deg',
                  //   backgroundColor: '$pink3',
                  //   borderColor: '$pink4',
                  // }}
                  // pressStyle={{ scale: 0.875, rotate: '3deg' }}
                  boc="$color4"
                  bw="$1"
                  br="$10"
                  w="100%"
                  style={{
                    boxShadow:
                      '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                  }}
                >
                  <Stack ai="center" jc="center" h="100%" f={1}>
                    <Image
                      source={{
                        uri: '/assets/photos/hazel.png',
                        width: 150,
                        height: 150,
                      }}
                      $gtSm={{ scale: 1 }}
                      $gtMd={{ scale: 0.75 }}
                      $gtLg={{ scale: 1 }}
                    />
                  </Stack>

                  <XStack color="$color9" jc="space-between" ai="flex-end" w="100%" f={1}>
                    <Title>Blog</Title>
                    <Stack>
                      <ChevronRight />
                    </Stack>
                  </XStack>
                </Stack>
              </XStack>
            </a>
          </YStack>
        </YStack>
      </YStack>
    </>
  )
}
