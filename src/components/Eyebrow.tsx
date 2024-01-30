import { Paragraph } from 'tamagui'

export function Eyebrow({ children }) {
  return (
    <Paragraph fontWeight="normal" tt="uppercase" col="$color11" size="$1">
      {children}
    </Paragraph>
  )
}

// import { GetProps, Paragraph, styled } from 'tamagui' // or '@tamagui/core'
//
// export const Eyebrow = styled(Paragraph, {
//   name: 'Eyebrow', // useful for debugging, and Component themes
//   fontWeight: 'normal',
//   textTransform: 'uppercase',
//   color: '$color11',
//   size: '$1',
// })
// helper to get props for any TamaguiComponent

// export type EyebrowProps = GetProps<typeof Eyebrow>
