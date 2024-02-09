import { H1, H2, H3, H4, H5, H6 } from 'tamagui'
import React from 'react'

export function Title({ children }) {
  return (
    <H3 tt="capitalize" col="$color12">
      {children}
    </H3>
  )
}
