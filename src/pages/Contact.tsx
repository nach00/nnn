import {
  H2,
  H6,
  H5,
  Stack,
  H1,
  Paragraph,
  XStack,
  YStack,
  Image,
  Form,
  Input,
  TextArea,
  Button,
} from 'tamagui'
import React, { useState } from 'react'
import { Card, SmallCard } from '../components/Card'

import emailjs from '@emailjs/browser'
import { Eyebrow } from '../components/Eyebrow'

import {
  UXUIDesign,
  DesignSystem,
  WebDevelopment,
  Strategy,
  ChevronRight,
  Pin,
  Phone,
  Email,
} from '../assets/icons'
import { Title } from '../components/Title'

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
    const publicKey = '4-T2suWd5232K-kKR___'

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Natcha',
      message: message,
    }

    const toast = useToastController()

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response)
        toast.show('Email sent successfully!', {
          message: "I'll get back to you as soon as possible.",
        })
        setName('')
        setEmail('')
        setMessage('')
      })
      .catch((error) => {
        console.error('Error sending email:', error)
        toast.show('Error sending email, please try again', {
          message: 'or email me directly at npradappet@gmail.com.',
        })
      })
  }

  return (
    <Form onSubmit={onSubmit} gap="$4">
      {/*<XStack jc="flex-end" alignItems="flex-start" gap="$4">*/}
      <XStack>
        {/*<Label htmlFor="name">Name</Label>*/}
        <Input
          inputMode="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          w="100%"
        />
      </XStack>
      {/*<XStack jc="flex-end" alignItems="flex-start" gap="$4">*/}
      <XStack>
        {/*<Label htmlFor="email">Email</Label>*/}

        <Input
          inputMode="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          w="100%"
        />
      </XStack>
      {/*<XStack jc="flex-end" alignItems="flex-start" gap="$4">*/}
      <XStack>
        {/*<Label htmlFor="message">Message</Label>*/}

        <TextArea
          id="message"
          placeholder="Your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          w="100%"
        />
      </XStack>

      <Form.Trigger asChild>
        {/*<Stack ai="flex-end">*/}
        <Button w="100%">Send Message</Button>
        {/*</Stack>*/}
      </Form.Trigger>
    </Form>
  )
}
