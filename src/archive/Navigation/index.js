/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";

import styles from "./styles";

const Container = ({ children }) => (
  <nav css={styles.nav}>
    <ul>
      <li>
        <Link to="/">[Bubble wrap]</Link>
      </li>
      <li>
        <Link to="/eye-balls">[Eye balls]</Link>
      </li>
    </ul>
  </nav>
);

export default Container;
