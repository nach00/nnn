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
      <YStack boc="red" bw="$1" m="$3" gap="$6">
        <H6>Contact Info</H6>
        <XStack gap="$3" ai="center">
          <Stack bc="$color3" p="$3" br="$5" boc="$color4" bw="$1">
            <Email />
          </Stack>
          <YStack>
            <Eyebrow>Mail me</Eyebrow>
            <Paragraph>npradappet@gmail.com</Paragraph>
          </YStack>
        </XStack>
        <XStack gap="$3" ai="center">
          <Stack bc="$color3" p="$3" br="$5" boc="$color4" bw="$1">
            <Phone />
          </Stack>
          <YStack>
            <Eyebrow>Call me</Eyebrow>
            <Paragraph>469-909-1010</Paragraph>
          </YStack>
        </XStack>
        <XStack gap="$3" ai="center">
          <Stack bc="$color3" p="$3" br="$5" boc="$color4" bw="$1">
            <Pin />
          </Stack>
          <YStack>
            <Eyebrow>FIND ME</Eyebrow>
            <Paragraph>Dallas, Texas</Paragraph>
          </YStack>
        </XStack>
      </YStack>
      <XStack gap="$20" miw={1200}>
        <YStack gap="$6">
          <YStack gap="$6">
            <H6>Contact info</H6>
            <XStack ai="center" gap="$4">
              <SmallCard>
                <Stack>{/*<Mail />*/}</Stack>
              </SmallCard>
              <YStack>
                <Eyebrow>Mail me</Eyebrow>
                <Paragraph>npradappet@gmail.com</Paragraph>
              </YStack>
            </XStack>
            <XStack ai="center" gap="$4">
              <SmallCard>
                <Stack>{/*<Phone />*/}</Stack>
              </SmallCard>
              <YStack>
                <Eyebrow>Call me</Eyebrow>
                <Paragraph>469-909-1010</Paragraph>
              </YStack>
            </XStack>
            <XStack ai="center" gap="$4">
              <SmallCard>
                <Stack>{/*<MapPin />*/}</Stack>
              </SmallCard>
              <YStack>
                <Eyebrow>FIND ME</Eyebrow>
                <Paragraph>Dallas, Texas</Paragraph>
              </YStack>
            </XStack>
          </YStack>
          <YStack marginTop="$6" gap="$6">
            <H6>Social Info</H6>
            <XStack gap="$2">
              {/*<Button*/}
              {/*  alignSelf="center"*/}
              {/*  icon={Linkedin}*/}
              {/*  size="$5"*/}
              {/*  borderRadius={999}*/}
              {/*  {...useLink({ href: 'https://www.linkedin.com/in/natcha-pradappet/' })}*/}
              {/*/>*/}
              {/*<Button*/}
              {/*  alignSelf="center"*/}
              {/*  icon={Twitter}*/}
              {/*  size="$5"*/}
              {/*  borderRadius={999}*/}
              {/*  {...useLink({ href: 'https://twitter.com/nach0s/' })}*/}
              {/*/>*/}
              {/*<Button*/}
              {/*  alignSelf="center"*/}
              {/*  icon={Github}*/}
              {/*  size="$5"*/}
              {/*  borderRadius={999}*/}
              {/*  {...useLink({ href: 'https://github.com/nach00/' })}*/}
              {/*/>*/}
            </XStack>
          </YStack>
        </YStack>

        <Card fixedWidth="100%" flex="1">
          <YStack gap="$6" p="$6" w="100%" f={1}>
            <XStack gap="$3" w="100%" f={1}>
              <H1>Let's work</H1>
              <H1 color="$color9">together.</H1>
              {/*<H1>together</H1>*/}
            </XStack>

            <EmailForm />
          </YStack>
        </Card>
      </XStack>
      {/*</PageLayout>*/}
      {/*<BottomBar />*/}
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
