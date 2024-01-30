import { Paragraph, YStack } from 'tamagui'
// import { Link } from 'react-router-dom'

export type ResumeItemTypes = {
  dates?: string
  location?: string
  organization?: string
  title?: string
  description?: string
  link?: string
  children?: React.ReactNode
}

// export default function ResumeItem() {
export const ResumeItem = ({
  dates,
  location,
  organization,
  title,
  description,
  link,
  children,
}: ResumeItemTypes) => {
  return (
    <YStack>
      <Paragraph color="$color11" tt="uppercase">{dates}</Paragraph>
      {/*<Paragraph color="$color11">{location}</Paragraph>*/}
      <Paragraph color="$color9" size="$6" fontWeight="bold">{title}</Paragraph>
      <Paragraph color="$color11">{organization} ({location})</Paragraph>
      <Paragraph color="$color12">{description}</Paragraph>
      {children}
    </YStack>
  )
}

export default ResumeItem
