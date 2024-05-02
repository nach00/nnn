import { H2, Stack, XStack, YStack, Image, H5 } from 'tamagui'
import { Link } from 'react-router-native'
import { ChevronRight, Sparkle } from '../assets/icons'
import { Eyebrow } from '../components/Eyebrow'
import { Title } from '../components/Title'
import { Chip } from '../components/Chip'
import { ProjectCard } from '../components/ProjectCard'

export function Projects() {
  return (
    <>
      <YStack alignItems="center" margin="$3">
        <XStack alignItems="center" marginBottom="$6" gap="$2">
          <Sparkle />

          <H2 textTransform="uppercase">All projects</H2>
          <Sparkle />
        </XStack>
        <XStack
          $gtLg={{ width: 1200 }}
          width={300}
          flexWrap="wrap"
          justifyContent="center"
          padding="$3"
        >
          <H5 width="100%">Recent UX Case Studies</H5>
        </XStack>
        <XStack $gtLg={{ width: 1200 }} width={300} flexWrap="wrap" justifyContent="flex-start">
          {/*ZCONSOLE==================================================================================================*/}
          <Link to="/projects/zconsole" underlayColor="$color9">
            <ProjectCard>
              <Image
                source={{
                  uri: '/assets/portfolio/project-zconsole.png',
                  width: '100%',
                  height: '100%',
                }}
                flex={1}
                br="$7"
              />
              <XStack gap="$2" flexWrap="wrap" marginBottom="$3">
                <Chip>Product</Chip>
                <Chip>User Experience</Chip>
                <Chip>User Interface</Chip>
                <Chip>Dashboard</Chip>
                <Chip>Prototyping</Chip>
                <Chip>Adobe XD</Chip>
                <Chip>Security</Chip>
              </XStack>
              <XStack
                justifyContent="space-between"
                alignItems="flex-end"
                width="100%"
                flex={1}
                gap="$6"
              >
                <YStack flex={1} gap="$1">
                  <Eyebrow>2019-2021</Eyebrow>
                  <Title>zConsole</Title>
                </YStack>
                <Stack>
                  <ChevronRight />
                </Stack>
              </XStack>
            </ProjectCard>
          </Link>
          {/*SCOUTIFY==================================================================================================*/}
          <Link to="/projects/scoutify" underlayColor="$color9">
            <ProjectCard>
              <Image
                source={{
                  uri: '/assets/portfolio/project-scoutify.png',
                  width: '100%',
                  height: '100%',
                }}
                flex={1}
                br="$7"
              />
              <XStack gap="$2" flexWrap="wrap" marginBottom="$3">
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
              <XStack
                justifyContent="space-between"
                alignItems="flex-end"
                width="100%"
                flex={1}
                gap="$6"
              >
                <YStack flex={1} gap="$1">
                  <Eyebrow>2021-2023</Eyebrow>
                  <Title>Scoutify</Title>
                </YStack>
                <Stack>
                  <ChevronRight />
                </Stack>
              </XStack>
            </ProjectCard>
          </Link>
          {/*RFID INTERLOCK ====================================================================-===============================*/}
          {/*<Link to="/projects/rfidinterlock" underlayColor="$color9">*/}
          {/*  <ProjectCard>*/}
          {/*    <Image*/}
          {/*      source={{*/}
          {/*        uri: '/assets/portfolio/project-rfid.png',*/}
          {/*        width: '100%',*/}
          {/*        height: '100%',*/}
          {/*      }}*/}
          {/*      flex={1}*/}
          {/*      br="$7"*/}
          {/*    />*/}
          {/*    <XStack gap="$2" flexWrap="wrap" marginBottom="$3">*/}
          {/*      <Chip>User Experience</Chip>*/}
          {/*      <Chip>User Interface</Chip>*/}
          {/*      <Chip>High Fidelity</Chip>*/}
          {/*      <Chip>Dashboard</Chip>*/}
          {/*      <Chip>Desktop</Chip>*/}
          {/*      <Chip>Web</Chip>*/}
          {/*      <Chip>Adobe XD</Chip>*/}
          {/*      <Chip>Security</Chip>*/}
          {/*    </XStack>*/}
          {/*    <XStack*/}
          {/*      justifyContent="space-between"*/}
          {/*      alignItems="flex-end"*/}
          {/*      width="100%"*/}
          {/*      flex={1}*/}
          {/*      gap="$6"*/}
          {/*    >*/}
          {/*      <YStack flex={1} gap="$1">*/}
          {/*        <Eyebrow>2019</Eyebrow>*/}
          {/*        <Title>RFID Interlock</Title>*/}
          {/*      </YStack>*/}
          {/*      <Stack>*/}
          {/*        <ChevronRight />*/}
          {/*      </Stack>*/}
          {/*    </XStack>*/}
          {/*  </ProjectCard>*/}
          {/*</Link>*/}
        </XStack>
        <XStack
          $gtLg={{ width: 1200 }}
          width={300}
          flexWrap="wrap"
          justifyContent="center"
          padding="$3"
        >
          <H5 width="100%">Recent Work</H5>
        </XStack>
        <XStack $gtLg={{ width: 1200 }} width={300} flexWrap="wrap" justifyContent="center">
          {/*TAMAGUI====================================================================-===============================*/}
          <Link to="/projects/tamagui" underlayColor="$color9">
            <ProjectCard>
              <Image
                source={{
                  uri: '/assets/portfolio/project-tamagui.png',
                  width: '100%',
                  height: '100%',
                }}
                flex={1}
                br="$7"
              />
              <XStack gap="$2" flexWrap="wrap" marginBottom="$3">
                <Chip>Design System</Chip>
                <Chip>User Interface Kit</Chip>
                <Chip>React Native</Chip>
                <Chip>Typescript</Chip>
                <Chip>High Fidelity</Chip>
                <Chip>Reusable Components</Chip>
                <Chip>Figma</Chip>
              </XStack>
              <XStack
                justifyContent="space-between"
                alignItems="flex-end"
                width="100%"
                flex={1}
                gap="$6"
              >
                <YStack flex={1} gap="$1">
                  <Eyebrow>2023-2024</Eyebrow>
                  <Title>Tamagui</Title>
                </YStack>
                <Stack>
                  <ChevronRight />
                </Stack>
              </XStack>
            </ProjectCard>
          </Link>
          {/*FOSSIL====================================================================-===============================*/}
          <Link to="/projects/fossil" underlayColor="$color9">
            <ProjectCard>
              <Image
                source={{
                  uri: '/assets/portfolio/project-fossil.png',
                  width: '100%',
                  height: '100%',
                }}
                flex={1}
                br="$7"
              />
              <XStack gap="$2" flexWrap="wrap" marginBottom="$3">
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
              <XStack
                justifyContent="space-between"
                alignItems="flex-end"
                width="100%"
                flex={1}
                gap="$6"
              >
                <YStack flex={1} gap="$1">
                  <Eyebrow>2022-2023</Eyebrow>
                  <Title>Fossil</Title>
                </YStack>
                <Stack>
                  <ChevronRight />
                </Stack>
              </XStack>
            </ProjectCard>
          </Link>
        </XStack>
      </YStack>
    </>
  )
}
