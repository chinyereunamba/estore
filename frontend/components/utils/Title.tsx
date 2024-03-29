import React from "react";

interface TitleInterface {
  title: string;
  class?: string | null
}

export default function Title({ title }: TitleInterface) {
  return (
    <div className={`py-6 text-center w-full`}>
      <h3>{title}</h3>
    </div>
  );
}
