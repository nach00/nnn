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
      <YStack
        // boc="yellow" bw="$1"
        ai="center"
        $gtSm={{ fd: 'row', jc: 'center' }}
      >
        <XStack
          bc="$color3"
          p="$6"
          animation="bouncy"
          hoverStyle={{ scale: 0.925 }}
          pressStyle={{ scale: 0.875 }}
          boc="$color4"
          bw="$1"
          br="$10"
          h={360}
          w={360}
          $gtXs={{ w: 600, h: 600 }}
          $gtSm={{ w: 400, h: 600 }}
          $gtMd={{ w: 500, h: 500 }}
          $gtLg={{ w: 600, h: 600 }}
        >
          {/*<About />*/}
          <H1>About</H1>
        </XStack>
        <YStack>
          <YStack $gtXs={{ fd: 'row' }} $gtSm={{ fd: 'column' }} $gtMd={{ fd: 'row' }}>
            <XStack
              bc="$color3"
              p="$6"
              animation="bouncy"
              hoverStyle={{ scale: 0.925 }}
              pressStyle={{ scale: 0.875 }}
              boc="$color4"
              bw="$1"
              br="$10"
              h={360}
              w={360}
              $gtXs={{ w: 300, h: 300 }}
              $gtSm={{ w: 400, h: 200 }}
              $gtMd={{ w: 250, h: 250 }}
              $gtLg={{ w: 300, h: 300 }}
            >
              <H1>Projects</H1>
            </XStack>
            <XStack
              bc="$color3"
              p="$6"
              animation="bouncy"
              hoverStyle={{ scale: 0.925 }}
              pressStyle={{ scale: 0.875 }}
              boc="$color4"
              bw="$1"
              br="$10"
              h={360}
              w={360}
              $gtXs={{ w: 300, h: 300 }}
              $gtSm={{ w: 400, h: 200 }}
              $gtMd={{ w: 250, h: 250 }}
              $gtLg={{ w: 300, h: 300 }}
            >
              <H1>Featured</H1>
            </XStack>
          </YStack>
          <XStack
            bc="$color3"
            p="$6"
            animation="bouncy"
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
            boc="$color4"
            bw="$1"
            br="$10"
            h={360}
            w={360}
            $gtXs={{ w: 600, h: 300 }}
            $gtSm={{ w: 400, h: 200 }}
            $gtMd={{ w: 500, h: 250 }}
            $gtLg={{ w: 600, h: 300 }}
          >
            <H1>Services</H1>
          </XStack>
        </YStack>
      </YStack>
      <YStack ai="center" $gtSm={{ fd: 'row', jc: 'center' }}>
        <XStack
          bc="$color3"
          p="$6"
          animation="bouncy"
          hoverStyle={{ scale: 0.925 }}
          pressStyle={{ scale: 0.875 }}
          boc="$color4"
          bw="$1"
          br="$10"
          h={360}
          w={360}
          $gtXs={{ w: 600, h: 300 }}
          $gtSm={{ w: 400, h: 400 }}
          $gtMd={{ w: 500, h: 250 }}
          $gtLg={{ w: 600, h: 300 }}
        >
          <H1>Stats</H1>
        </XStack>
        <YStack>
          <YStack $gtXs={{ fd: 'row' }} $gtSm={{ fd: 'column' }} $gtMd={{ fd: 'row' }}>
            <XStack
              bc="$color3"
              p="$6"
              animation="bouncy"
              hoverStyle={{ scale: 0.925 }}
              pressStyle={{ scale: 0.875 }}
              boc="$color4"
              bw="$1"
              br="$10"
              h={360}
              w={360}
              $gtXs={{ w: 300, h: 300 }}
              $gtSm={{ w: 400, h: 200 }}
              $gtMd={{ w: 250, h: 250 }}
              $gtLg={{ w: 300, h: 300 }}
            >
              <H1>Resume</H1>
            </XStack>
            <XStack
              bc="$color3"
              p="$6"
              animation="bouncy"
              hoverStyle={{ scale: 0.925 }}
              pressStyle={{ scale: 0.875 }}
              boc="$color4"
              bw="$1"
              br="$10"
              h={360}
              w={360}
              $gtXs={{ w: 300, h: 300 }}
              $gtSm={{ w: 400, h: 200 }}
              $gtMd={{ w: 250, h: 250 }}
              $gtLg={{ w: 300, h: 300 }}
            >
              <H1>Blog</H1>
            </XStack>
          </YStack>
        </YStack>
      </YStack>
      {/*<YStack>*/}
      {/*  <YStack $gtSm={{ fd: 'row' }}>*/}
      {/*    <XStack boc="red" bw="$1" m="$3" $gtSm={{ w: '100%', f: 1 }}>*/}
      {/*      <H1>About</H1>*/}
      {/*    </XStack>*/}
      {/*    <YStack>*/}
      {/*      <YStack $gtXs={{ fd: 'row' }} boc="blue" bw="$1">*/}
      {/*        <XStack boc="red" bw="$1" m="$3" $gtXs={{ w: '100%', f: 1 }}>*/}
      {/*          <H1>Projects</H1>*/}
      {/*        </XStack>*/}
      {/*        <XStack boc="red" bw="$1" m="$3" $gtXs={{ w: '100%', f: 1 }}>*/}
      {/*          <H1>Featured</H1>*/}
      {/*        </XStack>*/}
      {/*      </YStack>*/}
      {/*      <XStack boc="red" bw="$1" m="$3">*/}
      {/*        <H1>Services</H1>*/}
      {/*      </XStack>*/}
      {/*    </YStack>*/}
      {/*  </YStack>*/}

      {/*<YStack>*/}
      {/*  <XStack boc="red" bw="$1" m="$3">*/}
      {/*    <H1>Stats</H1>*/}
      {/*  </XStack>*/}
      {/*  <YStack>*/}
      {/*    <XStack boc="red" bw="$1" m="$3">*/}
      {/*      <H1>Resume</H1>*/}
      {/*    </XStack>*/}
      {/*    <XStack boc="red" bw="$1" m="$3">*/}
      {/*      <H1>Blog</H1>*/}
      {/*    </XStack>*/}
      {/*  </YStack>*/}
      {/*</YStack>*/}
      {/*</YStack>*/}
      {/*<YStack>*/}
      {/*<YStack m="auto" ai="center">*/}
      {/*  <About />*/}
      {/*<YStack>*/}
      {/*  <YStack $xs={{ fd: 'row' }}>*/}
      {/*<XStack f={1} w="100%">*/}
      {/*  <Projects />*/}
      {/*  <Featured />*/}
      {/*</XStack>*/}
      {/*</YStack>*/}
      {/*<Services />*/}
      {/*</YStack>*/}

      {/*<YStack>*/}
      {/*  <YStack>*/}
      {/*    <Projects />*/}

      {/*    <Featured />*/}
      {/*  </YStack>*/}

      {/*  <XStack>*/}
      {/*    <Services />*/}
      {/*  </XStack>*/}
      {/*</YStack>*/}
      {/*</YStack>*/}

      {/*<XStack $lg={{ fd: 'column' }}>*/}
      {/*  <XStack w={600}>*/}
      {/*    <Stats />*/}
      {/*  </XStack>*/}

      {/*  <XStack $lg={{ m: 'auto' }}>*/}
      {/*    <XStack w={300} h={300}>*/}
      {/*      <Resume />*/}
      {/*    </XStack>*/}

      {/*    <XStack w={300} h={300}>*/}
      {/*      <Blog />*/}
      {/*    </XStack>*/}
      {/*  </XStack>*/}
      {/*</XStack>*/}
      {/*</YStack>*/}

      {/*========*/}

      {/*<YStack maxWidth={1200} marginHorizontal="auto" $lg={{ marginHorizontal: '$6' }}>*/}
      {/*  <XStack $lg={{ fd: 'column' }}>*/}
      {/*    <XStack w={600} h={600} $lg={{ w: 900, m: 'auto' }} $md={{ w: 600 }}>*/}
      {/*      <About />*/}
      {/*    </XStack>*/}
      {/*    <YStack $lg={{ w: 900, m: 'auto' }}>*/}
      {/*      <XStack>*/}
      {/*        <XStack w={300} h={300} $lg={{ w: 450, h: 450 }}>*/}
      {/*          <Projects />*/}
      {/*        </XStack>*/}
      {/*        <XStack w={300} h={300} $lg={{ w: 450, h: 450 }}>*/}
      {/*          <Featured />*/}
      {/*        </XStack>*/}
      {/*      </XStack>*/}
      {/*      <XStack w={600} h={300} $lg={{ w: 900 }}>*/}
      {/*        <Services />*/}
      {/*      </XStack>*/}
      {/*    </YStack>*/}
      {/*  </XStack>*/}
      {/*  <XStack $lg={{ fd: 'column' }}>*/}
      {/*    <XStack w={600} $lg={{ w: 900, m: 'auto' }}>*/}
      {/*      <Stats />*/}
      {/*    </XStack>*/}
      {/*    <XStack $lg={{ m: 'auto' }}>*/}
      {/*      <XStack w={300} h={300} $lg={{ w: 450, h: 450 }}>*/}
      {/*        <Resume />*/}
      {/*      </XStack>{' '}*/}
      {/*      <XStack w={300} h={300} $lg={{ w: 450, h: 450 }}>*/}
      {/*        <Blog />*/}
      {/*      </XStack>*/}
      {/*    </XStack>*/}
      {/*  </XStack>*/}
      {/*</YStack>*/}
    </>
  )
}

const About = () => {
  return (
    <Link to="/about" underlayColor="$color9">
      <YStack
        bc="$color3"
        p="$6"
        animation="bouncy"
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}
        boc="$color4"
        bw="$1"
        br="$10"
        // m="$3"
        gap="$6"
        ai="center"
        w={360}
        // $xs={{ w: 600 }}
      >
        <Image
          source={{
            uri: '/assets/photos/ai_profile.jpg',
            width: 300,
            height: 300,
          }}
          br="$7"
        />
        <XStack color="$color9" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
          <YStack f={1}>
            <Eyebrow>Designer & Developer</Eyebrow>
            <Title>Natcha Pradappet</Title>
            <Paragraph>I'm a designer and developer based in Dallas, Texas.</Paragraph>
          </YStack>
          <Stack>
            <ChevronRight />
          </Stack>
        </XStack>
      </YStack>
    </Link>
  )
}
const Projects = () => {
  return (
    <Link to="/projects" underlayColor="$color9">
      <YStack
        bc="$color3"
        p="$6"
        animation="bouncy"
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}
        boc="$color4"
        bw="$1"
        br="$10"
        m="$3"
        gap="$6"
        ai="center"
        w={360}
        $xs={{ w: 300 }}
        h={360}
      >
        <Stack ai="center" jc="center" h="100%" f={1}>
          <Image
            source={{
              uri: '/assets/portfolio/tamagui/laptop-transparent-bg.png',
              width: 200,
              height: 200,
            }}
          />
        </Stack>

        <XStack color="$color9" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
          <Title>Portfolio</Title>
          <ChevronRight />
        </XStack>
      </YStack>
    </Link>
  )
}
const Featured = () => {
  return (
    <Link to="/projects/tamagui" underlayColor="$color9">
      <YStack
        bc="$color3"
        p="$6"
        animation="bouncy"
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}
        boc="$color4"
        bw="$1"
        br="$10"
        m="$3"
        gap="$6"
        ai="center"
        w={360}
        $xs={{ w: 300 }}
        h={360}
      >
        <Stack ai="center" jc="center" h="100%" f={1}>
          <Image
            source={{
              uri: '/assets/icons/tamagui-logo.svg',
              width: 200,
              height: 150,
            }}
          />
        </Stack>

        <XStack color="$color9" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
          <YStack f={1}>
            <Eyebrow>Tamagui Design System</Eyebrow>
            <Title>Featured</Title>
          </YStack>
          <ChevronRight />
        </XStack>
      </YStack>
    </Link>
  )
}

const Services = () => {
  return (
    <Link to="/services" underlayColor="$color9" style={{ flexGrow: 1 }}>
      <YStack
        bc="$color3"
        p="$6"
        animation="bouncy"
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}
        boc="$color4"
        bw="$1"
        br="$10"
        m="$3"
        gap="$6"
        ai="center"
        w={360}
        $xs={{ w: 600 }}
        h={360}
      >
        <Stack ai="center" jc="center" h="100%" f={1} gap="$3">
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
        </Stack>

        <XStack color="$color9" jc="space-between" ai="flex-end" w="100%" f={1} gap="$6">
          <Title>Services</Title>
          <ChevronRight />
        </XStack>
      </YStack>

      {/*<Card>*/}
      {/*  <YStack color="$color9" h="100%" jc="space-between">*/}
      {/*    <XStack h="100%" f={1} ai="center" jc="center" gap="$3">*/}
      {/*      <XStack gap="$3">*/}
      {/*        <SmallCard>*/}
      {/*          <UXUIDesign />*/}
      {/*          <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">*/}
      {/*            UX/UI Design*/}
      {/*          </Paragraph>*/}
      {/*        </SmallCard>*/}
      {/*        <SmallCard>*/}
      {/*          <DesignSystem />*/}
      {/*          <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">*/}
      {/*            Design Systems*/}
      {/*          </Paragraph>*/}
      {/*        </SmallCard>*/}
      {/*      </XStack>*/}
      {/*      <XStack gap="$3">*/}
      {/*        <SmallCard>*/}
      {/*          <WebDevelopment />*/}
      {/*          <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">*/}
      {/*            Front-end Development*/}
      {/*          </Paragraph>*/}
      {/*        </SmallCard>*/}
      {/*        <SmallCard>*/}
      {/*          <Strategy />*/}
      {/*          <Paragraph textAlign="center" tt="uppercase" size="$1" color="$color12">*/}
      {/*            Business Strategy*/}
      {/*          </Paragraph>*/}
      {/*        </SmallCard>*/}
      {/*      </XStack>*/}
      {/*    </XStack>*/}

      {/*    <XStack color="$color9" jc="space-between" ai="flex-end">*/}
      {/*      <Title>Services</Title>*/}
      {/*      <ChevronRight />*/}
      {/*    </XStack>*/}
      {/*  </YStack>*/}
      {/*</Card>*/}
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
