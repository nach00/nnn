import { H2, H6, Stack, H1, Paragraph, XStack, YStack, Image, Button } from 'tamagui'
import { YStack } from 'tamagui'
import { Eyebrow } from '../../components/Eyebrow'
import { Title } from '../../components/Title'
import { Link } from 'react-router-native'

export function Fossil() {
  return (
    <>
      <YStack>
        <YStack
          maw={1200}
          marginHorizontal="auto"
          marginVertical="$6"
          w="100%"
          paddingHorizontal="$3"
        >
          <Eyebrow>Email development</Eyebrow>
          <Title>Fossil</Title>
        </YStack>
        <YStack bc="$color9" h={300} $gtXs={{ h: 400 }} $gtSm={{ h: 550 }} $gtXl={{ h: 800 }}>
          <Image
            source={{
              uri: '/assets/portfolio/fossil/all-multi-mock.png',

              width: '100%',
              height: '100%',
            }}
          />
        </YStack>
        <YStack maw={1200} m="auto">
          <YStack
            m="$3"
            bc="$color3"
            p="$6"
            br="$10"
            boc="$color4"
            bw="$1"
            gap="$6"
            $gtSm={{ fd: 'row' }}
            style={{
              boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            }}
          >
            <YStack
              bc="$color4"
              p="$6"
              br="$7"
              boc="$color5"
              bw="$1"
              $gtSm={{ w: '100%', f: 1 }}
              gap="$6"
            >
              <Eyebrow>Tasks and responsibilities</Eyebrow>
              <Paragraph>
                I was responsible for developing and testing emails for Fossil's email marketing
                campaigns. This included developing emails for various holidays, sales, and other
                events. I was also responsible for testing emails across various email clients and
                devices. I worked closely with the marketing team to ensure that the emails were on
                a tight schedule and that they were consistent with the brand.
              </Paragraph>
            </YStack>
            <YStack
              bc="$color4"
              p="$6"
              br="$7"
              boc="$color5"
              bw="$1"
              $gtSm={{ w: '100%', f: 1 }}
              gap="$6"
            >
              <Eyebrow>Fossil Group, Inc.</Eyebrow>
              <Paragraph>
                Fossil Group, Inc., is an American fashion designer and manufacturer founded in 1984
                by Tom Kartsotis and based in Richardson, Texas. Their brands include Fossil, Relic,
                Michele Watch, Skagen Denmark, Misfit, WSI, and Zodiac Watches.
              </Paragraph>
              <a href="https://www.fossilgroup.com/" style={{ textDecoration: 'none' }}>
                <Button theme="active" w="100%">
                  fossilgroup.com
                </Button>
              </a>
            </YStack>
          </YStack>

          <YStack m="$3" gap="$4">
            {/*<Stack bc="$color9" br="$10" h={300} $gtXs={{ h: 400 }}>*/}
            {/*  <Image*/}
            {/*    source={{*/}
            {/*      uri: '/assets/portfolio/fossil/fossil-multi-mock.png',*/}
            {/*      width: '100%',*/}
            {/*      height: '100%',*/}
            {/*    }}*/}
            {/*    br="$10"*/}
            {/*  />*/}
            {/*</Stack>*/}
            <YStack gap="$4" $gtSm={{ fd: 'row' }}>
              <Stack bc="$color9" br="$10" h={300} $gtXs={{ h: 400 }} $gtSm={{ w: '100%', f: 1 }}>
                <Image
                  source={{
                    uri: '/assets/portfolio/fossil/skagen-multi.png',
                    width: '100%',
                    height: '100%',
                  }}
                  br="$10"
                />
              </Stack>
              <Stack bc="$color9" br="$10" h={300} $gtXs={{ h: 400 }} $gtSm={{ w: '100%', f: 1 }}>
                <Image
                  source={{
                    uri: '/assets/portfolio/fossil/michele-mock.png',
                    width: '100%',
                    height: '100%',
                  }}
                  br="$10"
                />
              </Stack>
            </YStack>
            <YStack gap="$4" $gtSm={{ fd: 'row' }}>
              <Stack bc="$color9" br="$10" h={300} $gtXs={{ h: 400 }} $gtSm={{ w: '100%', f: 1 }}>
                <Image
                  source={{
                    uri: '/assets/portfolio/fossil/watch-station-mock.png',
                    width: '100%',
                    height: '100%',
                  }}
                  br="$10"
                />
              </Stack>
              <Stack bc="$color9" br="$10" h={300} $gtXs={{ h: 400 }} $gtSm={{ w: '100%', f: 1 }}>
                <Image
                  source={{
                    uri: '/assets/portfolio/fossil/logo-group.svg',
                    width: '100%',
                    height: '100%',
                  }}
                  br="$10"
                />
              </Stack>
            </YStack>
          </YStack>

          <YStack
            backgroundColor="$color3"
            gap="$6"
            p="$6"
            br="$12"
            m="$3"
            boc="$color4"
            bw="$1"
            $gtSm={{ fd: 'row' }}
            style={{
              boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            }}
          >
            <YStack
              p="$6"
              f={1}
              backgroundColor="$color4"
              br="$7"
              miw="$20"
              gap="$4"
              boc="$color5"
              bw="$1"
            >
              <YStack>
                <Eyebrow>Year</Eyebrow>
                <Paragraph>2022-23</Paragraph>
              </YStack>
              <YStack>
                <Eyebrow>Services</Eyebrow>
                <Paragraph>Development</Paragraph>
              </YStack>
              <YStack>
                <Eyebrow>Tools</Eyebrow>
                <Paragraph>VS Code, Adobe XD</Paragraph>
              </YStack>
              <YStack>
                <Eyebrow>Agency</Eyebrow>
                <Paragraph>Insite</Paragraph>
              </YStack>
            </YStack>
            <YStack f={1}>
              <Eyebrow>OVERVIEW</Eyebrow>
              <YStack gap="$6">
                <Paragraph>
                  Fossil has a contract with Insite to develop and test emails for their email
                  marketing campaigns. This includes developing emails for various holidays, sales,
                  and other events. I am responsible for testing emails across various email clients
                  and devices. Their designers upload finalized Adobe XD files to a content
                  management system, and I use those files to develop the emails.
                </Paragraph>
                <Paragraph>
                  When I started working with Fossil, my co-worker had been working with them for
                  many years. He had a process in place, which utilizes templated code that can be
                  reused for future emails. Each cobrand had specific requirements that needed to be
                  met, and all emails needed to properly display on various email clients and
                  devices.
                </Paragraph>
              </YStack>
            </YStack>
          </YStack>
        </YStack>

        <Stack w="100%" h="100%">
          <Image
            source={{
              uri: '/assets/portfolio/fossil/logo-fossil-white.svg',
            }}
            f={1}
            resizeMode="contain"
          />
        </Stack>

        <Image
          source={{
            uri: '/assets/portfolio/fossil/fossil-multi-mock.png',
            width: '100%',
            height: 700,
          }}
        />
        {/*<Button size="$10" marginVertical="$20">*/}
        {/*  Next Project*/}
        {/*</Button>*/}
      </YStack>
    </>
  )
}
