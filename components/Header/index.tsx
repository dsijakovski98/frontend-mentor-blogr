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
          <ul>
            <li>
              <h1>
                <Link href='/'>Blogr</Link>
              </h1>
            </li>

            {LINKS.map((link) => (
              <li key={link.label}>
                <Link href='#'>{link.label}</Link>
              </li>
            ))}

            <li>
              <Link href='#'>Login</Link>
            </li>
            <li>
              <Link href='#'>Login</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
