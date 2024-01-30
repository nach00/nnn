import '@tamagui/core/reset.css'
import '../assets/styles.css'
import { Title } from '../components/Title'
import { Eyebrow } from '../components/Eyebrow'
import { SmallCard, Card, StaticCard } from '../components/Card'
import { UXUIDesign, DesignSystem, WebDevelopment, Strategy, ChevronRight } from '../assets/icons'

import { H4, Image, Paragraph, Stack, XStack, YStack } from 'tamagui'
import { Link } from 'react-router-native'

export const Home = () => {
  return (
    <>
      <Stack maw={1200} marginHorizontal="auto" w="100%">
        <YStack gap="$6">
          <XStack gap="$6">
            <About />
            <YStack f={1} w="100%" gap="$6">
              <XStack gap="$6">
                <Projects />
                <Featured />
              </XStack>
              <Services />
            </YStack>
          </XStack>
          <XStack gap="$6">
            <Stats />
            <YStack f={1} w="100%" gap="$6">
              <XStack gap="$6">
                <Resume />
                <Blog />
              </XStack>
            </YStack>
          </XStack>
        </YStack>
      </Stack>
    </>
  )
}

const About = () => {
  return (
    <Link to="/about" underlayColor="$color9">
      <Card>
        <XStack gap="$6" ai="center" h="100%">
          <Image
            source={{
              uri: '/assets/photos/ai_profile.jpg',
              width: 200,
              height: 200,
            }}
            btlr="$7"
            bbrr="$7"
          />

          <YStack f={1}>
            <Eyebrow>Design & Developer</Eyebrow>
            <Title>Natcha Pradappet</Title>
            <Paragraph>I'm a designer and developer based in Dallas, Texas.</Paragraph>
          </YStack>
        </XStack>
      </Card>
    </Link>
  )
}
const Projects = () => {
  return (
    <Link to="/projects" underlayColor="$color9">
      <Card>
        <YStack f={1} h="$16">
          <YStack w="100%" h="100%" f={1}>
            <Stack h="100%" f={1} ai="center" jc="center">
              <Image
                source={{
                  uri: '/assets/portfolio/tamagui/laptop-transparent-bg.png',
                  width: 100,
                  height: 100,
                }}
              />
            </Stack>
            <XStack color="$color9" jc="space-between" ai="flex-end">
              <Title>Projects</Title>
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
    <Link to="/projects/tamagui" underlayColor="$color9">
      <Card>
        <YStack f={1} h="$16">
          <YStack w="100%" h="100%" f={1}>
            <Stack h="100%" f={1} ai="center" jc="center">
              <Image
                source={{
                  uri: '/assets/portfolio/tamagui/showcase.png',
                  width: '100%',
                  height: 80,
                }}
              />
            </Stack>
            <XStack color="$color9" jc="space-between" ai="flex-end">
              <YStack>
                <Eyebrow>Featured Project</Eyebrow>
                <Title>Tamagui</Title>
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
    <Link to="/services" underlayColor="$color9">
      <Card>
        <YStack f={1} color="$color9" h="$16" jc="space-between">
          <XStack jc="space-evenly" h="100%" f={1} ai="center">
            <SmallCard>
              <UXUIDesign />
              <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color11">
                UX/UI Design
              </Paragraph>
            </SmallCard>
            <SmallCard>
              <DesignSystem />
              <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color11">
                Design Systems
              </Paragraph>
            </SmallCard>
            <SmallCard>
              <WebDevelopment />
              <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color11">
                Front-end Development
              </Paragraph>
            </SmallCard>
            <SmallCard>
              <Strategy />
              <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color11">
                Business Strategy
              </Paragraph>
            </SmallCard>
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
              <H4>5</H4>
              {/*<Paragraph ta="center" color="$color11" tt="uppercase">*/}
              <Eyebrow>Years experience</Eyebrow>
              {/*</Paragraph>*/}
            </YStack>
          </SmallCard>
          <SmallCard>
            <YStack ai="center" jc="center" gap="$1" $gtXs={{ maw: '$10' }}>
              <H4>20+</H4>
              <Paragraph ta="center" color="$color11" tt="uppercase">
                Clients worldwide
              </Paragraph>
              {/*<div className="font">Test</div>*/}
            </YStack>
          </SmallCard>
          <SmallCard>
            <YStack ai="center" jc="center" gap="$1" $gtXs={{ maw: '$10' }}>
              <H4>100+</H4>
              <Paragraph ta="center" color="$color11" tt="uppercase">
                Total projects
              </Paragraph>
            </YStack>
          </SmallCard>
        </XStack>
      </YStack>
    </StaticCard>
  )
}

const Resume = () => {
  return (
    <Link to="/resume" underlayColor="$color9">
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
    <Link to="/blog" underlayColor="$color9">
      <Card>
        <YStack f={1} h="$16">
          <YStack w="100%" h="100%" f={1}>
            <Stack h="100%" f={1} ai="center" jc="center">
              <Image
                source={{
                  uri: '/assets/photos/hazel.png',
                  width: 100,
                  height: 100,
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
