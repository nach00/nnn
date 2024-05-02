import { Paragraph } from 'tamagui'

export function SmallCaps({ children }) {
  return (
    <Paragraph
      textAlign="center"
      textTransform="uppercase"
      size="$1"
      color="$color12"
      fontWeight="bold"
    >
      {children}
    </Paragraph>
  )
}
