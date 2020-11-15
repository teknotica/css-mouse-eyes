import { css } from "@emotion/core";

const styles = {
  wrapper: ({
    background,
    boxShadow,
    linearGradient,
    linearGradientPopped,
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: ${background};

    .bubble {
      border-radius: 50%;
      position: relative;
      border-radius: 50px;
      box-shadow: 4px 4px 8px ${boxShadow[0]}, -4px -4px 8px ${boxShadow[1]};
      background: linear-gradient(
        145deg,
        ${linearGradient[0]},
        ${linearGradient[1]}
      );
      width: 40px;
      height: 40px;
      margin-right: 5px;
      margin-bottom: 5px;
      cursor: pointer;

      &.popped {
        background: linear-gradient(
          145deg,
          ${linearGradientPopped[0]},
          ${linearGradientPopped[1]}
        );
      }
    }
  `,
  base: css`
    display: flex;
  `,
  controls: css`
    position: absolute;
    top: 5px;
    right: 5px;
  `,
};

export default styles;
