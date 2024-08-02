import React from 'react'
import Heading from '@/components/Heading'
import Image from 'next/image'

export const AudioGear = () => {
  return (
    <section>
      <div className="container flex gap-12">
        <div>
          <Heading>Bringing you the best audio gear</Heading>
          <p>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones,
            speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you
            to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic
            people who make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <Image src="/media/shared/desktop/image-best-gear.jpg" sizes="100%" width={540} height={588} alt="Best Gear" />
      </div>
    </section>
  )
}
