import {
  H2,
  H6,
  Stack,
  H1,
  Paragraph,
  XStack,
  YStack,
  Image,
  Button,
  ListItem,
  View,
  H4,
  H3,
  H5,
} from 'tamagui'
import { YStack } from 'tamagui'
import { Eyebrow } from '../../components/Eyebrow'
import { Title } from '../../components/Title'
import { Link } from 'react-router-native'
import React from 'react'

export function Scoutify() {
  return (
    <>
      <YStack themeInverse="true" bc="$color1" maw={1200} m="auto">
        <YStack
          maw={600}
          marginHorizontal="auto"
          marginVertical="$6"
          w="100%"
          paddingHorizontal="$3"
          gap="$3"
        >
          <Eyebrow>UX/UI Design</Eyebrow>
          <Title>Scoutify</Title>

          <Paragraph mt="$5">
            Scoutify is a social media platform, similar to LinkedIn, but specifically for baseball
            athletes. The main types of users are:
          </Paragraph>
          <YStack>
            <ListItem>- Baseball players of all ages (under 13 require a parent account)</ListItem>
            <ListItem>- Talent scouting agents</ListItem>
            <ListItem>- Baseball organizations</ListItem>
          </YStack>
          <Paragraph>
            I joined Scoutify at the beginning of its life, filling the design role and working
            closely with both the owner and a project manager. Scoutify is still currently in it’s
            infancy stage and is seeking funds and developers to continue progress. My work at
            Scoutify encompassed the following:
          </Paragraph>

          <YStack>
            <ListItem>1. Plan, conduct, and analyze user research</ListItem>
            <ListItem>2. Define user problems and ideate solutions</ListItem>
            <ListItem>3. Establish navigation, user flows, and information architecture</ListItem>
            <ListItem>4. Create wireframes and prototypes</ListItem>
          </YStack>

          <Paragraph>
            At this phase of the project, Scoutify plans to only focus on providing solutions for
            the sport of baseball. There may be plans to expand into other sports in the future, but
            as of now, those options are not available.
          </Paragraph>

          <Paragraph>
            The client stated that the main requirement is to be accessible for desktop and tablet
            only. Designing for mobile would not be required, which put this project into scope.
          </Paragraph>
          <H4 mt="$3">1. Plan, conduct, and analyze user research</H4>
          <Paragraph>
            Upon joining Scoutify, there was very little user research I could perform, as the
            client wanted to see some designs immediately, and research was not budgeted into the
            timeline. I did perform some gain some initial quantitative and qualitative research by
            looking up baseball industry statistics, but just enough to establish a foundation. I
            also performed a brief competitive analysis, but as the client previously mentioned,
            there are currently no tools that provide this kind of service.
          </Paragraph>
          <H5>Conducting stakeholder interviews</H5>
          <Paragraph>
            A majority of my research relied on talking to the client directly. We scheduled some
            time to discuss the project in detail, which led to lots of question asking, such as:
            <YStack>
              <ListItem>What are the basics of the business?</ListItem>
              <ListItem>
                What’s the problem that needs a solution? What are their pain points?
              </ListItem>
              <ListItem>What are some big trends in your industry?</ListItem>
              <ListItem>
                Where do you sell / sales channels? (e.g. In-person, Resell, eComm, etc.)
              </ListItem>
              <ListItem>
                If time and money were not an object, what would the perfect solution be?
              </ListItem>
              <ListItem>What’s your timeline?</ListItem>
              <ListItem>What do you need to see in a proposal?</ListItem>
            </YStack>
          </Paragraph>
          <H5>Competitive Analysis</H5>
          <Paragraph>
            Looking around online to see how other brands display player statistics, I came across
            these designs. It was great to see how existing companies organize data. I wanted to see
            important pieces of information and how they are categorized on the screen. I thought
            also thought about baseball cards, and how they show player stats and info within such a
            small frame, and wanted to implement some of that nostalgic feel and fun when using
            Scoutify.
          </Paragraph>
        </YStack>

        <Stack ai="center">
          <Image
            source={{
              width: 900,
              height: 743,
              uri: '/assets/portfolio/scoutify/scoutify-competitive-analysis.png',
            }}
            width="100%"
            height="100%"
          />
        </Stack>
        <YStack
          maw={600}
          marginHorizontal="auto"
          marginVertical="$6"
          w="100%"
          paddingHorizontal="$3"
          gap="$3"
        >
          <H4>2. Define user problems and ideate solutions</H4>
          <Paragraph>
            After receiving the clients’ response, I formulated the general user problem and thought
            about how to best solve their issues.
          </Paragraph>

          <Paragraph>
            Scoutify plans to become a talent scouting portal for baseball players. Currently,
            scouting for this sport is very basic. There are not many tools, as not many scouts are
            able to find the resources they need. It’s technically still a very new industry. There
            isn’t a platform for players to showcase their skills to the outside world. Most of this
            data is heavily related to match performances, but scouting can be a very complicated
            task.
          </Paragraph>

          <Paragraph>
            This sports industry has a very lucrative market, as multi-million dollars can be paid
            to acquire players for a team. Right now, the scouts need to be physically present at
            all the games in order to track performance.
          </Paragraph>

          <Paragraph>
            Scoutify plans to promote itself through all the various baseball related websites, such
            as pro-shops, academies, leagues, national governing bodies, and schools.
          </Paragraph>

          <Paragraph>
            In the future, Scoutify plans to implement AI and machine learning to generate scores to
            help talent scouting agents find the best athletes around the world.
          </Paragraph>

          <H4>3. Establish navigation, user flows, and information architecture</H4>
          <Paragraph>
            After receiving the clients’ response, I formulated the general user problem and thought
            about how to best solve their issues.
          </Paragraph>

          <Paragraph>
            After gaining these insights from talking with the client, I began to strategize the
            steps I’d need to take to move forward. Below are some user flows I created, along with
            additional questions that arose as I continued this task.
          </Paragraph>

          <Paragraph>
            This process proved useful, as I discovered there would be a fourth and fifth user type
            that was not previously discussed during our initial meeting. One user type would be the
            Parent account, as we would not allow children under the age of 13 to manage their own
            account. The other would be a Super Admin account, that had full user management
            abilities for any and all other users.
          </Paragraph>

          <Paragraph>
            The diagram below shows what should happen when a user navigates to the Scoutify
            website, along with how the page should behave depending on whether the user has an
            account, or needs to create one.
          </Paragraph>
        </YStack>
        <Stack ai="center">
          <Image
            source={{
              width: 900,
              height: 1398,
              uri: '/assets/portfolio/scoutify/scoutify-user-flow-1.png',
            }}
            width="100%"
            height="100%"
            ai="center"
          />
        </Stack>

        <YStack
          maw={600}
          marginHorizontal="auto"
          marginVertical="$6"
          w="100%"
          paddingHorizontal="$3"
          gap="$3"
        >
          <Paragraph>
            This next diagram below shows how the platform should behave based on the type of user
            that logs in. During this process, one major question I had was whether a single user
            could have multiple accounts, such as an Athlete account and a Scout account or an
            Organization account. The client specifically stated that each account would require a
            separate email address.
          </Paragraph>
          <Paragraph>
            This diagram also shows what will happen when a Youth Athlete turns old enough to become
            an Adult Athlete, and how the account should be upgraded so that the user can manage
            their own account. The Parent account would no longer have access to manage their
            child’s account.
          </Paragraph>
        </YStack>

        <Stack ai="center">
          <Image
            source={{
              width: 900,
              height: 506,
              uri: '/assets/portfolio/scoutify/scoutify-user-flow-2.png',
            }}
            width="100%"
            height="100%"
            ai="center"
          />
        </Stack>

        <YStack
          maw={600}
          marginHorizontal="auto"
          marginVertical="$6"
          w="100%"
          paddingHorizontal="$3"
          gap="$3"
        >
          <Paragraph>
            Below shows the user flow for a new user signing up. It shows how the page will navigate
            to each specific user type, whether they are an Athlete, a Scout, or an Organization. It
            further shows what should happen if the user too young to create an Adult Athlete
            account, and how a Parent account can be created instead.
          </Paragraph>
        </YStack>

        <Stack ai="center">
          <Image
            source={{
              width: 900,
              height: 612,
              uri: '/assets/portfolio/scoutify/scoutify-user-flow-3.png',
            }}
            width="100%"
            height="100%"
            ai="center"
          />
        </Stack>
        <YStack
          maw={600}
          marginHorizontal="auto"
          marginVertical="$6"
          w="100%"
          paddingHorizontal="$3"
          gap="$3"
        >
          <H4>4. Create wireframes and prototypes</H4>
          <Paragraph>
            Once the user flows have been established and confirmed by the client, I proceeded to
            create a few mocks using low fidelity wireframes. Below is the initial concept I came up
            with. This is just the first draft, and I planned to iterate on this design as I
            received feedback from the client.
          </Paragraph>
        </YStack>
        <Stack ai="center">
          <Image
            source={{
              width: 900,
              height: 698,
              uri: '/assets/portfolio/scoutify/scoutify-wireframe-1.png',
            }}
            width="100%"
            height="100%"
            ai="center"
          />
        </Stack>
        <YStack
          maw={600}
          marginHorizontal="auto"
          marginVertical="$6"
          w="100%"
          paddingHorizontal="$3"
          gap="$3"
        >
          <H5>Reusable components</H5>
          <Paragraph>
            At the start of this project, I knew that I would be reusing multiple elements within my
            design. In order to maintain consistency within the site, I started by creating a few
            master components that could be reused over and over. By taking these initial steps, I
            could ensure that any changes moving forward could be made with minimal effort. For
            example if the client later decides to add a logo or change the tagline, to the
            navigation bar, making that addition would only need to be done to the master component,
            and not all the screens that the navigation bar exist.
          </Paragraph>
        </YStack>
        <Stack ai="center">
          <Image
            source={{
              width: 900,
              height: 506,
              uri: '/assets/portfolio/scoutify/scoutify-wireframe-2.png',
            }}
            width="100%"
            height="100%"
            ai="center"
          />
        </Stack>
        <YStack
          maw={600}
          marginHorizontal="auto"
          marginVertical="$6"
          w="100%"
          paddingHorizontal="$3"
          gap="$3"
        >
          <H5>Wireframing</H5>
          <Paragraph>
            The main idea for this Athlete profile is to have standardized information placed at the
            top half of the screen, while modules for any other categorized content displayed below.
            Next are some more refined screens of an athlete profile.
          </Paragraph>
        </YStack>
        <Stack ai="center">
          <Image
            source={{
              width: 900,
              height: 570,
              uri: '/assets/portfolio/scoutify/scoutify-wireframe-3.png',
            }}
            width="100%"
            height="100%"
            ai="center"
          />
        </Stack>
        <YStack
          maw={600}
          marginHorizontal="auto"
          marginVertical="$6"
          w="100%"
          paddingHorizontal="$3"
          gap="$3"
        >
          <Paragraph>I continued creating the rest of the screens, seen below. </Paragraph>
        </YStack>
        <Stack ai="center">
          <Image
            source={{
              width: 900,
              height: 455,
              uri: '/assets/portfolio/scoutify/scoutify-wireframe-4.png',
            }}
            width="100%"
            height="100%"
            ai="center"
          />
        </Stack>
        <YStack
          maw={600}
          marginHorizontal="auto"
          marginVertical="$6"
          w="100%"
          paddingHorizontal="$3"
          gap="$3"
        >
          <H5>Prototyping</H5>
          <Paragraph>Then added in prototyping to allow for a clickthrough demo. </Paragraph>
        </YStack>
        <Stack ai="center">
          <Image
            source={{
              width: 900,
              height: 458,
              uri: '/assets/portfolio/scoutify/scoutify-prototype-1.png',
            }}
            width="100%"
            height="100%"
            ai="center"
          />
        </Stack>
        <YStack
          maw={600}
          marginHorizontal="auto"
          marginVertical="$6"
          w="100%"
          paddingHorizontal="$3"
          gap="$3"
        >
          <Paragraph>
            Below is the temporary mock of the Scoutify homepage. This is the site that all users
            will navigate to, either to find out more information about the company or to log in as
            any of the user types. This functional prototype shows how a user first lands on this
            website and creates a new account. The bottom section allows the demo user to quickly
            jump to different parts of the user flow, such as logging in as a Super Admin or after
            setting up an account. This way, the demo user does not need to go through the whole
            account creation process just to see how the screen looks as a new user.
          </Paragraph>
        </YStack>
        <Stack ai="center">
          <Image
            source={{
              width: 900,
              height: 506,
              uri: '/assets/portfolio/scoutify/scoutify-landing-page.png',
            }}
            width="100%"
            height="100%"
            ai="center"
            mb="$12"
          />
        </Stack>
      </YStack>
    </>
  )
}
