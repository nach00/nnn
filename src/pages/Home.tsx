import '@tamagui/core/reset.css'
import '../assets/styles.css'
import { Title } from '../components/Title'
import { Eyebrow } from '../components/Eyebrow'
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
              animation="bouncy"
              hoverStyle={{
                scale: 0.925,
                rotate: '2deg',
              }}
              pressStyle={{ scale: 0.875, rotate: '-2deg' }}
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
                  animation="bouncy"
                  hoverStyle={{
                    scale: 0.925,
                    rotate: '-1deg',
                    // backgroundColor: '$red3',
                    // borderColor: '$red4',
                  }}
                  pressStyle={{ scale: 0.875, rotate: '1deg' }}
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
                  animation="bouncy"
                  hoverStyle={{
                    scale: 0.925,
                    rotate: '-2deg',
                    // backgroundColor: '$green3',
                    // borderColor: '$green4',
                  }}
                  pressStyle={{ scale: 0.875, rotate: '2deg' }}
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
                  <Stack
                    col="$color11"
                    bc="$color4"
                    boc="$color5"
                    bw="$1"
                    ai="center"
                    w="$10"
                    h="$10"
                    ai="center"
                    gap="$2"
                    jc="center"
                    br="$7"
                  >
                    <UXUIDesign />
                    <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                      UX/UI Design
                    </Paragraph>
                  </Stack>
                  <Stack
                    col="$color11"
                    bc="$color4"
                    boc="$color5"
                    bw="$1"
                    ai="center"
                    w="$10"
                    h="$10"
                    ai="center"
                    gap="$2"
                    jc="center"
                    br="$7"
                  >
                    <DesignSystem />
                    <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                      Design Systems
                    </Paragraph>
                  </Stack>
                  <Stack
                    col="$color11"
                    bc="$color4"
                    boc="$color5"
                    bw="$1"
                    ai="center"
                    w="$10"
                    h="$10"
                    ai="center"
                    gap="$2"
                    jc="center"
                    br="$7"
                  >
                    <WebDevelopment />
                    <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                      Front-end Development
                    </Paragraph>
                  </Stack>
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
                <XStack ai="center" jc="space-evenly" h="100%" f={1}>
                  <Stack
                    col="$color11"
                    bc="$color4"
                    boc="$color5"
                    bw="$1"
                    ai="center"
                    w="$10"
                    h="$10"
                    ai="center"
                    gap="$2"
                    jc="center"
                    br="$7"
                  >
                    <UXUIDesign />
                    <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                      UX/UI Design
                    </Paragraph>
                  </Stack>
                  <Stack
                    col="$color11"
                    bc="$color4"
                    boc="$color5"
                    bw="$1"
                    ai="center"
                    w="$10"
                    h="$10"
                    ai="center"
                    gap="$2"
                    jc="center"
                    br="$7"
                  >
                    <DesignSystem />
                    <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                      Design Systems
                    </Paragraph>
                  </Stack>

                  <Stack
                    col="$color11"
                    bc="$color4"
                    boc="$color5"
                    bw="$1"
                    ai="center"
                    w="$10"
                    h="$10"
                    ai="center"
                    gap="$2"
                    jc="center"
                    br="$7"
                  >
                    <WebDevelopment />
                    <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                      Front-end Development
                    </Paragraph>
                  </Stack>
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
              <Stack
                col="$color11"
                bc="$color4"
                boc="$color5"
                bw="$1"
                ai="center"
                w="$10"
                h="$10"
                ai="center"
                gap="$2"
                jc="center"
                br="$7"
              >
                <YStack ai="center" jc="center" gap="$1" $gtXs={{ maw: '$10' }}>
                  <H4 color="$color11">5</H4>
                  <Paragraph ta="center" color="$color12" tt="uppercase" size="$1">
                    Years experience
                  </Paragraph>
                </YStack>
              </Stack>
              <Stack
                col="$color11"
                bc="$color4"
                boc="$color5"
                bw="$1"
                ai="center"
                w="$10"
                h="$10"
                ai="center"
                gap="$2"
                jc="center"
                br="$7"
              >
                <YStack ai="center" jc="center" gap="$1" $gtXs={{ maw: '$10' }}>
                  <H4 color="$color11">20+</H4>
                  <Paragraph ta="center" color="$color12" tt="uppercase" size="$1">
                    Clients worldwide
                  </Paragraph>
                </YStack>
              </Stack>
              <Stack
                col="$color11"
                bc="$color4"
                boc="$color5"
                bw="$1"
                ai="center"
                w="$10"
                h="$10"
                ai="center"
                gap="$2"
                jc="center"
                br="$7"
              >
                <YStack ai="center" jc="center" gap="$1" $gtXs={{ maw: '$10' }}>
                  <H4 color="$color11">100+</H4>
                  <Paragraph ta="center" color="$color12" tt="uppercase" size="$1">
                    Total projects
                  </Paragraph>
                </YStack>
              </Stack>
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
                  animation="bouncy"
                  hoverStyle={{
                    scale: 0.925,
                    rotate: '1deg',
                    // backgroundColor: '$purple3',
                    // borderColor: '$purple4',
                  }}
                  pressStyle={{ scale: 0.875, rotate: '-1deg' }}
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
                  animation="bouncy"
                  hoverStyle={{
                    scale: 0.925,
                    rotate: '-3deg',
                    // backgroundColor: '$pink3',
                    // borderColor: '$pink4',
                  }}
                  pressStyle={{ scale: 0.875, rotate: '3deg' }}
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
      <XStack
        m="auto"
        h={600}
        w="100vw"
        $gtXs={{ w: 600, h: 600 }}
        $gtSm={{ w: 800, h: 400 }}
        $gtMd={{ w: 1000, h: 400 }}
        $gtLg={{ w: 1200, h: 400 }}
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
          <YStack ai="center" gap="$2" h="100%" f={1}>
            <YStack gap="$2" $gtSm={{ fd: 'row', gap: '$2' }}>
              <XStack gap="$2">
                <Stack
                  col="$color11"
                  bc="$color4"
                  boc="$color5"
                  bw="$1"
                  ai="center"
                  w="$10"
                  h="$10"
                  ai="center"
                  gap="$2"
                  jc="center"
                  br="$7"
                  p="$1"
                >
                  <Image
                    source={{
                      uri: '/assets/logos/baker-white.svg',
                      width: 30,
                      height: 30,
                    }}
                  />
                  <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                    Baker & Taylor
                  </Paragraph>
                </Stack>
                <Stack
                  col="$color11"
                  bc="$color4"
                  boc="$color5"
                  bw="$1"
                  ai="center"
                  w="$10"
                  h="$10"
                  ai="center"
                  gap="$2"
                  jc="center"
                  br="$7"
                  p="$1"
                >
                  <Image
                    source={{
                      uri: '/assets/logos/banfield-white.svg',
                      width: 30,
                      height: 30,
                    }}
                  />
                  <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                    Banfield Pet Hospital
                  </Paragraph>
                </Stack>
                <Stack
                  col="$color11"
                  bc="$color4"
                  boc="$color5"
                  bw="$1"
                  ai="center"
                  w="$10"
                  h="$10"
                  ai="center"
                  gap="$2"
                  jc="center"
                  br="$7"
                  p="$1"
                >
                  <Image
                    source={{
                      uri: '/assets/logos/bimbo-white.svg',
                      width: 30,
                      height: 30,
                    }}
                  />
                  <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                    Bimbo Bakeries
                  </Paragraph>
                </Stack>
              </XStack>
              <XStack gap="$2">
                <Stack
                  col="$color11"
                  bc="$color4"
                  boc="$color5"
                  bw="$1"
                  ai="center"
                  w="$10"
                  h="$10"
                  ai="center"
                  gap="$2"
                  jc="center"
                  br="$7"
                  p="$1"
                >
                  <Image
                    source={{
                      uri: '/assets/logos/ggwp-white.svg',
                      width: 30,
                      height: 30,
                    }}
                  />
                  <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                    Good Game, Well Played
                  </Paragraph>
                </Stack>
                <Stack
                  col="$color11"
                  bc="$color4"
                  boc="$color5"
                  bw="$1"
                  ai="center"
                  w="$10"
                  h="$10"
                  ai="center"
                  gap="$2"
                  jc="center"
                  br="$7"
                  p="$1"
                >
                  <Image
                    source={{
                      uri: '/assets/logos/njevity-white.svg',
                      width: 30,
                      height: 30,
                    }}
                  />
                  <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                    Njevity
                  </Paragraph>
                </Stack>
                <Stack
                  col="$color11"
                  bc="$color4"
                  boc="$color5"
                  bw="$1"
                  ai="center"
                  w="$10"
                  h="$10"
                  ai="center"
                  gap="$2"
                  jc="center"
                  br="$7"
                  p="$1"
                >
                  <Image
                    source={{
                      uri: '/assets/logos/pawzpurr-white.svg',
                      width: 30,
                      height: 30,
                    }}
                  />
                  <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                    PawzPurr
                  </Paragraph>
                </Stack>
              </XStack>
            </YStack>
            <YStack gap="$2" $gtSm={{ fd: 'row', gap: '$2' }}>
              <XStack gap="$2">
                <Stack
                  col="$color11"
                  bc="$color4"
                  boc="$color5"
                  bw="$1"
                  ai="center"
                  w="$10"
                  h="$10"
                  ai="center"
                  gap="$2"
                  jc="center"
                  br="$7"
                  p="$1"
                >
                  <Image
                    source={{
                      uri: '/assets/logos/rfid-white.svg',
                      width: 30,
                      height: 30,
                    }}
                  />
                  <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                    RFID Interlock
                  </Paragraph>
                </Stack>
                <Stack
                  col="$color11"
                  bc="$color4"
                  boc="$color5"
                  bw="$1"
                  ai="center"
                  w="$10"
                  h="$10"
                  ai="center"
                  gap="$2"
                  jc="center"
                  br="$7"
                  p="$1"
                >
                  <Image
                    source={{
                      uri: '/assets/logos/scoutflix-white.svg',
                      width: 30,
                      height: 30,
                    }}
                  />
                  <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                    ScoutFlix
                  </Paragraph>
                </Stack>
                <Stack
                  col="$color11"
                  bc="$color4"
                  boc="$color5"
                  bw="$1"
                  ai="center"
                  w="$10"
                  h="$10"
                  ai="center"
                  gap="$2"
                  jc="center"
                  br="$7"
                  p="$1"
                >
                  <Image
                    source={{
                      uri: '/assets/logos/sprint-white.svg',
                      width: 30,
                      height: 30,
                    }}
                  />
                  <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                    Sprint
                  </Paragraph>
                </Stack>
              </XStack>
              <XStack gap="$2">
                <Stack
                  col="$color11"
                  bc="$color4"
                  boc="$color5"
                  bw="$1"
                  ai="center"
                  w="$10"
                  h="$10"
                  ai="center"
                  gap="$2"
                  jc="center"
                  br="$7"
                  p="$1"
                >
                  <Image
                    source={{
                      uri: '/assets/logos/topgolf-white.svg',
                      width: 30,
                      height: 30,
                    }}
                  />
                  <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                    TopGolf
                  </Paragraph>
                </Stack>
                <Stack
                  col="$color11"
                  bc="$color4"
                  boc="$color5"
                  bw="$1"
                  ai="center"
                  w="$10"
                  h="$10"
                  ai="center"
                  gap="$2"
                  jc="center"
                  br="$7"
                  p="$1"
                >
                  <Image
                    source={{
                      uri: '/assets/logos/upquest-white.svg',
                      width: 30,
                      height: 30,
                    }}
                  />
                  <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                    Upquest
                  </Paragraph>
                </Stack>
                <Stack
                  col="$color11"
                  bc="$color4"
                  boc="$color5"
                  bw="$1"
                  ai="center"
                  w="$10"
                  h="$10"
                  ai="center"
                  gap="$2"
                  jc="center"
                  br="$7"
                  p="$1"
                >
                  <Image
                    source={{
                      uri: '/assets/logos/waltz-white.svg',
                      width: 30,
                      height: 30,
                    }}
                  />
                  <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                    Waltz Health
                  </Paragraph>
                </Stack>
              </XStack>
            </YStack>
          </YStack>

          <XStack color="$color9" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
            <Title>Past clients include</Title>
          </XStack>
        </Stack>
      </XStack>
    </>
  )
}
