import { H2, H6, Stack, H1, Paragraph, XStack, YStack, Image, Separator } from 'tamagui'
import { Card, StaticCard } from '../components/Card'
import { ResumeItem } from '../components/ResumeItem'
import { Experience } from '../content/Experience'
import { Education } from '../content/Education'
import { TopBar } from '../components/TopBar'
import { BottomBar } from '../components/BottomBar'
import { Overview } from '../content/Overview'
import { Awards } from '../content/Awards'

export function Resume() {
  return (
    <>
      {/*<TopBar />*/}
      <YStack f={1} ai="center" jc="center" flexWrap="wrap">
        <YStack maw={1200} gap="$6">
          <XStack gap="$12">
            <YStack f={1} w="100%" height="100%">
              <StaticCard>
                <YStack ai="center" w="100%" gap="$6">
                  <Image
                    source={{
                      uri: '/assets/photos/ai_profile.jpg',
                      width: '100%',
                      height: 240,
                    }}
                    br="$7"
                  />

                  <YStack ai="center">
                    <H2>Natcha Pradappet</H2>

                    <Paragraph color="$color11">@npradappet</Paragraph>
                  </YStack>

                  {/*<XStack gap="$2">*/}
                  {/*  <Button*/}
                  {/*    alignSelf="center"*/}
                  {/*    icon={Linkedin}*/}
                  {/*    size="$5"*/}
                  {/*    borderRadius={999}*/}
                  {/*    {...useLink({ href: 'https://www.linkedin.com/in/natcha-pradappet/' })}*/}
                  {/*  />*/}
                  {/*  <Button*/}
                  {/*    alignSelf="center"*/}
                  {/*    icon={Twitter}*/}
                  {/*    size="$5"*/}
                  {/*    borderRadius={999}*/}
                  {/*    {...useLink({ href: 'https://twitter.com/nach0s/' })}*/}
                  {/*  />*/}
                  {/*  <Button*/}
                  {/*    alignSelf="center"*/}
                  {/*    icon={Github}*/}
                  {/*    size="$5"*/}
                  {/*    borderRadius={999}*/}
                  {/*    {...useLink({ href: 'https://github.com/nach00/' })}*/}
                  {/*  />*/}
                  {/*</XStack>*/}
                  {/*<Button {...useLink({ href: 'mailto:npradappet@gmail.com' })}>Email me</Button>*/}
                </YStack>
              </StaticCard>
            </YStack>
            <YStack f={1} flexWrap="wrap" gap="$6">
              <Overview />

              <Separator />

              <Experience />

              <Separator />

              <Education />

              <Separator />

              <Awards />
            </YStack>
          </XStack>
        </YStack>
      </YStack>

      {/*<BottomBar />*/}
    </>
  )
}
