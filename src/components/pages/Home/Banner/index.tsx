import React from 'react'
import { Container } from '@/components/Container'
import Heading from '@/components/Heading'
import Text from '@/components/Text'

export const Banner = () => {
  return (
    <section className="banner-home">
      <Container className="flex">
        <div>
          <Heading upper>New Product</Heading>
          <Heading size="xxl" upper bold>
            XX99 Mark II Headphones
          </Heading>
          <Text>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones,
            speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you
            to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic
            people who make Audiophile the best place to buy your portable audio equipment.
          </Text>
        </div>
      </Container>
    </section>
  )
}
