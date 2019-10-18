import React from "react";

export function Emoji({ which, label }) {
  return (
    <span role={"img"} aria-label={label}>
      {which}
    </span>
  );
}
