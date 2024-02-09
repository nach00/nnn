import {
  YStack,
  XStack,
  Button,
  Anchor,
  H6,
  H5,
  H4,
  H3,
  H2,
  Input,
  Paragraph,
  Image,
  H1,
  Stack,
} from 'tamagui'

import React from 'react'
import { useState } from 'react'
// import { Link, NavLink } from 'react-router-dom'
import { Link } from 'react-router-native'

import { Menu } from '../assets/icons'
import type { SheetProps } from '@tamagui/sheet'
import { Sheet, useSheet } from '@tamagui/sheet'

const spModes = ['percent', 'constant', 'fit', 'mixed'] as const

export const TopBar = () => {
  const [position, setPosition] = useState(0)
  const [open, setOpen] = useState(false)
  const [modal, setModal] = useState(true)
  const [innerOpen, setInnerOpen] = useState(false)
  const [snapPointsMode, setSnapPointsMode] = useState<(typeof spModes)[number]>('percent')
  const [mixedFitDemo, setMixedFitDemo] = useState(false)

  const isPercent = snapPointsMode === 'percent'
  const isConstant = snapPointsMode === 'constant'
  const isFit = snapPointsMode === 'fit'
  const isMixed = snapPointsMode === 'mixed'
  const snapPoints = isPercent
    ? [85, 50, 25]
    : isConstant
      ? [256, 190]
      : isFit
        ? undefined
        : mixedFitDemo
          ? ['fit', 110]
          : ['80%', 256, 190]

  return (
    <>
      <XStack
        ai="center"
        jc="space-between"
        marginBottom="$12"
        marginHorizontal="auto"
        marginTop="$3"
        paddingHorizontal="$3"
        $gtXs={{ maw: 600 }}
        $gtSm={{ maw: 800 }}
        $gtMd={{ maw: 1000 }}
        $gtLg={{ maw: 1200 }}
      >
        <Link to="/" underlayColor="$color9">
          <XStack ai="center" gap="$3">
            <Image
              source={{
                uri: './assets/icons/n-logo-white.svg',
                width: 40,
                height: 40,
              }}
            />

            <H4 letterSpacing={3}>PRADAPPET</H4>
          </XStack>
        </Link>
        <Button onPress={() => setOpen(true)} chromeless p="$0" $gtSm={{ display: 'none' }}>
          <Menu />
        </Button>

        <XStack gap="$6" ai="center" $sm={{ display: 'none' }}>
          <Link to="/about" underlayColor="$color9">
            <Paragraph hoverStyle={{ color: '$color9' }}>About</Paragraph>
          </Link>
          <Link to="/projects" underlayColor="$color9">
            <Paragraph hoverStyle={{ color: '$color9' }}>Projects</Paragraph>
          </Link>
          <Link to="/resume" underlayColor="$color9">
            <Paragraph hoverStyle={{ color: '$color9' }}>Resume</Paragraph>
          </Link>
        </XStack>
        <Stack $sm={{ display: 'none' }}>
          <Link to="/contact" underlayColor="$color9">
            <Button theme="active">Let's talk</Button>
          </Link>
        </Stack>
      </XStack>

      <Sheet
        forceRemoveScrollEnabled={open}
        modal={modal}
        open={open}
        onOpenChange={setOpen}
        snapPoints={snapPoints}
        snapPointsMode={snapPointsMode}
        dismissOnSnapToBottom
        position={position}
        onPositionChange={setPosition}
        zIndex={100_000}
        animation="lazy"
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Handle />
        <Sheet.Frame padding="$4" justifyContent="space-evenly" alignItems="center">
          <Link to="/" underlayColor="$color9">
            <H1 hoverStyle={{ color: '$color9' }} onPress={() => setOpen(false)}>
              Home
            </H1>
          </Link>
          <Link to="/about" underlayColor="$color9">
            <H1 hoverStyle={{ color: '$color9' }} onPress={() => setOpen(false)}>
              About
            </H1>
          </Link>
          <Link to="/projects" underlayColor="$color9">
            <H1 hoverStyle={{ color: '$color9' }} onPress={() => setOpen(false)}>
              Projects
            </H1>
          </Link>
          <Link to="/resume" underlayColor="$color9">
            <H1 hoverStyle={{ color: '$color9' }} onPress={() => setOpen(false)}>
              Resume
            </H1>
          </Link>
          <Link to="/contact" underlayColor="$color9">
            <H1 hoverStyle={{ color: '$color9' }} onPress={() => setOpen(false)}>
              Contact
            </H1>
          </Link>
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
