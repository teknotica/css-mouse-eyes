/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";

import useMouseOver from "../../hooks/useMouseOver";
import styles from "./styles.js";

const Column = ({ count }) => (
  <div className="column">
    {[...Array(count)].map((_, b) => (
      <div key={b} css={styles.bubble} />
    ))}
  </div>
);

const BubbleWrap = ({ horizontalCount, verticalCount }) => {
  useMouseOver();

  return (
    <div css={styles.base}>
      {[...Array(horizontalCount)].map((_, b) => (
        <Column key={b} count={verticalCount} />
      ))}
      <audio id="popAudio" src={`${process.env.PUBLIC_URL}pop.wav`}></audio>
    </div>
  );
};

export default BubbleWrap;
