import Container from '@/components/Container'
import { LINKS } from '@constants/links'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import LinkButton from '@/components/LinkButton'

import logo from 'public/assets/images/logo.svg'

import './style.css'

const Header = () => {
  return (
    <header>
      <Container>
        <nav>
          <Link href='/' className='logo'>
            <Image src={logo} width={100} height={40} alt='Blogr logo.' />
          </Link>

          <ul className='page-links'>
            {LINKS.map((link) => (
              <li key={link.label}>
                <Link href='#'>{link.label}</Link>
              </li>
            ))}
          </ul>

          <ul className='auth-links'>
            <li>
              <Link href='#'>Login</Link>
            </li>
            <li>
              <LinkButton href='#' size='lg'>
                Sign Up
              </LinkButton>
            </li>
          </ul>
        </nav>

        <div className='cta'>
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>

          <div className='actions'>
            <LinkButton href='#'>Start for Free</LinkButton>
            <LinkButton href='#' variant='outlined'>
              Learn More
            </LinkButton>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
