import Container from '@/components/Container'
import { LINKS } from '@constants/links'
import Link from 'next/link'
import React from 'react'

import './style.css'

const Header = () => {
  return (
    <header>
      <Container>
        <nav>
          <h1>
            <Link href='/'>Blogr</Link>
          </h1>

          <ul className='page-links'>
            {LINKS.map((link) => (
              <li key={link.label}>
                <Link href='#'>{link.label}</Link>
              </li>
            ))}
          </ul>

          <ul>
            <li>
              <Link href='#'>Login</Link>
            </li>
            <li>
              <Link href='#'>Sign Up</Link>
            </li>
          </ul>
        </nav>

        <div className='cta'>
          <h2>A modern publishing platform</h2>
          <p>Grow your audience and build your online brand</p>

          <div className='actions'>
            <Link href='#'>Start for Free</Link>
            <Link href='#'>Learn More</Link>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
