import { css } from "@emotion/core";

const styles = {
  nav: css`
    position: fixed;
    top: 5px;
    left: 5px;

    ul {
      margin: 0;
      padding: 0;
      li {
        display: inline-block;
        margin-right: 10px;
        a {
          color: blue;
        }
      }
    }
  `,
};

export default styles;
