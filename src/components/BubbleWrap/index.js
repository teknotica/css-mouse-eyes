/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useState } from "react";

import useBackgroundColour from "../../hooks/useBackgroundColour";
import useMouseOver from "../../hooks/useMouseOver";
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
  const { getFirstColour, getRandomColour } = useBackgroundColour();
  const [background, setBackground] = useState(getFirstColour);

  useMouseOver();

  return (
    <div css={styles.wrapper(background)}>
      <div css={styles.base}>
        <div css={styles.controls}>
          <button onClick={() => setBackground(getRandomColour())}>
            <span role="img" aria-label="rainbow">
              🌈{" "}
            </span>
            Change colour
          </button>
        </div>
        {[...Array(horizontalCount)].map((_, b) => (
          <Column key={b} count={verticalCount} />
        ))}
      </div>
    </div>
  );
};

export default BubbleWrap;
