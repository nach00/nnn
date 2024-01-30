import { ResumeItem } from '../components/ResumeItem'
import React from 'react'
import { H6 } from 'tamagui'
export function Awards() {
  return (
    <>
      <H6 fontWeight="bold">Awards</H6>

      <ResumeItem
        dates="January 2019"
        location="Dallas, TX"
        organization="HackDFW"
        title="1st Place"
        description="Prevented health code violations in restaurants."
      />

      <ResumeItem
        dates="February 2019"
        location="Fort Worth, TX"
        organization="Startup Weekend"
        title="2nd Place"
        description="Developed tech solutions company for restaurants."
      />

      <ResumeItem
        dates="March 2019"
        location="Dallas, TX"
        organization="Brother Hackathon"
        title="Best workplace solution"
        description="Simplified food labeling task for kitchen staff."
      />
    </>
  )
}
