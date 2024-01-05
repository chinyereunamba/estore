import React from 'react'
import SectionContainer from '../utils/SectionContainer'
import style from './brand.module.css'
import Brand from './Brand'

export default function Brands() {
  return (
      <SectionContainer>
          <div className={`flex flex-wrap gap-7 ${style.brands}`}>
              <Brand/>
              <Brand/>
              <Brand/>
              <Brand/>
              <Brand/>
          </div>
    </SectionContainer>
  )
}
