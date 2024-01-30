import { H2, H6, Stack, H1, Paragraph, XStack, YStack, Image } from 'tamagui'
import React, { useState } from 'react'
import { Card } from '../components/Card'
import { ResumeItem } from '../components/ResumeItem'
import { Experience } from '../content/Experience'
import { Education } from '../content/Education'
import { TopBar } from '../components/TopBar'
import { BottomBar } from '../components/BottomBar'

export function Blog() {
  return (
    <>
      <TopBar />
      BLOG
      <BottomBar />
    </>
  )
}
