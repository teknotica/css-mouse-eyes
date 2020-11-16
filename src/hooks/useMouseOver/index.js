import { useCallback, useEffect } from "react";

import {
  ADD_EVENTLISTENER,
  REMOVE_EVENTLISTENER,
  SOUND_ON,
} from "../../constants";
import useLocalStorage from "../useLocalStorage";

const useMouseOver = () => {
  const { getLocalItem } = useLocalStorage();

  const addClassToBubble = useCallback(
    (event, item) => {
      if (!item.classList.contains("popped")) {
        item.classList.add(...["popped"]);

        if (getLocalItem("sound") === SOUND_ON) {
          item.nextSibling.play();
        }
      }
    },
    [getLocalItem]
  );

  const handleEventListeners = useCallback(
    (action) => {
      const columns = document.getElementsByClassName("column");

      for (let column of columns) {
        const items = column.getElementsByTagName("div");
        for (let item of items) {
          if (action === ADD_EVENTLISTENER) {
            item.addEventListener("mouseover", (event) =>
              addClassToBubble(event, item)
            );
          } else if (action === REMOVE_EVENTLISTENER) {
            item.removeEventListener("mouseover", (event) =>
              addClassToBubble(event, item)
            );
          }
        }
      }
    },
    [addClassToBubble]
  );

  useEffect(() => {
    handleEventListeners(ADD_EVENTLISTENER);

    return () => {
      handleEventListeners(REMOVE_EVENTLISTENER);
    };
  }, [handleEventListeners]);
};

export default useMouseOver;
