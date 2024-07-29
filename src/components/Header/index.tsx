import React from 'react'
import { BsCart2 } from 'react-icons/bs'

const Header = () => {
  return (
    <header className="header-container">
      <span>audiophile</span>
      <nav>
        <a href="">HOME</a>
        <a href="">HEADPHONES</a>
        <a href="">SPEAKERS</a>
        <a href="">EARPHONES</a>
      </nav>
      <button>
        <BsCart2 size={16} />
      </button>
    </header>
  )
}

export default Header
