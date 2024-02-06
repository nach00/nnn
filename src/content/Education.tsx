// import { ResumeItem } from '@my/ui/src/ResumeItem'
import { ResumeItem } from '../components/ResumeItem'
import React from 'react'
import { H6, Button, YStack } from 'tamagui'
// import { Button } from '@my/ui'
// import { useLink } from 'solito/link'
export function Education() {
  return (
    <>
      <H6 fontWeight="bold">Education</H6>

      <YStack gap="$8">
        <ResumeItem
          dates="October 2023"
          location="Remote"
          organization="Three.js Journey"
          title="Certificate of Completion"
          // description="React 3 Fiber"
        >
          <a
            href="https://threejs-journey.com/certificate/view/32409"
            style={{ textDecoration: 'none' }}
          >
            <Button size="$3" width="min-content">
              View certificate
            </Button>
          </a>
        </ResumeItem>

        <ResumeItem
          dates="August 2011 to 2013"
          location="Richardson, TX"
          organization="University of Texas at Dallas"
          title="Master's in Business Administration"
          description="Strategic management"
        />

        <ResumeItem
          dates="August 2005 to 2007"
          location="Waco, TX"
          organization="Baylor University"
          title="Bachelor's in Business Administration"
          description="Marketing"
        />
      </YStack>
    </>
  )
}
