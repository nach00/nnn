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
import { LinkOut } from '../../assets/icons'

export function RFIDInterlock() {
  return (
    <>
      <Stack bc="$color12">
        <YStack maw={1200} m="auto" themeInverse="true" ai="center" w="100%">
          {/*<XStack w={900} mt="$6" flexWrap="wrap">*/}
          {/*  <YStack p="$3" flex={1} w={300}>*/}
          {/*    <Eyebrow>YEAR</Eyebrow>*/}
          {/*    <Paragraph>2018-19</Paragraph>*/}
          {/*  </YStack>*/}
          {/*  <YStack p="$3" flex={1} w={300}>*/}
          {/*    <Eyebrow>INDUSTRY</Eyebrow>*/}
          {/*    <Paragraph>B2B Security</Paragraph>*/}
          {/*  </YStack>*/}
          {/*  <YStack p="$3" flex={1} w={300}>*/}
          {/*    <Eyebrow>PROJECT DURATION</Eyebrow>*/}
          {/*    <Paragraph>1 month</Paragraph>*/}
          {/*  </YStack>*/}
          {/*  <YStack p="$3" flex={1} w={300}>*/}
          {/*    <Eyebrow>SERVICES</Eyebrow>*/}
          {/*    <Paragraph>UX/UI Design</Paragraph>*/}
          {/*  </YStack>*/}
          {/*  <YStack p="$3" flex={1} w={300}>*/}
          {/*    <Eyebrow>TOOLS</Eyebrow>*/}
          {/*    <Paragraph>Adobe XD</Paragraph>*/}
          {/*  </YStack>*/}
          {/*  <YStack p="$3" flex={1} w={300}>*/}
          {/*    <Eyebrow>AGENCY</Eyebrow>*/}
          {/*    <Paragraph>Planet Nacho</Paragraph>*/}
          {/*  </YStack>*/}
          {/*  /!*<YStack p="$3" flex={1} w={200}>*!/*/}
          {/*  /!*  <Eyebrow>USER IMPACT</Eyebrow>*!/*/}
          {/*  /!*  <Paragraph>-80% time to task completion</Paragraph>*!/*/}
          {/*  /!*</YStack>*!/*/}
          {/*</XStack>*/}

          <YStack maw={900} bc="$color6" p="$6" mt="$6" gap="$3" mx="$3">
            <Paragraph>
              "Natcha’s role as a UX/UI designer played an integral part of RFID Interlock’s initial
              startup growth, as he vastly improved our dashboard and console experience. His
              designs and idea helped organize our data and allows our users to more easily navigate
              to the most useful pieces of information available. Before Natcha joined, a user might
              need to click into more than 5 or 6 layers of pages to find what they’re looking for.
              Without any directives or requirements, Natcha presented his solution, which was
              quickly understood and accepted as the better option. He is very attentive to detail
              and thoughtful in his approach to designing optimal solutions, and was a great
              pleasure to work with. I would highly recommend Natcha for any UX/UI design position,
              as his ability to design within any requirements has always been easy to work with,
              and most importantly, gets the job done."
            </Paragraph>

            <Paragraph fontWeight="bold">-Robert Davidson, Client</Paragraph>
          </YStack>
          <XStack w={900}>
            <YStack w={150} />
            <YStack w={600}>
              <YStack mt="$6">
                <YStack gap="$1">
                  <Eyebrow>UI/UX Design - Product Design</Eyebrow>
                  <Title>RFID Interlock</Title>
                </YStack>

                <XStack mt="$6" flexWrap="wrap" w={600}>
                  <YStack gap="$1" w={300} pb="$2" pr="$2">
                    <Eyebrow>OVERVIEW</Eyebrow>
                    <Paragraph>
                      RFID Interlock provides a solution to companies using heavy machinery and
                      equipment. Their product prevents unauthorized users, tracks usage, and
                      manages user access via its web console.
                    </Paragraph>
                  </YStack>
                  <YStack gap="$1" w={300} pb="$2" pl="$2">
                    <Eyebrow>PROBLEM</Eyebrow>
                    <Paragraph>
                      Initial admin controls and data sets were confusing and burdensome, lacking
                      efficient ways to manage users or view equipment usage statistics.
                    </Paragraph>
                  </YStack>
                  <YStack gap="$1" w={300} py="$2" pr="$2">
                    <Eyebrow>MY ROLE</Eyebrow>
                    <Paragraph>
                      UX Researcher, UX/UI Designer, & Project Manager I collaborated with business
                      stakeholders through planning calls, research, interviews, whiteboarding
                      sessions, and stakeholder review meetings.
                    </Paragraph>
                  </YStack>
                  <YStack gap="$1" w={300} py="$2" pl="$2">
                    <Eyebrow>PAIN POINTS</Eyebrow>
                    <Paragraph>
                      Interface needed a solution to prevent accidental user errors from untrained
                      employees and enhance equipment protection for companies. RFID's clients
                      expressed dissatisfaction with the sign in and account creation screens'
                      appearance, as it appeared untrustworthy.
                    </Paragraph>
                  </YStack>
                  <YStack gap="$1" w={300} pt="$2" pr="$2">
                    <Eyebrow>SOLUTION</Eyebrow>
                    <Paragraph>
                      Create a new dashboard that addresses many of the issues with the original
                      design. Give users a way to access equipment analytics and manage its users
                      from a single screen with ease. Develop new sign in and account creation
                      screens to enhance trust in the product and brand.
                    </Paragraph>
                  </YStack>
                  <YStack gap="$1" w={300} pt="$2" pl="$2">
                    <Eyebrow>BUSINESS IMPACT</Eyebrow>
                    <Paragraph>
                      Streamlined user experience by enhancing its unappealing and
                      difficult-to-navigate interface, which in turn made it easier to close deals.
                      Sales increased over 10% by the following quarter. Improved information
                      architecture, admins were able to navigate through tools and analytics more
                      easily. Average task competition rate reduced to 75 seconds.
                    </Paragraph>
                  </YStack>
                </XStack>
              </YStack>
            </YStack>
            <YStack gap="$3" ml="$3" mt="$6">
              <YStack>
                <Eyebrow>YEAR</Eyebrow>
                <Paragraph>2018-19</Paragraph>
              </YStack>
              <YStack>
                <Eyebrow>INDUSTRY</Eyebrow>
                <Paragraph>B2B Security</Paragraph>
              </YStack>
              <YStack>
                <Eyebrow>PROJECT DURATION</Eyebrow>
                <Paragraph>1 month</Paragraph>
              </YStack>
              <YStack>
                <Eyebrow>SERVICES</Eyebrow>
                <Paragraph>UX/UI Design</Paragraph>
              </YStack>
              <YStack>
                <Eyebrow>TOOLS</Eyebrow>
                <Paragraph>Adobe XD</Paragraph>
              </YStack>
              <YStack>
                <Eyebrow>AGENCY</Eyebrow>
                <Paragraph>Planet Nacho</Paragraph>
              </YStack>
            </YStack>
          </XStack>
        </YStack>
      </Stack>
    </>
  )
}
