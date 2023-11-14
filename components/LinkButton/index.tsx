import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import { LinkButtonVariant } from 'types'

import './style.css'

interface Props extends PropsWithChildren {
  href: string
  variant?: LinkButtonVariant
  size?: 'md' | 'lg'
}

const LinkButton = (props: Props) => {
  const { href, variant = 'contained', size = 'md', children } = props

  return (
    <Link href={href} className={`btn ${variant} ${size}`}>
      {children}
    </Link>
  )
}

export default LinkButton
