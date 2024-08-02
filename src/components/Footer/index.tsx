import React from 'react'
import { ImFacebook2 } from 'react-icons/im'
import { FaTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
import AudiophileLogo from '@/icons/AudiophileLogo'

const Footer = () => {
  const footerDate = new Date()
  const currentYear = footerDate.getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <span className="footer-line-decoration" />
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <AudiophileLogo />
          </Link>
          <nav className="flex items-center font-bold text-sm gap-8">
            <a href="#">HOME</a>
            <a href="#">HEADPHONES</a>
            <a href="#">SPEAKERS</a>
            <a href="#">EARPHONES</a>
          </nav>
        </div>
        <div className="flex justify-between">
          <p className="max-w-[540px] text-[14px] text-white/50">
            Audiophile is an all in one stop to fulfill your audio needs. We are a small team of music lovers and sound
            specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
            facility - we’re open 7 days a week.
          </p>
          <div className="flex items-center gap-4 self-end">
            <a href="#">
              <ImFacebook2 size={24} />
            </a>
            <a href="#">
              <FaTwitter size={24} />
            </a>
            <a href="#">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <p className="mt-14 text-[14px] text-white/50 font-bold">Copyright {currentYear}. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
