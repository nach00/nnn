import {
  H6,
  Stack,
  H1,
  Paragraph,
  XStack,
  YStack,
  Form,
  Input,
  TextArea,
  Button,
  AlertDialog,
} from 'tamagui'
import React, { useState } from 'react'

import emailjs from '@emailjs/browser'
import { Eyebrow } from '../components/Eyebrow'

import { Pin, Phone, Email } from '../assets/icons'

export function Contact() {
  return (
    <>
      <YStack
        m="$3"
        $gtXs={{ w: 600, m: 'auto' }}
        $gtSm={{ w: 800, fd: 'row' }}
        $gtMd={{ w: 1000 }}
        $gtLg={{ w: 1200 }}
      >
        <YStack gap="$6" p="$3" $gtSm={{ w: 300 }} $gtLg={{ w: 400 }}>
          <H6>Contact Info</H6>
          <XStack gap="$3" ai="center">
            <Stack
              bc="$color3"
              p="$3"
              br="$5"
              boc="$color4"
              bw="$1"
              color="$color11"
              style={{
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
              }}
            >
              <Email />
            </Stack>
            <YStack>
              <Eyebrow>Email me</Eyebrow>
              <Paragraph>npradappet@gmail.com</Paragraph>
            </YStack>
          </XStack>
          <XStack gap="$3" ai="center">
            <Stack
              bc="$color3"
              p="$3"
              br="$5"
              boc="$color4"
              bw="$1"
              color="$color11"
              style={{
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
              }}
            >
              <Phone />
            </Stack>
            <YStack>
              <Eyebrow>Call me</Eyebrow>
              <Paragraph>469-909-1010</Paragraph>
            </YStack>
          </XStack>
          <XStack gap="$3" ai="center">
            <Stack
              bc="$color3"
              p="$3"
              br="$5"
              boc="$color4"
              bw="$1"
              color="$color11"
              style={{
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
              }}
            >
              <Pin />
            </Stack>
            <YStack>
              <Eyebrow>FIND ME</Eyebrow>
              <Paragraph>Dallas, Texas</Paragraph>
            </YStack>
          </XStack>
        </YStack>

        <Stack p="$3" $gtSm={{ w: 500 }} $gtMd={{ w: 700 }} $gtLg={{ w: 800 }}>
          <YStack
            boc="$color4"
            bw="$1"
            p="$6"
            bc="$color3"
            br="$10"
            style={{
              boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            }}
          >
            <YStack gap="$3" w="100%" f={1} marginBottom="$6" $gtXs={{ fd: 'row' }}>
              <H1>Send a</H1>
              <H1 color="$color9">message.</H1>
            </YStack>
            <EmailForm />
          </YStack>
        </Stack>
      </YStack>

      {/*<Success />*/}
    </>
  )
}

const EmailForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    const serviceId = 'service_f8tjezh'
    const templateId = 'template_9f5uyux'
    const publicKey = '4-T2suWd5232K-kKR'

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Natcha',
      message: message,
    }

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response)
        setName('')
        setEmail('')
        setMessage('')
      })
      .catch((error) => {
        console.error('Error sending email:', error)
      })
  }

  return (
    <Form onSubmit={onSubmit} gap="$4">
      <XStack>
        <Input
          inputMode="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          w="100%"
        />
      </XStack>
      <XStack>
        <Input
          inputMode="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          w="100%"
        />
      </XStack>
      <XStack>
        <TextArea
          id="message"
          placeholder="Your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          w="100%"
        />
      </XStack>

      <AlertDialog>
        <AlertDialog.Trigger asChild>
          <Form.Trigger asChild>
            <Button>Show Alert</Button>
          </Form.Trigger>
        </AlertDialog.Trigger>

        <AlertDialog.Portal>
          <AlertDialog.Overlay
            key="overlay"
            opacity={0.5}
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
          <AlertDialog.Content
            bordered
            elevate
            key="content"
            animation={[
              'quick',
              {
                opacity: {
                  overshootClamping: true,
                },
              },
            ]}
            enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
            exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
            x={0}
            scale={1}
            opacity={1}
            y={0}
          >
            <YStack gap="$3">
              <AlertDialog.Title>Success!</AlertDialog.Title>
              <AlertDialog.Description>
                Thanks for reaching out! I'll get back to you as soon as possible.
              </AlertDialog.Description>

              <XStack gap="$3" justifyContent="flex-end">
                <AlertDialog.Action asChild>
                  <Button theme="active">Dismiss</Button>
                </AlertDialog.Action>
              </XStack>
            </YStack>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog>
    </Form>
  )
}
export function Success() {
  return (
    <AlertDialog>
      {/*<AlertDialog.Trigger asChild>*/}
      {/*  <Button>Show Alert</Button>*/}
      {/*</AlertDialog.Trigger>*/}

      <AlertDialog.Portal>
        <AlertDialog.Overlay
          key="overlay"
          animation="lazy"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <AlertDialog.Content
          bordered
          elevate
          key="content"
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
        >
          <YStack gap="$3">
            <AlertDialog.Title>Success!</AlertDialog.Title>
            <AlertDialog.Description>
              Thanks for reaching out! I'll get back to you as soon as possible.
            </AlertDialog.Description>

            <XStack gap="$3" justifyContent="flex-end">
              <AlertDialog.Action asChild>
                <Button theme="active">Dismiss</Button>
              </AlertDialog.Action>
            </XStack>
          </YStack>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  )
}
