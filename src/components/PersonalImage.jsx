import React from "react";

export function PersonalImage({ src, alt }) {
  return <img src={src} alt={alt} className={"image round-corners"} />;
}
