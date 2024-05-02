import { Paragraph } from 'tamagui'

export function Chip({ children }) {
  return (
    <Paragraph
      fontWeight="normal"
      backgroundColor="$color6"
      col="$color11"
      size="$1"
      borderRadius="$12"
      px="$2"
      py="$1"
    >
      {children}
    </Paragraph>
  )
}
