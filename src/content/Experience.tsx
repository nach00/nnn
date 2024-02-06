import { ResumeItem } from '../components/ResumeItem'
import { H6, YStack } from 'tamagui'
export function Experience() {
  return (
    <>
      <H6 fontWeight="bold">Experience</H6>

      <YStack gap="$8">
        <ResumeItem
          dates="Feburary 2019 to present"
          title="UX Director"
          organization="Planet Nacho"
          location="Dallas, TX"
          description="Co-founder of digital design and development studio."
        />

        <ResumeItem
          dates="July 2022 to June 2023"
          location="Dallas, TX"
          organization="Insite"
          title="UX Specialist"
          description="Jack-of-all-trades for local web development agency"
        />

        <ResumeItem
          dates="September 2021 to June 2022"
          location="London, UK"
          organization="Photon"
          title="UX/UI Designer"
          description="Hybrid designer for global IT agency"
        />

        <ResumeItem
          dates="September 2019 to July 2021"
          location="Dallas, TX"
          organization="Zimperium"
          title="UX/UI Designer"
          description="Lead designer for mobile threat detection company"
        />
      </YStack>
    </>
  )
}
