import { H2, Stack, XStack, YStack, Image, H5 } from 'tamagui'
// import { Link } from 'react-router-dom'
import { Link } from 'react-router-native'
import { ProjectCard } from '../components/ProjectCard'
import { ChevronRight, LinkOut, Sparkle } from '../assets/icons'
import { Eyebrow } from '../components/Eyebrow'
import { Title } from '../components/Title'
import { Chip } from '../components/Chip'

export function Projects() {
  return (
    <>
      <YStack ai="center" m="$3">
        <XStack ai="center" mb="$6" gap="$2">
          <Sparkle />

          <H2 tt="uppercase">All projects</H2>
          <Sparkle />
        </XStack>
        <XStack $gtLg={{ w: 1200 }} w={300} flexWrap="wrap" jc="center" p="$3">
          <H5 w="100%">Recent UX Case Studies</H5>
        </XStack>
        <XStack $gtLg={{ w: 1200 }} w={300} flexWrap="wrap" jc="center">
          {/*ZCONSOLE==================================================================================================*/}
          <Link to="/projects/zconsole" underlayColor="$color9">
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
                    uri: '/assets/portfolio/project-zconsole.png',
                    width: '100%',
                    height: '100%',
                  }}
                  f={1}
                  br="$7"
                />
                <XStack gap="$2" flexWrap="wrap" mb="$3">
                  <Chip>Product</Chip>
                  <Chip>User Experience</Chip>
                  <Chip>User Interface</Chip>
                  <Chip>Dashboard</Chip>
                  <Chip>Prototyping</Chip>
                  <Chip>Adobe XD</Chip>
                  <Chip>Security</Chip>
                </XStack>
                <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
                  <YStack f={1} gap="$1">
                    <Eyebrow>2019-2021</Eyebrow>
                    <Title>zConsole</Title>
                  </YStack>
                  <Stack>
                    <ChevronRight />
                  </Stack>
                </XStack>
              </Stack>
            </XStack>
          </Link>
          {/*SCOUTIFY==================================================================================================*/}
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
                    uri: '/assets/portfolio/project-scoutify.png',
                    width: '100%',
                    height: '100%',
                  }}
                  f={1}
                  br="$7"
                />
                <XStack gap="$2" flexWrap="wrap" mb="$3">
                  <Chip>User Experience</Chip>
                  <Chip>User Flow</Chip>
                  <Chip>User Research</Chip>
                  <Chip>User Journey</Chip>
                  <Chip>Prototyping</Chip>
                  <Chip>Wireframing</Chip>
                  <Chip>Low Fidelity</Chip>
                  <Chip>Web</Chip>
                  <Chip>Desktop</Chip>
                  <Chip>Tablet</Chip>
                  <Chip>Figma</Chip>
                  <Chip>Social Media</Chip>
                </XStack>
                <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
                  <YStack f={1} gap="$1">
                    <Eyebrow>2021-2022</Eyebrow>
                    <Title>Scoutify</Title>
                  </YStack>
                  <Stack>
                    <ChevronRight />
                  </Stack>
                </XStack>
              </Stack>
            </XStack>
          </Link>
        </XStack>
        <XStack $gtLg={{ w: 1200 }} w={300} flexWrap="wrap" jc="center" p="$3">
          <H5 w="100%">Recent Work</H5>
        </XStack>
        <XStack $gtLg={{ w: 1200 }} w={300} flexWrap="wrap" jc="center">
          {/*TAMAGUI====================================================================-===============================*/}
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
                    uri: '/assets/portfolio/project-tamagui.png',
                    width: '100%',
                    height: '100%',
                  }}
                  f={1}
                  br="$7"
                />
                <XStack gap="$2" flexWrap="wrap" mb="$3">
                  <Chip>Design System</Chip>
                  <Chip>User Interface Kit</Chip>
                  <Chip>React Native</Chip>
                  <Chip>Typescript</Chip>
                  <Chip>High Fidelity</Chip>
                  <Chip>Reusable Components</Chip>
                  <Chip>Figma</Chip>
                </XStack>
                <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
                  <YStack f={1} gap="$1">
                    <Eyebrow>2023-2024</Eyebrow>
                    <Title>Tamagui</Title>
                  </YStack>
                  <Stack>
                    <ChevronRight />
                  </Stack>
                </XStack>
              </Stack>
            </XStack>
          </Link>
          {/*FOSSIL====================================================================-===============================*/}
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
                    uri: '/assets/portfolio/project-fossil.png',
                    width: '100%',
                    height: '100%',
                  }}
                  f={1}
                  br="$7"
                />
                <XStack gap="$2" flexWrap="wrap" mb="$3">
                  <Chip>HTML</Chip>
                  <Chip>CSS</Chip>
                  <Chip>Email Development</Chip>
                  <Chip>Responsiveness</Chip>
                  <Chip>Front-End Development</Chip>
                  <Chip>Mobile</Chip>
                  <Chip>Desktop</Chip>
                  <Chip>Email Marketing</Chip>
                  <Chip>B2C</Chip>
                  <Chip>VS Code</Chip>
                  <Chip>Adobe XD</Chip>
                </XStack>
                <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
                  <YStack f={1} gap="$1">
                    <Eyebrow>2022-2023</Eyebrow>
                    <Title>Fossil</Title>
                  </YStack>
                  <Stack>
                    <ChevronRight />
                  </Stack>
                </XStack>
              </Stack>
            </XStack>
          </Link>
        </XStack>
        <XStack $gtLg={{ w: 1200 }} w={300} flexWrap="wrap" jc="center" p="$3">
          <H5 w="100%">Past Portfolio Pieces</H5>
        </XStack>
        <XStack $gtLg={{ w: 1200 }} w={300} flexWrap="wrap" jc="center">
          {/*UPQUEST ====================================================================-===============================*/}
          {/*<a href="https://www.upquest.com" style={{ textDecoration: 'none' }}>*/}
          {/*  <XStack*/}
          {/*    h={600}*/}
          {/*    w="100vw"*/}
          {/*    $gtXs={{ w: 600, h: 600 }}*/}
          {/*    $gtSm={{ w: 500, h: 600 }}*/}
          {/*    $gtMd={{ w: 500, h: 500 }}*/}
          {/*    $gtLg={{ w: 400, h: 400 }}*/}
          {/*    p="$3"*/}
          {/*  >*/}
          {/*    <Stack*/}
          {/*      bc="$color3"*/}
          {/*      p="$6"*/}
          {/*      animation="bouncy"*/}
          {/*      hoverStyle={{ scale: 0.925 }}*/}
          {/*      pressStyle={{ scale: 0.875 }}*/}
          {/*      boc="$color4"*/}
          {/*      bw="$1"*/}
          {/*      br="$10"*/}
          {/*      w="100%"*/}
          {/*      gap="$6"*/}
          {/*      style={{*/}
          {/*        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <Image*/}
          {/*        source={{*/}
          {/*          uri: '/assets/portfolio/project-upquest.png',*/}
          {/*          width: '100%',*/}
          {/*          height: '100%',*/}
          {/*        }}*/}
          {/*        f={1}*/}
          {/*        br="$7"*/}
          {/*      />*/}
          {/*      <XStack gap="$2" flexWrap="wrap" mb="$3">*/}
          {/*        <Chip>Front-End Development</Chip>*/}
          {/*        <Chip>React.js</Chip>*/}
          {/*        <Chip>HTML</Chip>*/}
          {/*        <Chip>CSS</Chip>*/}
          {/*        <Chip>Adobe XD</Chip>*/}
          {/*        <Chip>User Interface</Chip>*/}
          {/*        <Chip>User Experience</Chip>*/}
          {/*      </XStack>*/}
          {/*      <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">*/}
          {/*        <YStack f={1} gap="$1">*/}
          {/*          <Eyebrow>2020-2021</Eyebrow>*/}
          {/*          <Title>Upquest</Title>*/}
          {/*        </YStack>*/}
          {/*        <Stack>*/}
          {/*          <LinkOut />*/}
          {/*        </Stack>*/}
          {/*      </XStack>*/}
          {/*    </Stack>*/}
          {/*  </XStack>*/}
          {/*</a>*/}

          {/*ZIPS UX RESEARCH====================================================================-===============================*/}
          <a
            href="https://npradappet.myportfolio.com/zips-ux-research"
            style={{ textDecoration: 'none' }}
          >
            <XStack
              h={600}
              w="100vw"
              $gtXs={{ w: 600, h: 600 }}
              $gtSm={{ w: 500, h: 600 }}
              $gtMd={{ w: 500, h: 500 }}
              $gtLg={{ w: 400, h: 400 }}
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
                    uri: '/assets/portfolio/project-zips.png',
                    width: '100%',
                    height: '100%',
                  }}
                  f={1}
                  br="$7"
                />
                <XStack gap="$2" flexWrap="wrap" mb="$3">
                  <Chip>User Experience</Chip>
                  <Chip>User Interface</Chip>
                  <Chip>Mobile</Chip>
                  <Chip>Prototyping</Chip>
                  <Chip>High Fidelity</Chip>
                  <Chip>User Research</Chip>
                  <Chip>iOS</Chip>
                  <Chip>Android</Chip>
                  <Chip>B2C</Chip>
                  <Chip>Adobe XD</Chip>
                  <Chip>Security</Chip>
                </XStack>
                <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
                  <YStack f={1} gap="$1">
                    <Eyebrow>2019-2021</Eyebrow>
                    <Title>zIPS UX Research</Title>
                  </YStack>
                  <Stack>
                    <LinkOut />
                  </Stack>
                </XStack>
              </Stack>
            </XStack>
          </a>
          {/*HYPERION DS RESEARCH====================================================================-===============================*/}
          <a
            href="https://npradappet.myportfolio.com/hyperion-ds"
            style={{ textDecoration: 'none' }}
          >
            <XStack
              h={600}
              w="100vw"
              $gtXs={{ w: 600, h: 600 }}
              $gtSm={{ w: 500, h: 600 }}
              $gtMd={{ w: 500, h: 500 }}
              $gtLg={{ w: 400, h: 400 }}
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
                    uri: '/assets/portfolio/project-hyperion.png',
                    width: '100%',
                    height: '100%',
                  }}
                  f={1}
                  br="$7"
                />
                <XStack gap="$2" flexWrap="wrap" mb="$3">
                  <Chip>Design System</Chip>
                  <Chip>Big Data</Chip>
                  <Chip>User Interface Kit</Chip>
                  <Chip>High Fidelity</Chip>
                  <Chip>Reusable Components</Chip>
                  <Chip>Adobe XD</Chip>
                </XStack>
                <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
                  <YStack f={1} gap="$1">
                    <Eyebrow>2020-2021</Eyebrow>
                    <Title>Hyperion DS</Title>
                  </YStack>
                  <Stack>
                    <LinkOut />
                  </Stack>
                </XStack>
              </Stack>
            </XStack>
          </a>
          {/*SPRINT ====================================================================-===============================*/}
          <a
            href="https://npradappet.myportfolio.com/obelisk-cybersecurity"
            style={{ textDecoration: 'none' }}
          >
            <XStack
              h={600}
              w="100vw"
              $gtXs={{ w: 600, h: 600 }}
              $gtSm={{ w: 500, h: 600 }}
              $gtMd={{ w: 500, h: 500 }}
              $gtLg={{ w: 400, h: 400 }}
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
                    uri: '/assets/portfolio/project-sprint.png',
                    width: '100%',
                    height: '100%',
                  }}
                  f={1}
                  br="$7"
                />
                <XStack gap="$2" flexWrap="wrap" mb="$3">
                  <Chip>User Experience</Chip>
                  <Chip>User Interface</Chip>
                  <Chip>Mobile</Chip>
                  <Chip>Prototyping</Chip>
                  <Chip>High Fidelity</Chip>
                  <Chip>B2C</Chip>
                  <Chip>iOS</Chip>
                  <Chip>Android</Chip>
                  <Chip>Adobe XD</Chip>
                  <Chip>Security</Chip>
                </XStack>
                <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
                  <YStack f={1} gap="$1">
                    <Eyebrow>2019-2020</Eyebrow>
                    <Title>Sprint</Title>
                  </YStack>
                  <Stack>
                    <LinkOut />
                  </Stack>
                </XStack>
              </Stack>
            </XStack>
          </a>
          {/*RFID INTERLOCK ====================================================================-===============================*/}
          <a
            href="https://npradappet.myportfolio.com/rfid-interlock"
            style={{ textDecoration: 'none' }}
          >
            <XStack
              h={600}
              w="100vw"
              $gtXs={{ w: 600, h: 600 }}
              $gtSm={{ w: 500, h: 600 }}
              $gtMd={{ w: 500, h: 500 }}
              $gtLg={{ w: 400, h: 400 }}
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
                    uri: '/assets/portfolio/project-rfid.png',
                    width: '100%',
                    height: '100%',
                  }}
                  f={1}
                  br="$7"
                />
                <XStack gap="$2" flexWrap="wrap" mb="$3">
                  <Chip>User Experience</Chip>
                  <Chip>User Interface</Chip>
                  <Chip>High Fidelity</Chip>
                  <Chip>Dashboard</Chip>
                  <Chip>Desktop</Chip>
                  <Chip>Web</Chip>
                  <Chip>Adobe XD</Chip>
                  <Chip>Security</Chip>
                </XStack>
                <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
                  <YStack f={1} gap="$1">
                    <Eyebrow>2019</Eyebrow>
                    <Title>RFID Interlock</Title>
                  </YStack>
                  <Stack>
                    <LinkOut />
                  </Stack>
                </XStack>
              </Stack>
            </XStack>
          </a>
          {/*FRESH MARKET ====================================================================-===============================*/}
          <a
            href="https://npradappet.myportfolio.com/fresh-market-restaurant"
            style={{ textDecoration: 'none' }}
          >
            <XStack
              h={600}
              w="100vw"
              $gtXs={{ w: 600, h: 600 }}
              $gtSm={{ w: 500, h: 600 }}
              $gtMd={{ w: 500, h: 500 }}
              $gtLg={{ w: 400, h: 400 }}
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
                    uri: '/assets/portfolio/project-fresh-market.png',
                    width: '100%',
                    height: '100%',
                  }}
                  f={1}
                  br="$7"
                />
                <XStack gap="$2" flexWrap="wrap" mb="$3">
                  <Chip>Web Design</Chip>
                  <Chip>User Experience</Chip>
                  <Chip>User Interface</Chip>
                  <Chip>Front-End Development</Chip>
                  <Chip>Vue.js</Chip>
                  <Chip>HTML</Chip>
                  <Chip>CSS</Chip>
                  <Chip>Restaurant</Chip>
                  <Chip>Food</Chip>
                </XStack>
                <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
                  <YStack f={1} gap="$1">
                    <Eyebrow>2019-2020</Eyebrow>
                    <Title>Fresh Market</Title>
                  </YStack>
                  <Stack>
                    <LinkOut />
                  </Stack>
                </XStack>
              </Stack>
            </XStack>
          </a>
          {/*VEGELABEL ====================================================================-===============================*/}
          <a href="https://npradappet.myportfolio.com/vegelabel" style={{ textDecoration: 'none' }}>
            <XStack
              h={600}
              w="100vw"
              $gtXs={{ w: 600, h: 600 }}
              $gtSm={{ w: 500, h: 600 }}
              $gtMd={{ w: 500, h: 500 }}
              $gtLg={{ w: 400, h: 400 }}
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
                    uri: '/assets/portfolio/project-vegelabel.png',
                    width: '100%',
                    height: '100%',
                  }}
                  f={1}
                  br="$7"
                />
                <XStack gap="$2" flexWrap="wrap" mb="$3">
                  <Chip>User Experience</Chip>
                  <Chip>User Interface</Chip>
                  <Chip>Mobile</Chip>
                  <Chip>Prototyping</Chip>
                  <Chip>Micro Animations</Chip>
                  <Chip>Adobe XD</Chip>
                  <Chip>Restaurant</Chip>
                  <Chip>Food</Chip>
                </XStack>
                <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
                  <YStack f={1} gap="$1">
                    <Eyebrow>2019</Eyebrow>
                    <Title>Vegelabel</Title>
                  </YStack>
                  <Stack>
                    <LinkOut />
                  </Stack>
                </XStack>
              </Stack>
            </XStack>
          </a>
          {/*GGWP ====================================================================-===============================*/}
          <a
            href="https://npradappet.myportfolio.com/good-game-well-played-2"
            style={{ textDecoration: 'none' }}
          >
            <XStack
              h={600}
              w="100vw"
              $gtXs={{ w: 600, h: 600 }}
              $gtSm={{ w: 500, h: 600 }}
              $gtMd={{ w: 500, h: 500 }}
              $gtLg={{ w: 400, h: 400 }}
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
                    uri: '/assets/portfolio/project-ggwp.png',
                    width: '100%',
                    height: '100%',
                  }}
                  f={1}
                  br="$7"
                />
                <XStack gap="$2" flexWrap="wrap" mb="$3">
                  <Chip>User Experience</Chip>
                  <Chip>User Interface</Chip>
                  <Chip>Dashboard</Chip>
                  <Chip>Figma</Chip>
                </XStack>
                <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
                  <YStack f={1} gap="$1">
                    <Eyebrow>2021</Eyebrow>
                    <Title>Good Game, Well Played</Title>
                  </YStack>
                  <Stack>
                    <LinkOut />
                  </Stack>
                </XStack>
              </Stack>
            </XStack>
          </a>
          {/*WALTZ ====================================================================-===============================*/}
          <a
            href="https://npradappet.myportfolio.com/waltz-health"
            style={{ textDecoration: 'none' }}
          >
            <XStack
              h={600}
              w="100vw"
              $gtXs={{ w: 600, h: 600 }}
              $gtSm={{ w: 500, h: 600 }}
              $gtMd={{ w: 500, h: 500 }}
              $gtLg={{ w: 400, h: 400 }}
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
                    uri: '/assets/portfolio/project-waltz.png',
                    width: '100%',
                    height: '100%',
                  }}
                  f={1}
                  br="$7"
                />
                <XStack gap="$2" flexWrap="wrap" mb="$3">
                  <Chip>Web Design</Chip>
                  <Chip>User Experience</Chip>
                  <Chip>User Interface</Chip>
                  <Chip>Healthcare</Chip>
                  <Chip>Figma</Chip>
                </XStack>
                <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
                  <YStack f={1} gap="$1">
                    <Eyebrow>2022</Eyebrow>
                    <Title>Waltz Health</Title>
                  </YStack>
                  <Stack>
                    <LinkOut />
                  </Stack>
                </XStack>
              </Stack>
            </XStack>
          </a>
          {/*BANFIELD ====================================================================-===============================*/}
          <a
            href="https://npradappet.myportfolio.com/banfield-pet-hospital"
            style={{ textDecoration: 'none' }}
          >
            <XStack
              h={600}
              w="100vw"
              $gtXs={{ w: 600, h: 600 }}
              $gtSm={{ w: 500, h: 600 }}
              $gtMd={{ w: 500, h: 500 }}
              $gtLg={{ w: 400, h: 400 }}
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
                    uri: '/assets/portfolio/project-banfield.png',
                    width: '100%',
                    height: '100%',
                  }}
                  f={1}
                  br="$7"
                />
                <XStack gap="$2" flexWrap="wrap" mb="$3">
                  <Chip>User Experience</Chip>
                  <Chip>User Interface</Chip>
                  <Chip>Healthcare</Chip>
                  <Chip>Dashboard</Chip>
                  <Chip>Figma</Chip>
                </XStack>
                <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
                  <YStack f={1} gap="$1">
                    <Eyebrow>2021</Eyebrow>
                    <Title>Banfield Pet Hospital</Title>
                  </YStack>
                  <Stack>
                    <LinkOut />
                  </Stack>
                </XStack>
              </Stack>
            </XStack>
          </a>
          {/*TEXAS TRACK ====================================================================-===============================*/}
          {/*<a*/}
          {/*  href="https://pradappet.myportfolio.com/texas-track-twister-racing"*/}
          {/*  style={{ textDecoration: 'none' }}*/}
          {/*>*/}
          {/*  <XStack*/}
          {/*    h={600}*/}
          {/*    w="100vw"*/}
          {/*    $gtXs={{ w: 600, h: 600 }}*/}
          {/*    $gtSm={{ w: 500, h: 600 }}*/}
          {/*    $gtMd={{ w: 500, h: 500 }}*/}
          {/*    $gtLg={{ w: 400, h: 400 }}*/}
          {/*    p="$3"*/}
          {/*  >*/}
          {/*    <Stack*/}
          {/*      bc="$color3"*/}
          {/*      p="$6"*/}
          {/*      animation="bouncy"*/}
          {/*      hoverStyle={{ scale: 0.925 }}*/}
          {/*      pressStyle={{ scale: 0.875 }}*/}
          {/*      boc="$color4"*/}
          {/*      bw="$1"*/}
          {/*      br="$10"*/}
          {/*      w="100%"*/}
          {/*      gap="$6"*/}
          {/*      style={{*/}
          {/*        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <Image*/}
          {/*        source={{*/}
          {/*          uri: '/assets/portfolio/project-tttr.png',*/}
          {/*          width: '100%',*/}
          {/*          height: '100%',*/}
          {/*        }}*/}
          {/*        f={1}*/}
          {/*        br="$7"*/}
          {/*      />*/}
          {/*      <XStack gap="$2" flexWrap="wrap" mb="$3">*/}
          {/*        <Chip>Web Design</Chip>*/}
          {/*        <Chip>User Experience</Chip>*/}
          {/*        <Chip>User Interface</Chip>*/}
          {/*        <Chip>Adobe XD</Chip>*/}
          {/*      </XStack>*/}
          {/*      <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">*/}
          {/*        <YStack f={1} gap="$1">*/}
          {/*          <Eyebrow>2019</Eyebrow>*/}
          {/*          <Title>Texas Track Twister Racing</Title>*/}
          {/*        </YStack>*/}
          {/*        <Stack>*/}
          {/*          <LinkOut />*/}
          {/*        </Stack>*/}
          {/*      </XStack>*/}
          {/*    </Stack>*/}
          {/*  </XStack>*/}
          {/*</a>*/}
          {/*ZIMPERIUM ====================================================================-===============================*/}
          {/*<a href="https://www.zimperium.com" style={{ textDecoration: 'none' }}>*/}
          {/*  <XStack*/}
          {/*    h={600}*/}
          {/*    w="100vw"*/}
          {/*    $gtXs={{ w: 600, h: 600 }}*/}
          {/*    $gtSm={{ w: 500, h: 600 }}*/}
          {/*    $gtMd={{ w: 500, h: 500 }}*/}
          {/*    $gtLg={{ w: 400, h: 400 }}*/}
          {/*    p="$3"*/}
          {/*  >*/}
          {/*    <Stack*/}
          {/*      bc="$color3"*/}
          {/*      p="$6"*/}
          {/*      animation="bouncy"*/}
          {/*      hoverStyle={{ scale: 0.925 }}*/}
          {/*      pressStyle={{ scale: 0.875 }}*/}
          {/*      boc="$color4"*/}
          {/*      bw="$1"*/}
          {/*      br="$10"*/}
          {/*      w="100%"*/}
          {/*      gap="$6"*/}
          {/*      style={{*/}
          {/*        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <Image*/}
          {/*        source={{*/}
          {/*          uri: '/assets/portfolio/project-zimperium.png',*/}
          {/*          width: '100%',*/}
          {/*          height: '100%',*/}
          {/*        }}*/}
          {/*        f={1}*/}
          {/*        br="$7"*/}
          {/*      />*/}
          {/*      <XStack gap="$2" flexWrap="wrap" mb="$3">*/}
          {/*        <Chip>User Experience</Chip>*/}
          {/*        <Chip>User Interface</Chip>*/}
          {/*        <Chip>Dashboard</Chip>*/}
          {/*        <Chip>Prototyping</Chip>*/}
          {/*        <Chip>Adobe XD</Chip>*/}
          {/*        <Chip>Security</Chip>*/}
          {/*      </XStack>*/}
          {/*      <XStack color="$color11" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">*/}
          {/*        <YStack f={1} gap="$1">*/}
          {/*          <Eyebrow>2019-2021</Eyebrow>*/}
          {/*          <Title>Zimperium</Title>*/}
          {/*        </YStack>*/}
          {/*        <Stack>*/}
          {/*          <LinkOut />*/}
          {/*        </Stack>*/}
          {/*      </XStack>*/}
          {/*    </Stack>*/}
          {/*  </XStack>*/}
          {/*</a>*/}
        </XStack>
      </YStack>
    </>
  )
}
