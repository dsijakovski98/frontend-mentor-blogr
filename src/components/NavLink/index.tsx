import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { NavLinkType } from '@/constants/links'

import arrow from 'public/assets/images/icon-arrow-light.svg'

import './style.css'

interface Props {
  link: NavLinkType
  href: string
}

const NavLink = (props: Props) => {
  const { link, href = '#' } = props
  const { label, options } = link

  return (
    <li className='nav-link'>
      <div className='anchor'>
        <Link href={href}>{label}</Link>
        {options && (
          <Image src={arrow} width={10} height={7} alt='Arrow icon' priority />
        )}
      </div>

      {options && (
        <ul className='options'>
          {options.map((option) => (
            <li key={option}>
              <Link href={'#'}>{option}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default NavLink
