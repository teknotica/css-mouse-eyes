/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useState } from "react";

import useMouseOver from "../../hooks/useMouseOver";
import { colours } from "../../theme";
import getColourIndex from "../../utils/getColourIndex";
import styles from "./styles.js";

const Column = ({ count }) => (
  <div className="column">
    {[...Array(count)].map((_, b) => (
      <Fragment key={b}>
        <div className="bubble" />
        <audio
          src={`${process.env.PUBLIC_URL}pop2.ogg`}
          preload="auto"
          autoPlay={false}
        ></audio>
      </Fragment>
    ))}
  </div>
);

const BubbleWrap = ({ horizontalCount, verticalCount }) => {
  const [colourIndex, setColourIndex] = useState(0);
  const [background, setBackground] = useState(colours[colourIndex]);

  const getNewBackground = () => {
    const newIndex = getColourIndex(colours.length);

    if (newIndex) {
      setColourIndex(newIndex);
      setBackground(colours[newIndex]);
    }
  };

  useMouseOver();

  return (
    <div css={styles.wrapper(background)}>
      <div css={styles.base}>
        <div css={styles.controls}>
          <button onClick={() => getNewBackground()}>
            <span role="img" aria-label="rainbow">
              🌈{" "}
            </span>
            [Change colour]
          </button>
          {/* <div>
            <input
              type="checkbox"
              id="sound"
              name="sound"
              onClick={() => console.log("Toogle")}
            />
            <label htmlFor="sound">Toggle sound</label>
          </div> */}
        </div>
        {[...Array(horizontalCount)].map((_, b) => (
          <Column key={b} count={verticalCount} />
        ))}
      </div>
    </div>
  );
};

export default BubbleWrap;
