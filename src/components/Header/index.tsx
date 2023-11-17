'use client'

import React, {
  PropsWithChildren,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

import Image from 'next/image'
import Link from 'next/link'

import close from '/public/assets/images/icon-close.svg'
import burger from '/public/assets/images/icon-hamburger.svg'
import logo from '/public/assets/images/logo.svg'

import Container from '@/components/Container'
import LinkButton from '@/components/LinkButton'
import NavLink from '@/components/NavLink'

import { LINKS } from '@/constants/links'

import './style.css'

const Header = ({ children }: PropsWithChildren) => {
  const linksRef = useRef<HTMLDivElement | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    if (!linksRef.current) return

    const hidden = linksRef.current.getAttribute('aria-hidden') === 'true'
    linksRef.current.setAttribute('aria-hidden', (!hidden).toString())

    setIsOpen((prev) => !prev)
  }

  useLayoutEffect(() => {
    if (!linksRef.current) return

    const hidden = linksRef.current.style.display !== 'flex'
    linksRef.current.setAttribute('aria-hidden', hidden.toString())

    setIsOpen(!hidden)
  }, [])

  // Close menu on resizing to a larger screen, if it was opened
  useLayoutEffect(() => {
    const handleResize = () => {
      if (!linksRef.current) return
      if (!isOpen) return

      const isMobileScreen = window.innerWidth < 860
      setIsOpen(isMobileScreen)
      linksRef.current.setAttribute('aria-hidden', (!isMobileScreen).toString())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isOpen])

  return (
    <header>
      <Container>
        <nav>
          <Link href='/' className='logo'>
            <Image
              src={logo}
              width={100}
              height={40}
              alt='Blogr logo'
              priority
            />
          </Link>

          <div className='links' ref={linksRef}>
            <ul className='page-links'>
              {LINKS.map((link) => (
                <NavLink key={link.label} link={link} href='#' />
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
          </div>

          <button onClick={toggleMenu}>
            {isOpen ? (
              <Image src={close} fill alt='Burger menu close icon' priority />
            ) : (
              <Image src={burger} fill alt='Burger menu open icon' priority />
            )}
          </button>
        </nav>

        {children}
      </Container>
    </header>
  )
}

export default Header
