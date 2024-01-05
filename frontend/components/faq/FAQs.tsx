import SectionContainer from "../utils/SectionContainer";
import Title from "../utils/Title";
import QAs from "./QAs";
import style from './faqs.module.css'

export default function FAQs() {
  const qas = [
    {
      answer: "Lorem ipsum dolor sit amet.",
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sint?",
      active: false,
    },
    {
      answer: "Lorem ipsum dolor sit amet.",
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sint?",
      active: false,
    },
    {
      answer: "Lorem ipsum dolor sit amet.",
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sint?",}]
    
  return (
    <SectionContainer>
      <Title title="FAQs" />
      <section className={`${style.faqs}`}>
        {qas.map((item, index) => (
          <QAs
            question={item.question}
            answer={item.answer}
            key={index}
          />
        ))}
      </section>
    </SectionContainer>
  );
}
