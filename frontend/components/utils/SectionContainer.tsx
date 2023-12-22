import React from "react";

export default function SectionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="px-10 md:px-20 pt-5 pb-16">{children}</section>;
}
