/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useState } from "react";

import { useMouseOver } from "../../hooks/useMouseOver";
import { colours } from "../../theme";
import getColourIndex from "../../utils/getColourIndex";
import Controls from "../Controls";
import CreditFooter from "../CreditFooter";
import styles from "./styles.js";

const Column = ({ count }) => (
  <div className="column">
    {[...Array(count)].map((_, b) => (
      <Fragment key={b}>
        <div className="bubble" />
        <audio
          src={`${process.env.PUBLIC_URL}pop.wav`}
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

  // Gets a new background index
  const getNewBackground = () => {
    const newIndex = getColourIndex(colourIndex);

    setColourIndex(newIndex);
    setBackground(colours[newIndex]);
  };

  useMouseOver();

  return (
    <div css={styles.wrapper(background)}>
      <Controls getNewBackground={getNewBackground} />
      <div css={styles.base}>
        {[...Array(horizontalCount)].map((_, b) => (
          <Column key={b} count={verticalCount} />
        ))}
      </div>
      <CreditFooter />
    </div>
  );
};

export default BubbleWrap;
