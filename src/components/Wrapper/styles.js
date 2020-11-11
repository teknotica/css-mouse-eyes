import { css } from "@emotion/core";

const styles = {
  container: (background) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: ${background};
  `,
};

export default styles;
