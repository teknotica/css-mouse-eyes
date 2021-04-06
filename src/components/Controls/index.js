/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useEffect } from "react";

import { SOUND_OFF, SOUND_ON } from "../../constants";
import useLocalStorage from "../../hooks/useLocalStorage";
import { resetBubbles } from "../../hooks/useMouseOver";
import styles from "./styles.js";

var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const Controls = ({ getNewBackground }) => {
  const { setLocalItem, getLocalItem } = useLocalStorage();

  useEffect(() => {
    setLocalItem("sound", SOUND_OFF);
  }, [setLocalItem]);

  const toggleSound = () => {
    const currentSoundMode = getLocalItem("sound");
    setLocalItem(
      "sound",
      currentSoundMode === SOUND_OFF ? SOUND_ON : SOUND_OFF
    );
  };

  return (
    <div css={styles.controls}>
      <ul css={styles.controlList}>
        <li>
          <button css={styles.button} onClick={() => getNewBackground()}>
            <span role="img" aria-label="rainbow">
              🌈{" "}
            </span>
            <span>Change colour</span>
          </button>
        </li>
        <li>
          <button css={styles.button} onClick={() => resetBubbles()}>
            <span role="img" aria-label="reset">
              ♻️{" "}
            </span>
            <span>Reset bubbles</span>
          </button>
        </li>
        {!isSafari && (
          <li>
            <span css={styles.inputWrapper}>
              <input
                type="checkbox"
                name="sound"
                id="sound"
                onChange={() => toggleSound()}
              />
              <label htmlFor="sound">Sound on</label>
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Controls;
