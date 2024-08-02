import clsx from 'clsx'
import React, { ReactNode } from 'react'
import { getColor, getWeight } from './utils'

export interface TextProps {
  children: ReactNode
  as?: keyof JSX.IntrinsicElements
  upper?: boolean
  weight?: 'regular' | 'medium' | 'bold'
  color?: 'white' | 'gray'
  className?: string
}

const Text = ({ as = 'p', upper, weight = 'regular', color = 'gray', className, children }: TextProps) => {
  const TextTag = as

  return (
    <TextTag className={clsx([upper && 'uppercase', getColor(color), getWeight(weight), 'text-base', className])}>
      {children}
    </TextTag>
  )
}

export default Text
