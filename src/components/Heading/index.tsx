import clsx from 'clsx'
import React, { ReactNode } from 'react'
import { getColor, getSize } from './utils'

export interface HeadingProps {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'xxl' | 'xl' | 'lg'
  upper?: boolean
  bold?: boolean
  color?: 'white' | 'black'
  className?: string
}

const Heading = ({ as = 'h2', size, upper, bold, color = 'black', className, children }: HeadingProps) => {
  const HeadingTag = as

  return (
    <HeadingTag
      className={clsx([upper && 'uppercase', getSize(size), getColor(color), bold && 'font-bold', className])}
    >
      {children}
    </HeadingTag>
  )
}

export default Heading
