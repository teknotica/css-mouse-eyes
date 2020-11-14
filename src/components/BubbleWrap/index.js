/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";

import useMouseOver from "../../hooks/useMouseOver";
import styles from "./styles.js";

const Column = ({ count }) => (
  <div className="column">
    {[...Array(count)].map((_, b) => (
      <Fragment key={b}>
        <div css={styles.bubble} />
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
  useMouseOver();

  return (
    <div css={styles.base}>
      {[...Array(horizontalCount)].map((_, b) => (
        <Column key={b} count={verticalCount} />
      ))}
    </div>
  );
};

export default BubbleWrap;
