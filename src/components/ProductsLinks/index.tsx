import React from 'react'
import Link from 'next/link'
import Heading from '../Heading'
import { MdOutlineChevronRight } from 'react-icons/md'
import Image from 'next/image'
import clsx from 'clsx'

const products = [
  {
    id: 1,
    title: 'Headphones',
    textLink: 'shop',
    img: {
      src: '/media/shared/desktop/image-category-thumbnail-headphones.png',
      height: 160,
      width: 123,
      alt: 'Headphone',
      class: '-top-12 w-32 w-32'
    }
  },
  {
    id: 2,
    title: 'Speakers',
    textLink: 'shop',
    img: {
      src: '/media/shared/desktop/image-category-thumbnail-speakers.png',
      height: 146,
      width: 121,
      alt: 'Speakers',
      class: '-top-10 w-32 w-32'
    }
  },
  {
    id: 3,
    title: 'Speakers',
    textLink: 'shop',
    img: {
      src: '/media/shared/desktop/image-category-thumbnail-earphones.png',
      height: 160,
      width: 142,
      alt: 'Earphones',
      class: '-top-8 w-32 w-32'
    }
  }
]

export const ProductsLinks = () => {
  return (
    <section className="products-links">
      {products.map((product) => (
        <div key={product.id} className="products-links-container">
          <div className={clsx('absolute', product.img.class)}>
            <Image
              src={product.img.src}
              height={product.img.height}
              width={product.img.width}
              sizes="100%"
              alt={product.img.alt}
            />
          </div>
          <Heading className="products-links-heading" upper>
            {product.title}
          </Heading>
          <Link href="#" className="products-links-btn">
            {product.textLink} <MdOutlineChevronRight size={16} className="products-links-btn-icon" />
          </Link>
        </div>
      ))}
    </section>
  )
}
