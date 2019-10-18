import React from "react";

import { PersonalImage } from "./PersonalImage";

export function RepeatedImage({ imgSrc, paragraphs }) {
  return (
    <>
      {paragraphs.map((Paragraph, idx) => (
        <div key={idx}>
          <PersonalImage src={imgSrc} />
          <Paragraph />
        </div>
      ))}
    </>
  );
}
