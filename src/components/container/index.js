/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useLocation } from "react-router-dom";

import styles from "./styles";

const backgroundMap = {
  "/": "#3987b1",
  "/eye-balls": "#ffdbdb",
};

const Container = ({ children }) => {
  const location = useLocation();
  const background = backgroundMap[location.pathname];

  return <div css={styles.container(background)}>{children}</div>;
};

export default Container;
