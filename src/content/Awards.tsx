import { ResumeItem } from '../components/ResumeItem'
import React from 'react'
import { H6, Paragraph, YStack } from 'tamagui'
export function Awards() {
  return (
    <>
      <H6 fontWeight="bold">Awards</H6>

      <YStack gap="$8">
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
      </YStack>

      {/*<H6 fontWeight="bold" mt="$10">*/}
      {/*  Proficiencies*/}
      {/*</H6>*/}

      {/*<YStack gap="$3">*/}
      {/*  <Paragraph>*/}
      {/*    <Paragraph fontWeight="bold">Adobe Creative Suite: </Paragraph>*/}
      {/*    Illustrator | InDesign | Photoshop | XD*/}
      {/*  </Paragraph>*/}
      {/*  <Paragraph>*/}
      {/*    <Paragraph fontWeight="bold">Collaboration Tools: </Paragraph>*/}
      {/*    Confluence | Discord | Jira | Miro | Mural | Slack | Trello*/}
      {/*  </Paragraph>*/}
      {/*  <Paragraph>*/}
      {/*    <Paragraph fontWeight="bold">Design Tools: </Paragraph>*/}
      {/*    Blender | Figma | FigJam | Framer | Fusion 360 | Sketch*/}
      {/*  </Paragraph>*/}
      {/*  <Paragraph>*/}
      {/*    <Paragraph fontWeight="bold">Development Tools: </Paragraph>*/}
      {/*    Bootstrap | CSS | Django | Drupal | HTML | JavaScript | Python | React.js | React Three*/}
      {/*    Fiber | Ruby | Sass/SCSS | Tailwind | Three.js | TypeScript | Vim | Vue.js*/}
      {/*  </Paragraph>*/}
      {/*  <Paragraph>*/}
      {/*    <Paragraph fontWeight="bold">Google Workspace: </Paragraph>*/}
      {/*    Docs | Drive | Gmail | Sheets | Slides*/}
      {/*  </Paragraph>*/}
      {/*  <Paragraph>*/}
      {/*    <Paragraph fontWeight="bold">Microsoft Office Suite: </Paragraph>*/}
      {/*    Excel | Outlook | PowerPoint | SharePoint | Word*/}
      {/*  </Paragraph>*/}
      {/*</YStack>*/}
    </>
  )
}
