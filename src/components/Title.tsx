import { H1, H2, H3, H4, H5, H6 } from 'tamagui'
import React from 'react'

export function Title({ children }) {
  return (
    <H2 tt="capitalize" col="$color9">
      {children}
    </H2>
  )
}
