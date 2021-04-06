/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";

import styles from "./styles.js";

const CreditFooter = () => (
  <div css={styles.footer}>
    <div>
      Created by{" "}
      <a href="https://github.com/teknotica" target="_blank" rel="noreferrer">
        @teknotica
      </a>
    </div>
  </div>
);

export default CreditFooter;
