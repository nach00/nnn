import { Paragraph } from 'tamagui'

export function Eyebrow({ children }) {
  return (
    <Paragraph fontWeight="normal" tt="uppercase" col="$color12" size="$1">
      {children}
    </Paragraph>
  )
}
