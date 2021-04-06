import { css } from "@emotion/core";

const styles = {
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
  button: css`
    display: inline-flex;
    align-items: center;
    text-decoration: underline;
    cursor: pointer;

    span {
      margin-right: 10px;
    }
  `,
  inputWrapper: css`
    display: inline-flex;
    align-items: center;
    text-decoration: underline;

    label {
      cursor: pointer;
    }
  `,
};

export default styles;
