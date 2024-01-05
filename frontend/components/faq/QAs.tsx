'use client'
import { FaPlus } from "react-icons/fa6";
import style from "./faqs.module.css";
import {useState} from 'react'

type QAsProps = {
  question: string;
  answer: string;
};

export default function QAs({ question, answer }: QAsProps) {
  const [active, setActive] = useState<boolean>(false)
  return (
    <div className={`${style.qa} ${active && style.active} flex items-start cursor-pointer`} onClick={()=>{setActive(!active)}}>
      <span className={style.icon}>
        <FaPlus />
      </span>
      <article className="w-full">
        <div className={style.question}>{question}</div>
        <div className={style.answer}>
          <p>{answer}</p>
        </div>
      </article>
    </div>
  );
}
