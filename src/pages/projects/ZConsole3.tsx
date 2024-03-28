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
        <YStack maw={1200} m="auto" boc="blue" bw="$1">
          <YStack
            themeInverse="true"
            bc="$color1"
            ai="center"
            jc="space-between"
            marginBottom="$12"
            marginHorizontal="auto"
            marginTop="$3"
            paddingHorizontal="$3"
            $gtXs={{ maw: 600 }}
            $gtSm={{ maw: 800 }}
            boc="red"
            bw="$1"
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
          <Stack width={400} height={225}>
            <Image
              source={{
                width: '100%',
                height: '100%',
                uri: '/assets/portfolio/zimperium/zconsole/console-01.png',
              }}
            />
          </Stack>
        </YStack>
      </Stack>
      <Stack>
        <YStack>
          <XStack gap="$3">
            <YStack bc="$color6" p="$3" w="100%" f={1} ai="center">
              <H6>V4</H6>

              <Paragraph>Built with Angular.js</Paragraph>
              <Paragraph>More features</Paragraph>
              <Paragraph mb="$3">Older and slower</Paragraph>
              <YStack gap="$3">
                <Stack
                  width={400 / 2.5}
                  height={225 / 2.5}
                  $gtXs={{ width: 400 / 1.5, height: 225 / 1.5 }}
                  $gtSm={{ width: 400, height: 225 }}
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
                  width={400 / 2.5}
                  height={225 / 2.5}
                  $gtXs={{ width: 400 / 1.5, height: 225 / 1.5 }}
                  $gtSm={{ width: 400, height: 225 }}
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
            </YStack>
            <YStack bc="$color6" p="$3" w="100%" f={1} ai="center">
              <H6>V5</H6>
              <Paragraph>Built with React.js</Paragraph>
              <Paragraph>More scalability</Paragraph>
              <Paragraph mb="$3">Newer and faster</Paragraph>
              <YStack gap="$3">
                <Stack
                  width={400 / 2.5}
                  height={225 / 2.5}
                  $gtXs={{ width: 400 / 1.5, height: 225 / 1.5 }}
                  $gtSm={{ width: 400, height: 225 }}
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
                  width={400 / 2.5}
                  height={225 / 2.5}
                  $gtXs={{ width: 400 / 1.5, height: 225 / 1.5 }}
                  $gtSm={{ width: 400, height: 225 }}
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
            </YStack>
          </XStack>

          <YStack maw={600} marginHorizontal="auto" marginVertical="$6" w="100%" gap="$3">
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
            </YStack>
          </YStack>

          <YStack gap="$6">
            <YStack maw={600} marginHorizontal="auto" w="100%" gap="$3">
              <H5>V4 Feature mockups</H5>
            </YStack>

            <XStack gap="$3" flexWrap="wrap" w="100%">
              <YStack bc="$red4" p="$3" w="100%" $gtXs={{ w: 300 }}>
                <H1>1</H1>
                <Paragraph>Test</Paragraph>
              </YStack>
              <YStack bc="$red4" p="$3" w="100%" $gtXs={{ w: 300 }}>
                <H1>1</H1>
                <Paragraph>Test</Paragraph>
              </YStack>
            </XStack>

            <XStack flexWrap="wrap" gap="$3">
              <YStack bc="$color6" p="$3" w="100%" f={1} gap="$3" ai="center">
                <YStack gap="$3">
                  <Stack width={400 / 1.2} height={225 / 1.2}>
                    <Image
                      source={{
                        width: '100%',
                        height: '100%',
                        uri: '/assets/portfolio/zimperium/zconsole/zimperium-19.png',
                      }}
                    />
                  </Stack>
                </YStack>
                <Paragraph w="100%">New V4 Dashboard</Paragraph>
              </YStack>
              <YStack bc="$color6" p="$3" w="100%" f={1} gap="$3" ai="center">
                <YStack gap="$3">
                  <Stack width={400 / 1.2} height={225 / 1.2}>
                    <Image
                      source={{
                        width: '100%',
                        height: '100%',
                        uri: '/assets/portfolio/zimperium/zconsole/zimperium-14.png',
                      }}
                    />
                  </Stack>
                </YStack>
                <Paragraph w="100%">
                  Manage allow/deny third-party apps, or “Out-of-Compliance”
                </Paragraph>
              </YStack>
              <YStack bc="$color6" p="$3" w="100%" f={1} gap="$3" ai="center">
                <YStack gap="$3">
                  <Stack width={400 / 1.2} height={225 / 1.2}>
                    <Image
                      source={{
                        width: '100%',
                        height: '100%',
                        uri: '/assets/portfolio/zimperium/zconsole/zimperium-16.png',
                      }}
                    />
                  </Stack>
                </YStack>
                <Paragraph w="100%">
                  Filter the types of content being browsed on the web, along with specified IP
                  addresses
                </Paragraph>
              </YStack>
              <YStack bc="$color6" p="$3" w="100%" f={1} gap="$3" ai="center">
                <YStack gap="$3">
                  <Stack width={400 / 1.2} height={225 / 1.2}>
                    <Image
                      source={{
                        width: '100%',
                        height: '100%',
                        uri: '/assets/portfolio/zimperium/zconsole/zimperium-17.png',
                      }}
                    />
                  </Stack>
                </YStack>
                <Paragraph w="100%">
                  Display the data associated with a compromised device
                </Paragraph>
              </YStack>
              <YStack bc="$color6" p="$3" w="100%" f={1} gap="$3" ai="center">
                <YStack gap="$3">
                  <Stack width={400 / 1.2} height={225 / 1.2}>
                    <Image
                      source={{
                        width: '100%',
                        height: '100%',
                        uri: '/assets/portfolio/zimperium/zconsole/zimperium-13.png',
                      }}
                    />
                  </Stack>
                </YStack>
                <Paragraph w="100%">
                  Create customized device group policies based on specific threats, settings, and
                  actions
                </Paragraph>
              </YStack>
            </XStack>
          </YStack>
          <YStack gap="$6" mt="$12">
            <YStack maw={600} marginHorizontal="auto" w="100%" paddingHorizontal="$3" gap="$3">
              <H5>V5 Feature Mockups</H5>
            </YStack>

            <YStack bc="$color6" p="$3" w="100%" f={1} gap="$3" ai="center">
              <YStack gap="$3">
                <Stack width={400 / 1.2} height={225 / 1.2}>
                  <Image
                    source={{
                      width: '100%',
                      height: '100%',
                      uri: '/assets/portfolio/zimperium/zconsole/zimperium-18.png',
                    }}
                  />
                </Stack>
              </YStack>
              <Paragraph w="100%">New V5 Dashboard</Paragraph>
            </YStack>
            <YStack bc="$color6" p="$3" w="100%" f={1} gap="$3" ai="center">
              <YStack gap="$3">
                <Stack width={400 / 1.2} height={225 / 1.2}>
                  <Image
                    source={{
                      width: '100%',
                      height: '100%',
                      uri: '/assets/portfolio/zimperium/zconsole/zimperium-11.png',
                    }}
                  />
                </Stack>
              </YStack>
              <Paragraph w="100%">
                Display data for devices at risk of outdated operating system versions
              </Paragraph>
            </YStack>
            <YStack bc="$color6" p="$3" w="100%" f={1} gap="$3" ai="center">
              <YStack gap="$3">
                <Stack width={400 / 1.2} height={225 / 1.2}>
                  <Image
                    source={{
                      width: '100%',
                      height: '100%',
                      uri: '/assets/portfolio/zimperium/zconsole/zimperium-12.png',
                    }}
                  />
                </Stack>
              </YStack>
              <Paragraph w="100%">
                Edit authentication settings for single sign-on via web
              </Paragraph>
            </YStack>
            <YStack bc="$color6" p="$3" w="100%" f={1} gap="$3" ai="center">
              <YStack gap="$3">
                <Stack width={400 / 1.2} height={225 / 1.2}>
                  <Image
                    source={{
                      width: '100%',
                      height: '100%',
                      uri: '/assets/portfolio/zimperium/zconsole/zimperium-09.png',
                    }}
                  />
                </Stack>
              </YStack>
              <Paragraph w="100%">Create new admin role and specify certain permissions</Paragraph>
            </YStack>
            <YStack bc="$color6" p="$3" w="100%" f={1} gap="$3" ai="center">
              <YStack gap="$3">
                <Stack width={400 / 1.2} height={225 / 1.2}>
                  <Image
                    source={{
                      width: '100%',
                      height: '100%',
                      uri: '/assets/portfolio/zimperium/zconsole/zimperium-10.png',
                    }}
                  />
                </Stack>
              </YStack>
              <Paragraph w="100%">
                Manage user roles and actions for specific security permissions
              </Paragraph>
            </YStack>
            <YStack bc="$color6" p="$3" w="100%" f={1} gap="$3" ai="center">
              <YStack gap="$3">
                <Stack width={400 / 1.2} height={225 / 1.2}>
                  <Image
                    source={{
                      width: '100%',
                      height: '100%',
                      uri: '/assets/portfolio/zimperium/zconsole/zimperium-07.png',
                    }}
                  />
                </Stack>
              </YStack>
              <Paragraph w="100%">
                Alert notification for successful edit of team members and permission
              </Paragraph>
            </YStack>
            <YStack bc="$color6" p="$3" w="100%" f={1} gap="$3" ai="center">
              <YStack gap="$3">
                <Stack width={400 / 1.2} height={225 / 1.2}>
                  <Image
                    source={{
                      width: '100%',
                      height: '100%',
                      uri: '/assets/portfolio/zimperium/zconsole/zimperium-08.png',
                    }}
                  />
                </Stack>
              </YStack>
              <Paragraph w="100%">
                Rules process to create automated actions based on previous events
              </Paragraph>
            </YStack>
            <YStack bc="$color6" p="$3" w="100%" f={1} gap="$3" ai="center">
              <YStack gap="$3">
                <Stack width={400 / 1.2} height={225 / 1.2}>
                  <Image
                    source={{
                      width: '100%',
                      height: '100%',
                      uri: '/assets/portfolio/zimperium/zconsole/zimperium-05.png',
                    }}
                  />
                </Stack>
              </YStack>
              <Paragraph w="100%">
                Manage Zimperium subscription settings for user accounts
              </Paragraph>
            </YStack>
            <YStack bc="$color6" p="$3" w="100%" f={1} gap="$3" ai="center">
              <YStack gap="$3">
                <Stack width={400 / 1.2} height={225 / 1.2}>
                  <Image
                    source={{
                      width: '100%',
                      height: '100%',
                      uri: '/assets/portfolio/zimperium/zconsole/zimperium-06.png',
                    }}
                  />
                </Stack>
              </YStack>
              <Paragraph w="100%">Add or remove apps associated with teams</Paragraph>
            </YStack>
            <YStack bc="$color6" p="$3" w="100%" f={1} gap="$3" ai="center">
              <YStack gap="$3">
                <Stack width={400 / 1.2} height={225 / 1.2}>
                  <Image
                    source={{
                      width: '100%',
                      height: '100%',
                      uri: '/assets/portfolio/zimperium/zconsole/zimperium-03.png',
                    }}
                  />
                </Stack>
              </YStack>
              <Paragraph w="100%">
                Modal dialog to mass invite users by uploading CSV file
              </Paragraph>
            </YStack>
            <YStack bc="$color6" p="$3" w="100%" f={1} gap="$3" ai="center">
              <YStack gap="$3">
                <Stack width={400 / 1.2} height={225 / 1.2}>
                  <Image
                    source={{
                      width: '100%',
                      height: '100%',
                      uri: '/assets/portfolio/zimperium/zconsole/zimperium-04.png',
                    }}
                  />
                </Stack>
              </YStack>
              <Paragraph w="100%">
                Manage security metric and specify proximity and threat value
              </Paragraph>
            </YStack>
            <YStack bc="$color6" p="$3" w="100%" f={1} gap="$3" ai="center">
              <YStack gap="$3">
                <Stack width={400 / 1.2} height={225 / 1.2}>
                  <Image
                    source={{
                      width: '100%',
                      height: '100%',
                      uri: '/assets/portfolio/zimperium/zconsole/zimperium-01.png',
                    }}
                  />
                </Stack>
              </YStack>
              <Paragraph w="100%">Code comparison viewer for mobile app security scan</Paragraph>
            </YStack>
            <YStack bc="$color6" p="$3" w="100%" f={1} gap="$3" ai="center">
              <YStack gap="$3">
                <Stack width={400 / 1.2} height={225 / 1.2}>
                  <Image
                    source={{
                      width: '100%',
                      height: '100%',
                      uri: '/assets/portfolio/zimperium/zconsole/zimperium-02.png',
                    }}
                  />
                </Stack>
              </YStack>
              <Paragraph w="100%">
                Build compare feature to determine security differences when uploading an updated
                version of your app
              </Paragraph>
            </YStack>
            <YStack bc="$color6" p="$3" w="100%" f={1} gap="$3" ai="center">
              <YStack gap="$3">
                <Stack width={400 / 1.2} height={225 / 1.2}>
                  <Image
                    source={{
                      width: '100%',
                      height: '100%',
                      uri: '/assets/portfolio/zimperium/zconsole/zimperium-15.png',
                    }}
                  />
                </Stack>
              </YStack>
              <Paragraph w="100%">
                Manage QR codes provided for license activation of mobile app
              </Paragraph>
            </YStack>
          </YStack>

          <YStack
            maw={900}
            marginHorizontal="auto"
            marginVertical="$6"
            w="100%"
            paddingHorizontal="$3"
            gap="$3"
          >
            <YStack gap="$3">
              <YStack w={600} m="auto">
                <YStack
                  maw={600}
                  marginHorizontal="auto"
                  marginVertical="$6"
                  w="100%"
                  paddingHorizontal="$3"
                  gap="$3"
                >
                  <H5>Step-by-step wizard for easy setup</H5>
                  <Paragraph>
                    Shown below is my design for a user to setup and configure their mobile network
                    with the V5 zConsole.
                  </Paragraph>
                </YStack>
              </YStack>

              {/*<H5 mt="$6">V4 Features</H5>*/}
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
          </YStack>

          <YStack
            maw={600}
            marginHorizontal="auto"
            marginVertical="$6"
            w="100%"
            paddingHorizontal="$3"
            gap="$3"
          >
            <YStack gap="$3">
              <H5>Security analytics reports</H5>

              <Paragraph>
                Once I had established my general understanding of the company, its services, and
                the stakeholders involved, I ultimately decided that creating a design system would
                be vital to remaining consistent in all my designs. I designed Hyperion, which I
                describe as a big data design system. You can see more about my design process
                creating this system below.
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
