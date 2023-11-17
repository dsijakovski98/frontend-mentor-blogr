import { Fragment } from 'react'

import Header from '@/components/Header'
import LinkButton from '@/components/LinkButton'

export default function Home() {
  return (
    <Fragment>
      <Header>
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
      </Header>
    </Fragment>
  )
}
