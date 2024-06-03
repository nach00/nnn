import { H6, Stack, Paragraph, XStack, YStack, Image, H3, Text, Button } from 'tamagui'
import { Sparkle } from '../assets/icons'
import { Link } from 'react-router-native'
import { Overview } from '../content/Overview'

export function About() {
  return (
    <>
      <YStack ai="center">
        <YStack ai="center" $gtMd={{ fd: 'row', w: 1000, ai: 'flex-end' }} $gtLg={{ w: 1200 }}>
          <XStack h="$100vw" w="$100vw" p="$3" $gtXxs={{ w: 400, h: 400 }}>
            <Stack
              bc="$color3"
              p="$6"
              boc="$color4"
              bw="$1"
              br="$10"
              w="100%"
              gap="$6"
              style={{
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
              }}
            >
              <Image
                source={{
                  uri: '/assets/photos/ai_profile.jpg',
                }}
                w="100%"
                h="100%"
                f={1}
                br="$7"
              />
            </Stack>
          </XStack>

          <YStack ai="center" $gtMd={{ w: 600 }} $gtLg={{ w: 800 }}>
            <XStack ai="center" gap="$2" h="100%">
              <Sparkle />
              <H3 tt="uppercase">Self-summary</H3>
              <Sparkle />
            </XStack>

            <XStack
              w="$100vw"
              p="$3"
              $gtXs={{ w: 600 }}
              $gtSm={{ w: 800 }}
              $gtMd={{ w: 600 }}
              $gtLg={{ w: 800 }}
            >
              <YStack
                bc="$color3"
                p="$6"
                boc="$color4"
                bw="$1"
                br="$10"
                w="100%"
                gap="$3"
                style={{
                  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                }}
              >
                <Overview />

                <Link to="/resume">
                  <Button>View resume</Button>
                </Link>
              </YStack>
            </XStack>
          </YStack>
        </YStack>

        <YStack $gtSm={{ fd: 'row' }}>
          <XStack
            w="$100vw"
            p="$3"
            $gtXs={{ w: 600 }}
            $gtSm={{ w: 400 }}
            $gtMd={{ w: 500 }}
            $gtLg={{ w: 600 }}
          >
            <Stack
              bc="$color3"
              p="$6"
              boc="$color4"
              bw="$1"
              br="$10"
              w="100%"
              gap="$3"
              style={{
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
              }}
            >
              <H6 fontWeight="bold">Developer tools</H6>

              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/bootstrap.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>Bootstrap</Paragraph>
              </XStack>
              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/css.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>CSS</Paragraph>
              </XStack>
              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/django.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>Django</Paragraph>
              </XStack>
              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/Drupal.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>Drupal</Paragraph>
              </XStack>
              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/html.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>HTML</Paragraph>
              </XStack>
              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/javascript.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>Javascript</Paragraph>
              </XStack>
              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/python.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>Python</Paragraph>
              </XStack>
              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/react.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>React/React Native</Paragraph>
              </XStack>
              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/poimndrs.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>React Three Fiber</Paragraph>
              </XStack>

              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/sass.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>SASS</Paragraph>
              </XStack>
              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/tailwind.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>Tailwind</Paragraph>
              </XStack>
              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/three.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>Three.js</Paragraph>
              </XStack>

              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/vue.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>Vue.js</Paragraph>
              </XStack>
            </Stack>
          </XStack>
          <XStack
            w="$100vw"
            p="$3"
            $gtXs={{ w: 600 }}
            $gtSm={{ w: 400 }}
            $gtMd={{ w: 500 }}
            $gtLg={{ w: 600 }}
          >
            <Stack
              bc="$color3"
              p="$6"
              boc="$color4"
              bw="$1"
              br="$10"
              w="100%"
              gap="$3"
              style={{
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
              }}
            >
              <H6 fontWeight="bold">Designer tools</H6>
              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/adobe-after-effects.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>Adobe After Effects</Paragraph>
              </XStack>
              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/adobe-illustrator.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>Adobe Illustrator</Paragraph>
              </XStack>
              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/adobe-indesign.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>Adobe InDesign</Paragraph>
              </XStack>
              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/adobe-lightroom.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>Adobe Lightroom</Paragraph>
              </XStack>

              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/adobe-photoshop.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>Adobe Photoshop</Paragraph>
              </XStack>
              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/adobe-xd.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>Adobe XD</Paragraph>
              </XStack>
              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/affinity-designer.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>Affinity Designer</Paragraph>
              </XStack>
              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/affinity-photo.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>Affinity Photo</Paragraph>
              </XStack>
              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/affinity-publisher.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>Affinity Publisher</Paragraph>
              </XStack>
              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/blender.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>Blender</Paragraph>
              </XStack>
              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/figma.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>Figma</Paragraph>
              </XStack>
              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/framer.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>Framer</Paragraph>
              </XStack>
              <XStack gap="$2" ai="center">
                <Image
                  source={{
                    uri: '/assets/logos/software/framer-motion.svg',
                    width: 20,
                    height: 20,
                  }}
                />
                <Paragraph>Framer Motion</Paragraph>
              </XStack>
            </Stack>
          </XStack>
        </YStack>
        <YStack $gtSm={{ fd: 'row' }}>
          <XStack
            w="$100vw"
            p="$3"
            $gtXs={{ w: 600 }}
            $gtSm={{ w: 400 }}
            $gtMd={{ w: 500 }}
            $gtLg={{ w: 600 }}
          >
            <Stack
              bc="$color3"
              p="$6"
              boc="$color4"
              bw="$1"
              br="$10"
              w="100%"
              gap="$3"
              style={{
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
              }}
            >
              <H6 fontWeight="bold">Desktop Specs</H6>
              <Paragraph>
                <Text fontWeight="bold">OS:</Text> Windows 11 Pro
              </Paragraph>
              <Paragraph>
                <Text fontWeight="bold">Processor:</Text> AMD Ryzen 5 5600X
              </Paragraph>

              <Paragraph>
                <Text fontWeight="bold">RAM:</Text> 32GB
              </Paragraph>

              <Paragraph>
                <Text fontWeight="bold">GPU:</Text> NVIDIA GeForce RTX 4090
              </Paragraph>
            </Stack>
          </XStack>
          <XStack
            w="$100vw"
            p="$3"
            $gtXs={{ w: 600 }}
            $gtSm={{ w: 400 }}
            $gtMd={{ w: 500 }}
            $gtLg={{ w: 600 }}
          >
            <Stack
              bc="$color3"
              p="$6"
              boc="$color4"
              bw="$1"
              br="$10"
              w="100%"
              gap="$3"
              style={{
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
              }}
            >
              <H6 fontWeight="bold">Laptop Specs</H6>
              <Paragraph>
                <Text fontWeight="bold">OS:</Text> macOS Sonoma 14.2
              </Paragraph>

              <Paragraph>
                <Text fontWeight="bold">Processor:</Text> M1 Pro
              </Paragraph>

              <Paragraph>
                <Text fontWeight="bold">RAM:</Text> 16GB
              </Paragraph>

              <Paragraph>
                <Text fontWeight="bold">GPU:</Text> M1 Pro
              </Paragraph>
            </Stack>
          </XStack>
        </YStack>
      </YStack>
    </>
  )
}
