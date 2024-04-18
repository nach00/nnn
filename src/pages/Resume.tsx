import { H2, Stack, Paragraph, XStack, YStack, Image, Button } from 'tamagui'
import { Experience } from '../content/Experience'
import { Education } from '../content/Education'
import { Overview } from '../content/Overview'
import { Awards } from '../content/Awards'
import { Link } from 'react-router-native'

export function Resume() {
  return (
    <>
      <YStack jc="center" $gtSm={{ fd: 'row', margin: '$3' }}>
        <YStack ai="center">
          <YStack
            p="$6"
            bc="$color3"
            br="$10"
            boc="$color4"
            bw="$1"
            style={{
              boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            }}
          >
            <Image
              source={{
                uri: '/assets/photos/ai_profile.jpg',
                width: 300,
                height: 300,
              }}
              f={1}
              br="$7"
            />
            <YStack gap="$3" ai="center" mt="$6">
              <H2 ta="center">Natcha Pradappet</H2>
              {/*<Paragraph>@npradappet</Paragraph>*/}
              <Link to="/contact">
                <Button>Contact me</Button>
              </Link>
              <a
                href="https://drive.google.com/file/d/1CtfntNdtceR6QrpqUcvav9MngrgLtbOf/view?usp=sharing"
                style={{ textDecoration: 'none' }}
              >
                <Button>Download original resume</Button>
              </a>
              <a
                href="https://drive.google.com/file/d/1UZHSnu19OoNIZKwutUrtb7TQCK_ipCQu/view?usp=drive_link"
                style={{ textDecoration: 'none' }}
              >
                <Button>Download ATS resume</Button>
              </a>
            </YStack>
          </YStack>
        </YStack>
        <YStack
          p="$6"
          gap="$12"
          $gtSm={{ paddingVertical: '$0', w: 450 }}
          $gtMd={{ w: 600 }}
          $gtLg={{ w: 800 }}
        >
          <Stack gap="$6">
            <Overview />
          </Stack>

          <Stack gap="$6">
            <Experience />
          </Stack>

          <Stack gap="$6">
            <Education />
          </Stack>

          <Stack gap="$6">
            <Awards />
          </Stack>
        </YStack>
      </YStack>
    </>
  )
}
