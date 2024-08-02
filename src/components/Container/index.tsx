import clsx from 'clsx'
import React, { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export const Container = ({ children, className, as = 'div' }: ContainerProps) => {
  const AsChild = as
  return <AsChild className={clsx('container', className)}>{children}</AsChild>
}
