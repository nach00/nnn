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
    <YStack gap="$2">
      <Paragraph letterSpacing={1} color="$color11" tt="uppercase">
        {dates}
      </Paragraph>
      {/*<Paragraph color="$color11">{location}</Paragraph>*/}
      <YStack gap="$1">
        <Paragraph color="$color12" size="$6" fontWeight="bold">
          {title}
        </Paragraph>
        <Paragraph color="$color11">
          {organization} ({location})
        </Paragraph>
        <Paragraph color="$color12">{description}</Paragraph>
      </YStack>
      {children}
    </YStack>
  )
}

export default ResumeItem
