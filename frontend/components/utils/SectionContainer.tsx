import React from "react";

type SectionContainerProps = {
  children: React.ReactNode;
  props?: { class?: string | undefined };
};

export default function SectionContainer({
  children,
  props,
}: SectionContainerProps) {
  return (
    <section className={`lg:px-0 max-w-screen-lg m-auto px-5 ${props?.class}`}>
      {children}
    </section>
  );
}
