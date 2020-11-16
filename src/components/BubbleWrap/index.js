/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useEffect, useState } from "react";

import { SOUND_OFF, SOUND_ON } from "../../constants";
import useLocalStorage from "../../hooks/useLocalStorage";
import useMouseOver from "../../hooks/useMouseOver";
import { colours } from "../../theme";
import getColourIndex from "../../utils/getColourIndex";
import styles from "./styles.js";

var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

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
  const { setLocalItem, getLocalItem } = useLocalStorage();

  useEffect(() => {
    setLocalItem("sound", SOUND_OFF);
  }, [setLocalItem]);

  const toggleSound = () => {
    const soundSetting =
      getLocalItem("sound") === SOUND_OFF ? SOUND_ON : SOUND_OFF;
    setLocalItem("sound", soundSetting);
  };

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
          {!isSafari && (
            <div>
              <input
                type="checkbox"
                id="sound"
                name="sound"
                onClick={toggleSound}
              />
              <label htmlFor="sound">Sound ON/OFF</label>
            </div>
          )}
        </div>
        {[...Array(horizontalCount)].map((_, b) => (
          <Column key={b} count={verticalCount} />
        ))}
      </div>
    </div>
  );
};

export default BubbleWrap;
