import { Paragraph } from 'tamagui'

export function Chip({ children }) {
  return (
    <Paragraph
      fontWeight="normal"
      backgroundColor="$color6"
      col="$color11"
      size="$1"
      borderRadius="$20"
      padding="$2"
    >
      {children}
    </Paragraph>
  )
}
