import React from 'react'
import SectionContainer from '../utils/SectionContainer'
import Brand from './Brand'

export default function Brands() {
  return (
      <SectionContainer>
          <div className='flex flex-wrap gap-7'>
              <Brand/>
              <Brand/>
              <Brand/>
              <Brand/>
              <Brand/>
          </div>
    </SectionContainer>
  )
}
