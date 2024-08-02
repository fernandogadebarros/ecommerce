'use client'
import Heading from '@/components/Heading'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

interface CallToActionsProps {
  title: string
  txtBtn: string
  columns?: number
  section?: string
}

export const CallToActionHome = ({ title, txtBtn, columns = 1, section = 'speakers' }: CallToActionsProps) => {
  const isOneColumn = columns <= 1
  const bgSpeakers = section === 'speakers' && 'bg-speakers'

  return (
    <section className="call-to-action my-12">
      <div className={clsx('call-to-action-container', isOneColumn && bgSpeakers, !isOneColumn && 'flex gap-8 p-0')}>
        {!isOneColumn && (
          <Image
            className="rounded-lg"
            width={540}
            height={320}
            sizes="100%"
            src="/media/home/desktop/image-earphones-yx1.jpg"
            alt="earsphone"
          />
        )}
        <div
          className={clsx(
            !isOneColumn ? 'flex flex-col items-start justify-center p-24 bg-gray-light rounded-lg w-1/2' : 'p-24'
          )}
        >
          <Heading className="mb-8">{title}</Heading>
          <button>{txtBtn}</button>
        </div>
      </div>
    </section>
  )
}
