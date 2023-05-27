import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { Heading, Text } from '@ldm-ignite-ui/react'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Simple scheduling | Ignite Call"
        description="Connect your calendar and let people book appointments in their free
        time."
      />
      <Container>
        <Hero>
          <Heading size="4xl">Simple scheduling</Heading>
          <Text size="xl">
            Connect your calendar and let people book appointments in their free
            time.
          </Text>

          <ClaimUsernameForm />
        </Hero>

        <Preview>
          <Image
            src={previewImage}
            height={400}
            quality={100}
            priority
            alt="App calendar"
          />
        </Preview>
      </Container>
    </>
  )
}
