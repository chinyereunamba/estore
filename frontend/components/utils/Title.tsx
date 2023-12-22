import React from "react";

interface TitleInterface {
  title: string;
}

export default function Title({ title }: TitleInterface) {
  return (
    <div className="py-5">
      <h2>{title}</h2>
    </div>
  );
}
