import Image from 'next/image'
import { Heading, Text } from '@ldm-ignite-ui/react'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview.png'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Uncomplicated scheduling</Heading>
        <Text size="xl">
          Connect your calendar and let people book appointments in their free
          time.
        </Text>
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
  )
}
