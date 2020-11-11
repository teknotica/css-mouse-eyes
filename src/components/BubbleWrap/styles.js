import { css } from "@emotion/core";

const styles = {
  base: css`
    display: flex;
  `,
  bubble: css`
    border-radius: 50%;
    position: relative;
    border-radius: 50px;
    box-shadow: 4px 4px 8px #307396, -4px -4px 8px #429bcc;
    background: linear-gradient(145deg, #3d90bd, #337a9f);
    width: 40px;
    height: 40px;
    margin-right: 5px;
    margin-bottom: 5px;
    cursor: pointer;

    &.popped {
      background: linear-gradient(145deg, #337a9f, #3d90bd);
    }
  `,
};

export default styles;
