import React from "react";
import { RepeatedImage } from "../components/RepeatedImage";

import katze from "../images/katzen-lahore.jpg";
import { ExpandOnClick } from "../components/ExpandOnClick";

export function Day_10_17() {
  return (
    <>
      <h1>Component Show Room</h1>
      <h3>No. 1</h3> the <code>RepeatedImage</code> component.
      <RepeatedImage
        imgSrc={katze}
        paragraphs={[
          () => (
            <>
              <p>Kitties are süß, no matter where they are</p>
            </>
          ),
          () => (
            <>
              <p>
                Also there are other details on this image that you wanna
                discuss in a separate paragraph without the reader to scroll up
                the page to see the image you're referring to every time
              </p>
            </>
          ),
          () => (
            <>
              <p>Every new paragraph automatically starts with the image</p>
            </>
          )
        ]}
      />
      <h3>No. 2</h3> is <code>ExpandOnClick</code> component.
      <ExpandOnClick
        Clickable={() => <p>click this text to un-hide more content.</p>}
        Expandable={() => (
          <>
            <p>create a nice little interaction to make reading</p>
            <ExpandOnClick
              Clickable={() => <p>more fun ..</p>}
              Expandable={() => <p> & exciting!</p>}
            />
          </>
        )}
      />
    </>
  );
}
