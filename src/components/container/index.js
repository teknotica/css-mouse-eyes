/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";

import styles from "./styles.js";

const Column = ({ count }) => (
  <div className="column">
    {[...Array(count)].map((_, b) => (
      <div key={b} css={styles.bubble}>
        <div css={styles.iris} />
      </div>
    ))}
  </div>
);

const Container = ({ widthCount, heightCount }) => (
  <div css={styles.base}>
    {[...Array(widthCount)].map((_, b) => (
      <Column key={b} count={heightCount} />
    ))}
  </div>
);

export default Container;
