import React from 'react'
import style from './intro.module.css'

export default function Intro() {
  return (
    <section className={` flex items-center bg-secondary bg-opacity-20 ${style.intro}`}>
      <div className={`${style.intro_sec_1}`}>
        <h1>
          Discover the latest in technology and lifestyle.
        </h1>
        <button className='hover:shadow-xl bg-primary hover:bg-opacity-50'>Discover more</button>
      </div>
      <div className={`${style.intro_sec_2} px-5`}>
        <img src="img.png" alt="" />
      </div>
    </section>
  );
}
