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
      <Stack maxWidth={1200} marginHorizontal="auto" gap="$6" $lg={{ marginHorizontal: '$6' }}>
        <XStack gap="$6" $md={{ flexDirection: 'column' }}>
          <Stack f={1} w="100%">
            <About />
          </Stack>
          <Stack f={1} w="100%">
            <YStack gap="$6" f={1}>
              <XStack gap="$6" h="100%" f={1} $lg={{ flexDirection: 'column' }}>
                <Projects />
                <Featured />
              </XStack>
              <Stack f={1} h="100%" $lg={{ height: 500 }}>
                <Services />
              </Stack>
            </YStack>
          </Stack>
        </XStack>
        <XStack gap="$6" $md={{ flexDirection: 'column' }}>
          <XStack f={1}>
            <Stats />
          </XStack>
          <XStack f={1} gap="$6">
            <Resume />
            <Blog />
          </XStack>
        </XStack>
      </Stack>
    </>
  )
}

const About = () => {
  return (
    <Link to="/about" underlayColor="$color9" style={{ height: '100%' }}>
      <Card>
        <YStack gap="$6" h="100%">
          <Image
            source={{
              uri: '/assets/photos/ai_profile.jpg',
              width: '100%',
              height: 600,
            }}
            br="$7"
            f={1}
          />
          <XStack color="$color9" jc="space-between" ai="flex-end">
            <YStack f={1}>
              <Eyebrow>Design & Developer</Eyebrow>
              <Title>Natcha Pradappet</Title>
              <Paragraph>I'm a designer and developer based in Dallas, Texas.</Paragraph>
            </YStack>
            <ChevronRight />
          </XStack>
        </YStack>
      </Card>
    </Link>
  )
}
const Projects = () => {
  return (
    <Link to="/projects" underlayColor="$color9" style={{ flex: 1, flexGrow: 1 }}>
      <Card>
        <YStack f={1} h="100%" $lg={{ height: 500 }}>
          <YStack w="100%" h="100%" f={1}>
            <Stack h="100%" f={1} ai="center" jc="center">
              <Image
                source={{
                  uri: '/assets/portfolio/tamagui/laptop-transparent-bg.png',
                  width: 160,
                  height: 160,
                }}
              />
            </Stack>
            <XStack color="$color9" jc="space-between" ai="flex-end" f={1}>
              <Title>Portfolio</Title>
              <ChevronRight />
            </XStack>
          </YStack>
        </YStack>
      </Card>
    </Link>
  )
}
const Featured = () => {
  return (
    <Link to="/projects/tamagui" underlayColor="$color9" style={{ flex: 1, flexGrow: 1 }}>
      <Card>
        <YStack f={1} h="100%">
          <YStack w="100%" h="100%" f={1}>
            <Stack h="100%" f={1} ai="center" jc="center">
              <Image
                source={{
                  uri: '/assets/icons/tamagui-logo.svg',
                  width: 160,
                  height: 120,
                }}
              />
            </Stack>
            <XStack color="$color9" jc="space-between" ai="flex-end" f={1}>
              <YStack f={1}>
                <Eyebrow>Tamagui Design System</Eyebrow>
                <Title>Feautred Project</Title>
              </YStack>
              <ChevronRight />
            </XStack>
          </YStack>
        </YStack>
      </Card>
    </Link>
  )
}

const Services = () => {
  return (
    <Link to="/services" underlayColor="$color9" style={{ flexGrow: 1 }}>
      <Card>
        <YStack f={1} color="$color9" h="100%" jc="space-between">
          <XStack
            h="100%"
            f={1}
            ai="center"
            jc="center"
            gap="$3"
            $lg={{ flexDirection: 'column' }}
            // $gtMd={{ flexDirection: 'row' }}
          >
            <XStack gap="$3">
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
            </XStack>
            <XStack gap="$3">
              <SmallCard>
                <WebDevelopment />
                <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                  Front-end Development
                </Paragraph>
              </SmallCard>
              <SmallCard>
                <Strategy />
                <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">
                  Business Strategy
                </Paragraph>
              </SmallCard>
            </XStack>
          </XStack>

          <XStack color="$color9" jc="space-between" ai="flex-end">
            <Title>Services</Title>
            <ChevronRight />
          </XStack>
        </YStack>
      </Card>
    </Link>
  )
}

const Stats = () => {
  return (
    <Link to="/" underlayColor="$color9" style={{ flexGrow: 1 }}>
      <StaticCard>
        <YStack f={1} h="$16">
          <XStack
            justifyContent="space-evenly"
            w="100%"
            gap="$5"
            ai="center"
            h="100%"
            $xs={{ flexDirection: 'column' }}
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
            {/*<SmallCard>*/}
            {/*  <YStack ai="center" jc="center" gap="$1" $gtXs={{ maw: '$10' }}>*/}
            {/*    <H4 color="$color11">3+</H4>*/}
            {/*    <Paragraph ta="center" color="$color12" tt="uppercase" size="$1">*/}
            {/*      Awards won*/}
            {/*    </Paragraph>*/}
            {/*  </YStack>*/}
            {/*</SmallCard>*/}
          </XStack>
        </YStack>
      </StaticCard>
    </Link>
  )
}

const Resume = () => {
  return (
    <Link to="/resume" underlayColor="$color9" style={{ flex: 1, flexGrow: 1 }}>
      <Card>
        <YStack f={1} h="$16">
          <YStack w="100%" h="100%" f={1}>
            <Stack h="100%" f={1} ai="center" jc="center">
              <Image
                source={{
                  uri: '/assets/icons/fade1.svg',
                  width: 100,
                  height: 100,
                }}
              />
            </Stack>
            <XStack color="$color9" jc="space-between" ai="flex-end">
              <Title>Resume</Title>
              <ChevronRight />
            </XStack>
          </YStack>
        </YStack>
      </Card>
    </Link>
  )
}

const Blog = () => {
  return (
    <Link to="/blog" underlayColor="$color9" style={{ flex: 1, flexGrow: 1 }}>
      <Card>
        <YStack f={1} h="$16">
          <YStack w="100%" h="100%" f={1}>
            <Stack h="100%" f={1} ai="center" jc="center">
              <Image
                source={{
                  uri: '/assets/photos/hazel.png',
                  width: 180,
                  height: 180,
                }}
              />
            </Stack>
            <XStack color="$color9" jc="space-between" ai="flex-end">
              <Title>Blog</Title>
              <ChevronRight />
            </XStack>
          </YStack>
        </YStack>
      </Card>
    </Link>
  )
}
