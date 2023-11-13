import React, { PropsWithChildren } from 'react'
import './style.css'

export default function Container({ children }: PropsWithChildren) {
  return <div className='container'>{children}</div>
}
