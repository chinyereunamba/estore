import React from "react";
import style from './utils.module.css'

type SectionContainerProps = {
  children: React.ReactNode;
  props?: { class?: string | undefined };
};

export default function SectionContainer({
  children,
  props,
}: SectionContainerProps) {
  return (
    <section className={`${style.section_container} px-5 lg:px-0 m-auto ${props?.class}`}>
      {children}
    </section>
  );
}
