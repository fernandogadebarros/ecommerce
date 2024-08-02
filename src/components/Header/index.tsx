import React from 'react'
import AudiophileLogo from '@/icons/AudiophileLogo'
import Link from 'next/link'
import { BsCart2 } from 'react-icons/bs'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link href="/">
          <AudiophileLogo />
        </Link>
        <nav className="flex items-center font-bold text-sm gap-8">
          <Link href="/">HOME</Link>
          <Link href="/headphones">HEADPHONES</Link>
          <Link href="/speakers">SPEAKERS</Link>
          <Link href="/earphones">EARPHONES</Link>
        </nav>
        <button>
          <BsCart2 size={24} />
        </button>
      </div>
    </header>
  )
}

export default Header
