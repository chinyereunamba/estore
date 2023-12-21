import React from 'react'
import style from './intro.module.css'

export default function Intro() {
  return (
    <section className={` flex items-center bg-secondary bg-opacity-20 ${style.intro}`}>
      <div className={`${style.intro_sec_1}`}>
        <h1>
          Discover the latest in technology and lifestyle.
        </h1>
        <button>Discover more</button>
      </div>
      <div className={`${style.intro_sec_2}`}>
      </div>
    </section>
  );
}
