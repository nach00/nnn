import { H2, H6, Stack, H1, Paragraph, XStack, YStack, Image, Button } from 'tamagui'
// import React, { useState } from 'react'
import { Card } from '../components/Card'
import { TopBar } from '../components/TopBar'
import { BottomBar } from '../components/BottomBar'
import { Link } from 'react-router-dom'

export function Projects() {
  return (
    <>
      {/*<TopBar />*/}
      PROJECTS
      <Link to="/projects/tamagui">
        <Button>
          <Paragraph>Tamagui</Paragraph>
        </Button>
      </Link>
      {/*<BottomBar />*/}
    </>
  )
}
