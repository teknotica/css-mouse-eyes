/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";

import styles from "./styles.js";

const Column = ({ count }) => (
  <div className="column">
    {[...Array(count)].map((_, b) => (
      <div key={b} css={styles.eye}>
        <div css={styles.iris} />
      </div>
    ))}
  </div>
);

const EyeBalls = ({ horizontalCount, verticalCount }) => {
  return (
    <div css={styles.base}>
      {[...Array(horizontalCount)].map((_, b) => (
        <Column key={b} count={verticalCount} />
      ))}
    </div>
  );
};

export default EyeBalls;
