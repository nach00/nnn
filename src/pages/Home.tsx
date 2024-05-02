import '@tamagui/core/reset.css'
import '../assets/styles.css'
import { Title } from '../components/Title'
import { Eyebrow } from '../components/Eyebrow'
import { UXUIDesign, DesignSystem, WebDevelopment, ChevronRight } from '../assets/icons'
import { H4, Image, Paragraph, Stack, XStack, YStack } from 'tamagui'
import { Link } from 'react-router-native'
import { MiniHomeCard, MiniHomeCardNoBg, SmallHomeCard } from '../components/HomeCards'
import { SmallCaps } from '../components/SmallCaps'

export const Home = () => {
  return (
    <>
      <YStack ai="center" $gtSm={{ flexDirection: 'row', justifyContent: 'center' }}>
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
                // rotate: '2deg',
              }}
              pressStyle={{
                scale: 0.875,
                // rotate: '-2deg'
              }}
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
              <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
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
          <YStack
            $gtXs={{ flexDirection: 'row' }}
            $gtSm={{ flexDirection: 'column' }}
            $gtMd={{ flexDirection: 'row' }}
          >
            <Link to="/projects" underlayColor="$color9">
              <SmallHomeCard>
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

                <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1}>
                  <Title>Projects</Title>
                  <Stack>
                    <ChevronRight />
                  </Stack>
                </XStack>
              </SmallHomeCard>
            </Link>
            <Link to="/projects/zconsole" underlayColor="$color9">
              <SmallHomeCard>
                <Stack ai="center" jc="center" h="100%" f={1}>
                  <Image
                    source={{
                      uri: '/assets/portfolio/zimperium/logo-zconsole-transparent.png',
                      // uri: '/assets/icons/tamagui-logo.svg',

                      width: 180,
                      height: 130,
                    }}
                    $gtSm={{ scale: 1 }}
                    $gtMd={{ scale: 0.75 }}
                    $gtLg={{ scale: 1 }}
                  />
                </Stack>

                <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1}>
                  <Title>Featured</Title>
                  <Stack>
                    <ChevronRight />
                  </Stack>
                </XStack>
              </SmallHomeCard>
            </Link>
          </YStack>
          {/*<Link to="/services" underlayColor="$color9">*/}
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
              // hoverStyle={{
              //   scale: 0.925,
              //   rotate: '3deg',
              //   backgroundColor: '$yellow3',
              //   borderColor: '$yellow4',
              // }}
              // pressStyle={{
              //   scale: 0.875,
              //   rotate: '-3deg'
              // }}
              boc="$color4"
              bw="$1"
              br="$10"
              w="100%"
              style={{
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
              }}
            >
              <XStack ai="center" jc="space-evenly" h="100%" f={1} $xs={{ flexDirection: 'row' }}>
                <MiniHomeCard>
                  <UXUIDesign />
                  <Paragraph
                    textAlign="center"
                    tt="uppercase"
                    size="$1"
                    color="$color12"
                    fontWeight="bold"
                  >
                    UX/UI Design
                  </Paragraph>
                </MiniHomeCard>
                <MiniHomeCard>
                  <DesignSystem />
                  <Paragraph
                    textAlign="center"
                    tt="uppercase"
                    size="$1"
                    color="$color12"
                    fontWeight="bold"
                  >
                    Design Systems
                  </Paragraph>
                </MiniHomeCard>
                <MiniHomeCard>
                  <WebDevelopment />
                  <Paragraph
                    textAlign="center"
                    tt="uppercase"
                    size="$1"
                    color="$color12"
                    fontWeight="bold"
                  >
                    Front-end Development
                  </Paragraph>
                </MiniHomeCard>
              </XStack>

              <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
                <Title>Services</Title>
                {/*<ChevronRight />*/}
              </XStack>
            </Stack>
          </XStack>
          {/*</Link>*/}
        </YStack>
      </YStack>
      <YStack ai="center" $gtSm={{ flexDirection: 'row', justifyContent: 'center' }}>
        <YStack>
          <YStack
            $gtXs={{ flexDirection: 'row' }}
            $gtSm={{ flexDirection: 'column' }}
            $gtMd={{ flexDirection: 'row' }}
          ></YStack>
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
                  // rotate: '3deg',
                  // backgroundColor: '$yellow3',
                  // borderColor: '$yellow4',
                }}
                pressStyle={{
                  scale: 0.875,
                  // rotate: '-3deg'
                }}
                boc="$color4"
                bw="$1"
                br="$10"
                w="100%"
                style={{
                  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                }}
              >
                <XStack ai="center" jc="space-evenly" h="100%" f={1}>
                  <MiniHomeCard>
                    <UXUIDesign />
                    <SmallCaps>UX/UI Design</SmallCaps>
                  </MiniHomeCard>
                  <MiniHomeCard>
                    <DesignSystem />
                    <SmallCaps>Design Systems</SmallCaps>
                  </MiniHomeCard>

                  <MiniHomeCard>
                    <WebDevelopment />
                    <SmallCaps>Front-end Development</SmallCaps>
                  </MiniHomeCard>
                </XStack>

                <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
                  <Title>Services</Title>
                  <ChevronRight />
                </XStack>
              </Stack>
            </XStack>
          </Link>
        </YStack>
      </YStack>
      <YStack ai="center" $gtSm={{ flexDirection: 'row', justifyContent: 'center' }}>
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
              <MiniHomeCard>
                <YStack ai="center" jc="center" gap="$1" $gtXs={{ maw: '$10' }}>
                  <H4 color="$color11">5</H4>
                  <SmallCaps>Years experience</SmallCaps>
                </YStack>
              </MiniHomeCard>
              <MiniHomeCard>
                <YStack ai="center" jc="center" gap="$1" $gtXs={{ maw: '$10' }}>
                  <H4 color="$color11">20+</H4>
                  <SmallCaps>Clients worldwide</SmallCaps>
                </YStack>
              </MiniHomeCard>
              <MiniHomeCard>
                <YStack ai="center" jc="center" gap="$1" $gtXs={{ maw: '$10' }}>
                  <H4 color="$color11">100+</H4>
                  <SmallCaps>Total projects</SmallCaps>
                </YStack>
              </MiniHomeCard>
            </XStack>
          </Stack>
        </XStack>
        <YStack>
          <YStack
            $gtXs={{ flexDirection: 'row' }}
            $gtSm={{ flexDirection: 'column' }}
            $gtMd={{ flexDirection: 'row' }}
          >
            <Link to="/resume" underlayColor="$color9">
              <SmallHomeCard>
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

                <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1}>
                  <Title>Resume</Title>
                  <Stack>
                    <ChevronRight />
                  </Stack>
                </XStack>
              </SmallHomeCard>
            </Link>
            <a
              href="https://darntoot.in"
              underlayColor="$color9"
              style={{ textDecoration: 'none' }}
            >
              <SmallHomeCard>
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

                <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1}>
                  <Title>Promo</Title>
                  <Stack>
                    <ChevronRight />
                  </Stack>
                </XStack>
              </SmallHomeCard>
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
          <XStack jc="center">
            <Title>Past clients include</Title>
          </XStack>

          <YStack ai="center" jc="center" gap="$2" h="100%" f={1}>
            <YStack gap="$2" $gtSm={{ flexDirection: 'row', gap: '$2' }}>
              <XStack gap="$2">
                <MiniHomeCardNoBg>
                  <Image
                    source={{
                      uri: '/assets/logos/baker-white.svg',
                      width: 50,
                      height: 50,
                    }}
                  />
                  <SmallCaps>Baker & Taylor</SmallCaps>
                </MiniHomeCardNoBg>
                <MiniHomeCardNoBg>
                  <Image
                    source={{
                      uri: '/assets/logos/banfield-white.svg',
                      width: 50,
                      height: 50,
                    }}
                  />
                  <SmallCaps>Banfield Pet Hospital</SmallCaps>
                </MiniHomeCardNoBg>
                <MiniHomeCardNoBg>
                  <Image
                    source={{
                      uri: '/assets/logos/bimbo-white.svg',
                      width: 50,
                      height: 50,
                    }}
                  />
                  <SmallCaps>Bimbo Bakeries</SmallCaps>
                </MiniHomeCardNoBg>
              </XStack>
              <XStack gap="$2">
                <MiniHomeCardNoBg>
                  <Image
                    source={{
                      uri: '/assets/logos/ggwp-white.svg',
                      width: 50,
                      height: 50,
                    }}
                  />
                  <SmallCaps>Good Game, Well Played</SmallCaps>
                </MiniHomeCardNoBg>
                <MiniHomeCardNoBg>
                  <Image
                    source={{
                      uri: '/assets/logos/njevity-white.svg',
                      width: 50,
                      height: 50,
                    }}
                  />
                  <SmallCaps>Njevity</SmallCaps>
                </MiniHomeCardNoBg>
                <MiniHomeCardNoBg>
                  <Image
                    source={{
                      uri: '/assets/logos/pawzpurr-white.svg',
                      width: 50,
                      height: 50,
                    }}
                  />
                  <SmallCaps>PawzPurr</SmallCaps>
                </MiniHomeCardNoBg>
              </XStack>
            </YStack>
            <YStack gap="$2" $gtSm={{ flexDirection: 'row', gap: '$2' }}>
              <XStack gap="$2">
                <MiniHomeCardNoBg>
                  <Image
                    source={{
                      uri: '/assets/logos/rfid-white.svg',
                      width: 50,
                      height: 50,
                    }}
                  />
                  <SmallCaps>RFID Interlock</SmallCaps>
                </MiniHomeCardNoBg>
                <MiniHomeCardNoBg>
                  <Image
                    source={{
                      uri: '/assets/logos/scoutify-white.svg',
                      width: 50,
                      height: 50,
                    }}
                  />
                  <SmallCaps>Scoutify</SmallCaps>
                </MiniHomeCardNoBg>
                <MiniHomeCardNoBg>
                  <Image
                    source={{
                      uri: '/assets/logos/sprint-white.svg',
                      width: 50,
                      height: 50,
                    }}
                  />
                  <SmallCaps>Sprint</SmallCaps>
                </MiniHomeCardNoBg>
              </XStack>
              <XStack gap="$2">
                <MiniHomeCardNoBg>
                  <Image
                    source={{
                      uri: '/assets/logos/topgolf-white.svg',
                      width: 50,
                      height: 50,
                    }}
                  />
                  <SmallCaps>TopGolf</SmallCaps>
                </MiniHomeCardNoBg>
                <MiniHomeCardNoBg>
                  <Image
                    source={{
                      uri: '/assets/logos/upquest-white.svg',
                      width: 50,
                      height: 50,
                    }}
                  />
                  <SmallCaps>Upquest</SmallCaps>
                </MiniHomeCardNoBg>
                <MiniHomeCardNoBg>
                  <Image
                    source={{
                      uri: '/assets/logos/waltz-white.svg',
                      width: 50,
                      height: 50,
                    }}
                  />
                  <SmallCaps>Waltz Health</SmallCaps>
                </MiniHomeCardNoBg>
              </XStack>
            </YStack>
          </YStack>
        </Stack>
      </XStack>
    </>
  )
}
