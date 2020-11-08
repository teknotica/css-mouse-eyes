import { css } from "@emotion/core";

const styles = {
  base: css`
    display: flex;
  `,
  bubble: css`
    border-radius: 50%;
    position: relative;
    background: radial-gradient(
      circle at 50% 40%,
      #fcfcfc,
      #efeff1 66%,
      #9b5050 100%
    );
    width: 40px;
    height: 40px;
    margin-right: 5px;
    margin-bottom: 5px;
    cursor: pointer;

    &:after {
      content: "";
      position: absolute;
      top: 5%;
      left: 10%;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: radial-gradient(
        circle at 50% 50%,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.8) 14%,
        rgba(255, 255, 255, 0) 24%
      );
      transform: translateX(-80px) translateY(-90px) skewX(-20deg);
    }
  `,
  iris: css`
    position: absolute;
    width: 40%;
    height: 40%;
    margin: 30%;
    border-radius: 100%;
    background: radial-gradient(
      circle at 50% 50%,
      #208ab4 0%,
      #6fbfff 30%,
      #4381b2 100%
    );
    /* transform: translateX(68px) translateY(-60px) skewX(15deg) skewY(2deg); */
    /* animation: move-eye-skew 5s ease-out infinite; */

    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 37.5%;
      height: 37.5%;
      border-radius: 100%;
      top: 31.25%;
      left: 31.25%;
      background: black;
    }

    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 31.25%;
      height: 31.25%;
      border-radius: 100%;
      top: 18.75%;
      left: 18.75%;
      background: rgba(255, 255, 255, 0.2);
    }
  `,
};

export default styles;
