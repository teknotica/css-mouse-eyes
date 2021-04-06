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
    position: relative;

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
      width: 2rem;
      height: 2rem;
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
    width: 100%;
    top: 0;
    left: 0;
    padding-top: 20px;
  `,
  controlList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;

    li {
      display: inline;
      margin-right: 5px;
    }
  `,
  inputWrapper: css`
    padding: 7px 10px;
    background: #dddbda;
    border-radius: 80px;
    transition: background-color 0.5s ease;
    white-space: nowrap;

    &:hover {
      background: #9e9e9e;
    }

    label {
      font-size: 0.8rem;
      cursor: pointer;
    }
  `,
};

export default styles;
