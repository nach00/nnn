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

export function ZConsole() {
  return (
    <>
      <Stack bc="$color12">
        <YStack maw={1200} m="auto" themeInverse="true" ai="center" w="100%">
          <YStack
            bc="$color1"
            ai="center"
            jc="space-between"
            marginHorizontal="auto"
            marginTop="$3"
            paddingHorizontal="$3"
            // $gtXs={{ maw: 600 }}
            // $gtSm={{ maw: 800 }}
            maw={600}
            mb="$3"
          >
            <YStack mt="$6">
              <YStack gap="$1">
                <Eyebrow>Product Design</Eyebrow>
                <Title>zConsole</Title>
              </YStack>
              <Paragraph mt="$3">
                zConsole is an administrative dashboard used by mobile app developers and
                cybersecurity teams of large enterprises. During my time at Zimperium, I managed
                feature designs for 2 versions of this console, called V4 and V5. Below is a brief
                comparison between the two.
              </Paragraph>
            </YStack>
          </YStack>
          <XStack flexWrap="wrap" gap="$3" jc="center">
            <YStack p="$3" bc="$color6" ai="center">
              <H6>V4</H6>
              <Paragraph>Built with Angular.js</Paragraph>
              <Paragraph>More features</Paragraph>
              <Paragraph mb="$3">Older and slower</Paragraph>
              <Stack
                width={338}
                height={190}
                $gtXs={{ w: 294, h: 160 }}
                $gtSm={{ w: 354, h: 200 }}
                $gtMd={{ w: 418, h: 235 }}
                $gtLg={{ w: 565, h: 317 }}
              >
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: '/assets/portfolio/zimperium/zconsole/console-01.png',
                  }}
                />
              </Stack>
              <Stack
                width={338}
                height={190}
                $gtXs={{ w: 294, h: 160 }}
                $gtSm={{ w: 354, h: 200 }}
                $gtMd={{ w: 418, h: 235 }}
                $gtLg={{ w: 565, h: 317 }}
                mt="$3"
              >
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: '/assets/portfolio/zimperium/zconsole/devices-01.png',
                  }}
                />
              </Stack>
            </YStack>
            <YStack p="$3" bc="$color6" ai="center">
              <H6>V5</H6>
              <Paragraph>Built with React.js</Paragraph>
              <Paragraph>More scalability</Paragraph>
              <Paragraph mb="$3">Newer and faster</Paragraph>
              <Stack
                width={338}
                height={190}
                $gtXs={{ w: 294, h: 160 }}
                $gtSm={{ w: 354, h: 200 }}
                $gtMd={{ w: 418, h: 235 }}
                $gtLg={{ w: 565, h: 317 }}
              >
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: '/assets/portfolio/zimperium/zconsole/console-02.png',
                  }}
                />
              </Stack>
              <Stack
                width={338}
                height={190}
                $gtXs={{ w: 294, h: 160 }}
                $gtSm={{ w: 354, h: 200 }}
                $gtMd={{ w: 418, h: 235 }}
                $gtLg={{ w: 565, h: 317 }}
                mt="$3"
              >
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: '/assets/portfolio/zimperium/zconsole/devices-02.png',
                  }}
                />
              </Stack>
            </YStack>
          </XStack>

          <YStack
            bc="$color1"
            ai="center"
            jc="space-between"
            marginHorizontal="auto"
            marginTop="$3"
            paddingHorizontal="$3"
            maw={600}
            mb="$3"
            gap="$3"
          >
            <Paragraph>
              The product and engineering team was divided into two teams, one for each version. The
              reasoning behind this team and project structure is because:
            </Paragraph>
            <ListItem>
              <Paragraph>
                - Most of the customers used V4 because it had been around longer and they were used
                to it.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                - The new V5 version was still newly being developed; there were not as many
                functions as V4.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                - The problem with V4 is that it could not scale as much as V5. Having more data in
                V4 would reduce performance, which is the reason for the development of the newer
                version.
              </Paragraph>
            </ListItem>
            <Paragraph>
              Our team tried as much as possible to reduce the amount of rework that may be needed
              when building a new feature for both consoles, but sometimes it couldn’t be avoided.
              Therefore, some tasks required me to design vastly different user interfaces.
            </Paragraph>

            <Paragraph>
              Since V4 had planned to eventually be deprecated, minimal work was required for those
              associated tasks, meaning I was told to just have the “get it done” mentality. With
              V5, I had more design freedom to design things the right way.
            </Paragraph>

            <YStack gap="$3">
              <H4 mt="$6">Feature Design Tasks</H4>

              <Paragraph>
                As customers demanded more features and project managed the team's approach, I was
                assigned to provide designs for new features that would be implented. Below are a
                few mocks for some of the features I designed.
              </Paragraph>

              {/*<H5 mt="$6">V4 Features</H5>*/}
            </YStack>
          </YStack>

          <H5 mb="$3">V4 Features</H5>
          <XStack flexWrap="wrap" gap="$3" jc="center">
            <YStack
              p="$3"
              bc="$color6"
              ai="center"
              w={364}
              $gtXs={{ w: 310 }}
              $gtSm={{ w: 380 }}
              $gtMd={{ w: 443 }}
              $gtLg={{ w: 591 }}
            >
              <Stack
                width={338}
                height={190}
                $gtXs={{ w: 294, h: 160 }}
                $gtSm={{ w: 354, h: 200 }}
                $gtMd={{ w: 418, h: 235 }}
                $gtLg={{ w: 565, h: 317 }}
              >
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: '/assets/portfolio/zimperium/zconsole/zimperium-19.png',
                  }}
                />
              </Stack>
              <Paragraph w="100%" mt="$3">
                New V4 Dashboard
              </Paragraph>
            </YStack>
            <YStack
              p="$3"
              bc="$color6"
              ai="center"
              w={364}
              $gtXs={{ w: 310 }}
              $gtSm={{ w: 380 }}
              $gtMd={{ w: 443 }}
              $gtLg={{ w: 591 }}
            >
              <Stack
                width={338}
                height={190}
                $gtXs={{ w: 294, h: 160 }}
                $gtSm={{ w: 354, h: 200 }}
                $gtMd={{ w: 418, h: 235 }}
                $gtLg={{ w: 565, h: 317 }}
              >
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: '/assets/portfolio/zimperium/zconsole/zimperium-14.png',
                  }}
                />
              </Stack>
              <Paragraph w="100%" mt="$3">
                Manage allow/deny third-party apps, or “Out-of-Compliance”
              </Paragraph>
            </YStack>
            <YStack
              p="$3"
              bc="$color6"
              ai="center"
              w={364}
              $gtXs={{ w: 310 }}
              $gtSm={{ w: 380 }}
              $gtMd={{ w: 443 }}
              $gtLg={{ w: 591 }}
            >
              <Stack
                width={338}
                height={190}
                $gtXs={{ w: 294, h: 160 }}
                $gtSm={{ w: 354, h: 200 }}
                $gtMd={{ w: 418, h: 235 }}
                $gtLg={{ w: 565, h: 317 }}
              >
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: '/assets/portfolio/zimperium/zconsole/zimperium-16.png',
                  }}
                />
              </Stack>
              <Paragraph w="100%" mt="$3">
                Filter the types of content browsed on the web, along with specified IP addresses
              </Paragraph>
            </YStack>
            <YStack
              p="$3"
              bc="$color6"
              ai="center"
              w={364}
              $gtXs={{ w: 310 }}
              $gtSm={{ w: 380 }}
              $gtMd={{ w: 443 }}
              $gtLg={{ w: 591 }}
            >
              <Stack
                width={338}
                height={190}
                $gtXs={{ w: 294, h: 160 }}
                $gtSm={{ w: 354, h: 200 }}
                $gtMd={{ w: 418, h: 235 }}
                $gtLg={{ w: 565, h: 317 }}
              >
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: '/assets/portfolio/zimperium/zconsole/zimperium-17.png',
                  }}
                />
              </Stack>
              <Paragraph w="100%" mt="$3">
                Display the data associated with a compromised device
              </Paragraph>
            </YStack>
            <YStack
              p="$3"
              bc="$color6"
              ai="center"
              w={364}
              $gtXs={{ w: 310 }}
              $gtSm={{ w: 380 }}
              $gtMd={{ w: 443 }}
              $gtLg={{ w: 591 }}
            >
              <Stack
                width={338}
                height={190}
                $gtXs={{ w: 294, h: 160 }}
                $gtSm={{ w: 354, h: 200 }}
                $gtMd={{ w: 418, h: 235 }}
                $gtLg={{ w: 565, h: 317 }}
              >
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: '/assets/portfolio/zimperium/zconsole/zimperium-13.png',
                  }}
                />
              </Stack>
              <Paragraph w="100%" mt="$3">
                Create customized device group policies based on specific threats or actions
              </Paragraph>
            </YStack>
            <YStack
              p="$3"
              bc="$color6"
              ai="center"
              w={364}
              $gtXs={{ w: 310 }}
              $gtSm={{ w: 380 }}
              $gtMd={{ w: 443 }}
              $gtLg={{ w: 591 }}
            >
              <Stack
                width={338}
                height={190}
                $gtXs={{ w: 294, h: 160 }}
                $gtSm={{ w: 354, h: 200 }}
                $gtMd={{ w: 418, h: 235 }}
                $gtLg={{ w: 565, h: 317 }}
              >
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: '/assets/portfolio/zimperium/zconsole/zimperium-21.png',
                  }}
                />
              </Stack>
              <Paragraph w="100%" mt="$3">
                Choose the level of information that is being collected
              </Paragraph>
            </YStack>
          </XStack>

          <H5 my="$3">V5 Features</H5>

          <XStack flexWrap="wrap" gap="$3" jc="center">
            <YStack
              p="$3"
              bc="$color6"
              ai="center"
              w={364}
              $gtXs={{ w: 310 }}
              $gtSm={{ w: 380 }}
              $gtMd={{ w: 443 }}
              $gtLg={{ w: 591 }}
            >
              <Stack
                width={338}
                height={190}
                $gtXs={{ w: 294, h: 160 }}
                $gtSm={{ w: 354, h: 200 }}
                $gtMd={{ w: 418, h: 235 }}
                $gtLg={{ w: 565, h: 317 }}
              >
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: '/assets/portfolio/zimperium/zconsole/zimperium-18.png',
                  }}
                />
              </Stack>
              <Paragraph w="100%" mt="$3">
                New V5 Dashboard
              </Paragraph>
            </YStack>
            <YStack
              p="$3"
              bc="$color6"
              ai="center"
              w={364}
              $gtXs={{ w: 310 }}
              $gtSm={{ w: 380 }}
              $gtMd={{ w: 443 }}
              $gtLg={{ w: 591 }}
            >
              <Stack
                width={338}
                height={190}
                $gtXs={{ w: 294, h: 160 }}
                $gtSm={{ w: 354, h: 200 }}
                $gtMd={{ w: 418, h: 235 }}
                $gtLg={{ w: 565, h: 317 }}
              >
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: '/assets/portfolio/zimperium/zconsole/zimperium-11.png',
                  }}
                />
              </Stack>
              <Paragraph w="100%" mt="$3">
                Display data for devices at risk of outdated operating system versions
              </Paragraph>
            </YStack>
            <YStack
              p="$3"
              bc="$color6"
              ai="center"
              w={364}
              $gtXs={{ w: 310 }}
              $gtSm={{ w: 380 }}
              $gtMd={{ w: 443 }}
              $gtLg={{ w: 591 }}
            >
              <Stack
                width={338}
                height={190}
                $gtXs={{ w: 294, h: 160 }}
                $gtSm={{ w: 354, h: 200 }}
                $gtMd={{ w: 418, h: 235 }}
                $gtLg={{ w: 565, h: 317 }}
              >
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: '/assets/portfolio/zimperium/zconsole/zimperium-12.png',
                  }}
                />
              </Stack>
              <Paragraph w="100%" mt="$3">
                Edit authentication settings for single sign-on via web
              </Paragraph>
            </YStack>

            <YStack
              p="$3"
              bc="$color6"
              ai="center"
              w={364}
              $gtXs={{ w: 310 }}
              $gtSm={{ w: 380 }}
              $gtMd={{ w: 443 }}
              $gtLg={{ w: 591 }}
            >
              <Stack
                width={338}
                height={190}
                $gtXs={{ w: 294, h: 160 }}
                $gtSm={{ w: 354, h: 200 }}
                $gtMd={{ w: 418, h: 235 }}
                $gtLg={{ w: 565, h: 317 }}
              >
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: '/assets/portfolio/zimperium/zconsole/zimperium-09.png',
                  }}
                />
              </Stack>
              <Paragraph w="100%" mt="$3">
                Create new admin role and specify certain permissions
              </Paragraph>
            </YStack>
            <YStack
              p="$3"
              bc="$color6"
              ai="center"
              w={364}
              $gtXs={{ w: 310 }}
              $gtSm={{ w: 380 }}
              $gtMd={{ w: 443 }}
              $gtLg={{ w: 591 }}
            >
              <Stack
                width={338}
                height={190}
                $gtXs={{ w: 294, h: 160 }}
                $gtSm={{ w: 354, h: 200 }}
                $gtMd={{ w: 418, h: 235 }}
                $gtLg={{ w: 565, h: 317 }}
              >
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: '/assets/portfolio/zimperium/zconsole/zimperium-10.png',
                  }}
                />
              </Stack>
              <Paragraph w="100%" mt="$3">
                Manage user roles and actions for specific security permissions
              </Paragraph>
            </YStack>
            <YStack
              p="$3"
              bc="$color6"
              ai="center"
              w={364}
              $gtXs={{ w: 310 }}
              $gtSm={{ w: 380 }}
              $gtMd={{ w: 443 }}
              $gtLg={{ w: 591 }}
            >
              <Stack
                width={338}
                height={190}
                $gtXs={{ w: 294, h: 160 }}
                $gtSm={{ w: 354, h: 200 }}
                $gtMd={{ w: 418, h: 235 }}
                $gtLg={{ w: 565, h: 317 }}
              >
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: '/assets/portfolio/zimperium/zconsole/zimperium-07.png',
                  }}
                />
              </Stack>
              <Paragraph w="100%" mt="$3">
                Alert notification for successful edit of team members and permission
              </Paragraph>
            </YStack>
            <YStack
              p="$3"
              bc="$color6"
              ai="center"
              w={364}
              $gtXs={{ w: 310 }}
              $gtSm={{ w: 380 }}
              $gtMd={{ w: 443 }}
              $gtLg={{ w: 591 }}
            >
              <Stack
                width={338}
                height={190}
                $gtXs={{ w: 294, h: 160 }}
                $gtSm={{ w: 354, h: 200 }}
                $gtMd={{ w: 418, h: 235 }}
                $gtLg={{ w: 565, h: 317 }}
              >
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: '/assets/portfolio/zimperium/zconsole/zimperium-08.png',
                  }}
                />
              </Stack>
              <Paragraph w="100%" mt="$3">
                Rules process to create automated actions based on previous events
              </Paragraph>
            </YStack>
            <YStack
              p="$3"
              bc="$color6"
              ai="center"
              w={364}
              $gtXs={{ w: 310 }}
              $gtSm={{ w: 380 }}
              $gtMd={{ w: 443 }}
              $gtLg={{ w: 591 }}
            >
              <Stack
                width={338}
                height={190}
                $gtXs={{ w: 294, h: 160 }}
                $gtSm={{ w: 354, h: 200 }}
                $gtMd={{ w: 418, h: 235 }}
                $gtLg={{ w: 565, h: 317 }}
              >
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: '/assets/portfolio/zimperium/zconsole/zimperium-05.png',
                  }}
                />
              </Stack>
              <Paragraph w="100%" mt="$3">
                Manage Zimperium subscription settings for user accounts
              </Paragraph>
            </YStack>
            <YStack
              p="$3"
              bc="$color6"
              ai="center"
              w={364}
              $gtXs={{ w: 310 }}
              $gtSm={{ w: 380 }}
              $gtMd={{ w: 443 }}
              $gtLg={{ w: 591 }}
            >
              <Stack
                width={338}
                height={190}
                $gtXs={{ w: 294, h: 160 }}
                $gtSm={{ w: 354, h: 200 }}
                $gtMd={{ w: 418, h: 235 }}
                $gtLg={{ w: 565, h: 317 }}
              >
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: '/assets/portfolio/zimperium/zconsole/zimperium-06.png',
                  }}
                />
              </Stack>
              <Paragraph w="100%" mt="$3">
                Add or remove apps associated with teams
              </Paragraph>
            </YStack>
            <YStack
              p="$3"
              bc="$color6"
              ai="center"
              w={364}
              $gtXs={{ w: 310 }}
              $gtSm={{ w: 380 }}
              $gtMd={{ w: 443 }}
              $gtLg={{ w: 591 }}
            >
              <Stack
                width={338}
                height={190}
                $gtXs={{ w: 294, h: 160 }}
                $gtSm={{ w: 354, h: 200 }}
                $gtMd={{ w: 418, h: 235 }}
                $gtLg={{ w: 565, h: 317 }}
              >
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: '/assets/portfolio/zimperium/zconsole/zimperium-03.png',
                  }}
                />
              </Stack>
              <Paragraph w="100%" mt="$3">
                Modal dialog to mass invite users by uploading CSV file
              </Paragraph>
            </YStack>
            <YStack
              p="$3"
              bc="$color6"
              ai="center"
              w={364}
              $gtXs={{ w: 310 }}
              $gtSm={{ w: 380 }}
              $gtMd={{ w: 443 }}
              $gtLg={{ w: 591 }}
            >
              <Stack
                width={338}
                height={190}
                $gtXs={{ w: 294, h: 160 }}
                $gtSm={{ w: 354, h: 200 }}
                $gtMd={{ w: 418, h: 235 }}
                $gtLg={{ w: 565, h: 317 }}
              >
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: '/assets/portfolio/zimperium/zconsole/zimperium-04.png',
                  }}
                />
              </Stack>
              <Paragraph w="100%" mt="$3">
                Modal dialog to mass invite users by uploading CSV file
              </Paragraph>
            </YStack>
            <YStack
              p="$3"
              bc="$color6"
              ai="center"
              w={364}
              $gtXs={{ w: 310 }}
              $gtSm={{ w: 380 }}
              $gtMd={{ w: 443 }}
              $gtLg={{ w: 591 }}
            >
              <Stack
                width={338}
                height={190}
                $gtXs={{ w: 294, h: 160 }}
                $gtSm={{ w: 354, h: 200 }}
                $gtMd={{ w: 418, h: 235 }}
                $gtLg={{ w: 565, h: 317 }}
              >
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: '/assets/portfolio/zimperium/zconsole/zimperium-01.png',
                  }}
                />
              </Stack>
              <Paragraph w="100%" mt="$3">
                Code comparison viewer for mobile app security scan
              </Paragraph>
            </YStack>
            <YStack
              p="$3"
              bc="$color6"
              ai="center"
              w={364}
              $gtXs={{ w: 310 }}
              $gtSm={{ w: 380 }}
              $gtMd={{ w: 443 }}
              $gtLg={{ w: 591 }}
            >
              <Stack
                width={338}
                height={190}
                $gtXs={{ w: 294, h: 160 }}
                $gtSm={{ w: 354, h: 200 }}
                $gtMd={{ w: 418, h: 235 }}
                $gtLg={{ w: 565, h: 317 }}
              >
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: '/assets/portfolio/zimperium/zconsole/zimperium-02.png',
                  }}
                />
              </Stack>
              <Paragraph w="100%" mt="$3">
                Build compare feature to determine security differences when uploading an updated
                version of your app
              </Paragraph>
            </YStack>
            <YStack
              p="$3"
              bc="$color6"
              ai="center"
              w={364}
              $gtXs={{ w: 310 }}
              $gtSm={{ w: 380 }}
              $gtMd={{ w: 443 }}
              $gtLg={{ w: 591 }}
            >
              <Stack
                width={338}
                height={190}
                $gtXs={{ w: 294, h: 160 }}
                $gtSm={{ w: 354, h: 200 }}
                $gtMd={{ w: 418, h: 235 }}
                $gtLg={{ w: 565, h: 317 }}
              >
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: '/assets/portfolio/zimperium/zconsole/zimperium-15.png',
                  }}
                />
              </Stack>
              <Paragraph w="100%" mt="$3">
                Manage QR codes provided for license activation of mobile app
              </Paragraph>
            </YStack>
          </XStack>
          <YStack
            bc="$color1"
            ai="center"
            jc="space-between"
            marginHorizontal="auto"
            marginTop="$3"
            paddingHorizontal="$3"
            // $gtXs={{ maw: 600 }}
            // $gtSm={{ maw: 800 }}
            maw={600}
            mb="$3"
          >
            <YStack mt="$6">
              <H4>Step-by-step wizard for easy setup</H4>
              <Paragraph mt="$3">
                Shown below is my design for a user to setup and configure their mobile network with
                the V5 zConsole.
              </Paragraph>
            </YStack>
          </YStack>
          <YStack gap="$3">
            <Stack
              width={900 / 2.5}
              height={1398 / 2.5}
              $gtXs={{ width: 900 / 1.5, height: 1398 / 1.5 }}
              $gtSm={{ width: 900, height: 506 }}
            >
              <Image
                source={{
                  width: '100%',
                  height: '100%',
                  uri: '/assets/portfolio/zimperium/zconsole/wizard-1.png',
                }}
              />
            </Stack>
            <Stack
              width={900 / 2.5}
              height={1398 / 2.5}
              $gtXs={{ width: 900 / 1.5, height: 1398 / 1.5 }}
              $gtSm={{ width: 900, height: 506 }}
            >
              <Image
                source={{
                  width: '100%',
                  height: '100%',
                  uri: '/assets/portfolio/zimperium/zconsole/wizard-2.png',
                }}
              />
            </Stack>
            <Stack
              width={900 / 2.5}
              height={1398 / 2.5}
              $gtXs={{ width: 900 / 1.5, height: 1398 / 1.5 }}
              $gtSm={{ width: 900, height: 506 }}
            >
              <Image
                source={{
                  width: '100%',
                  height: '100%',
                  uri: '/assets/portfolio/zimperium/zconsole/wizard-3.png',
                }}
              />
            </Stack>
            <Stack
              width={900 / 2.5}
              height={1398 / 2.5}
              $gtXs={{ width: 900 / 1.5, height: 1398 / 1.5 }}
              $gtSm={{ width: 900, height: 506 }}
            >
              <Image
                source={{
                  width: '100%',
                  height: '100%',
                  uri: '/assets/portfolio/zimperium/zconsole/wizard-4.png',
                }}
              />
            </Stack>
            <Stack
              width={900 / 2.5}
              height={1398 / 2.5}
              $gtXs={{ width: 900 / 1.5, height: 1398 / 1.5 }}
              $gtSm={{ width: 900, height: 506 }}
            >
              <Image
                source={{
                  width: '100%',
                  height: '100%',
                  uri: '/assets/portfolio/zimperium/zconsole/wizard-5.png',
                }}
              />
            </Stack>
            <Stack
              width={900 / 2.5}
              height={1398 / 2.5}
              $gtXs={{ width: 900 / 1.5, height: 1398 / 1.5 }}
              $gtSm={{ width: 900, height: 506 }}
            >
              <Image
                source={{
                  width: '100%',
                  height: '100%',
                  uri: '/assets/portfolio/zimperium/zconsole/wizard-6.png',
                }}
              />
            </Stack>
            <Stack
              width={900 / 2.5}
              height={1398 / 2.5}
              $gtXs={{ width: 900 / 1.5, height: 1398 / 1.5 }}
              $gtSm={{ width: 900, height: 506 }}
            >
              <Image
                source={{
                  width: '100%',
                  height: '100%',
                  uri: '/assets/portfolio/zimperium/zconsole/wizard-7.png',
                }}
              />
            </Stack>
          </YStack>
          <YStack
            bc="$color1"
            ai="center"
            jc="space-between"
            marginHorizontal="auto"
            marginTop="$3"
            paddingHorizontal="$3"
            // $gtXs={{ maw: 600 }}
            // $gtSm={{ maw: 800 }}
            maw={600}
            mb="$3"
          >
            <YStack mt="$6">
              <H4>Security analytics reports</H4>
              <Paragraph mt="$3">
                Once I had established my general understanding of the company, its services, and
                the stakeholders involved, I ultimately decided that creating a design system would
                be vital to remaining consistent in all my designs. I designed Hyperion, which I
                describe as a big data design system. You can see more about my design process
                creating this system below.
              </Paragraph>
            </YStack>
          </YStack>
          <YStack gap="$3" mb="$12">
            <Stack
              width={900 / 2.5}
              height={1398 / 2.5}
              $gtXs={{ width: 900 / 1.5, height: 1398 / 1.5 }}
              $gtSm={{ width: 900, height: 506 }}
            >
              <Image
                source={{
                  width: '100%',
                  height: '100%',
                  uri: '/assets/portfolio/zimperium/zconsole/zscan-01.png',
                }}
              />
            </Stack>
            <Stack
              width={900 / 2.5}
              height={1398 / 2.5}
              $gtXs={{ width: 900 / 1.5, height: 1398 / 1.5 }}
              $gtSm={{ width: 900, height: 506 }}
            >
              <Image
                source={{
                  width: '100%',
                  height: '100%',
                  uri: '/assets/portfolio/zimperium/zconsole/zscan-02.png',
                }}
              />
            </Stack>
            <Stack
              width={900 / 2.5}
              height={1398 / 2.5}
              $gtXs={{ width: 900 / 1.5, height: 1398 / 1.5 }}
              $gtSm={{ width: 900, height: 506 }}
            >
              <Image
                source={{
                  width: '100%',
                  height: '100%',
                  uri: '/assets/portfolio/zimperium/zconsole/zscan-03.png',
                }}
              />
            </Stack>
          </YStack>
        </YStack>
      </Stack>
    </>
  )
}
