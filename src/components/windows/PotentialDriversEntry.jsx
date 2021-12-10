import { useState, useEffect, useRef } from "react";
import { Window, Button, WindowHeader, WindowContent } from "react95";

import "./Window.scss";

import moveAndResizeWindow from "../../helpers/moveAndResizeWindow";

export default function PotentialDriversEntry({
  windowId,
  inputValue,
  setInputValue,
  handleSubmit,
}) {
  useEffect(() => {
    const returnObj = moveAndResizeWindow(windowId);

    return () => {
      const { windowHeader, handleWindowMove } = returnObj;
      windowHeader.removeEventListener("mousedown", handleWindowMove);
    };
  }, [windowId]);

  const [windowHasFocus, setWindowHasFocus] = useState(true);
  const windowRef = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (windowRef.current && !windowRef.current.contains(e.target)) {
        setWindowHasFocus(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [windowHasFocus]);

  return (
    <Window
      resizable
      className="window"
      id={windowId}
      ref={windowRef}
      onMouseDown={() => setWindowHasFocus(true)}
      style={{ zIndex: windowHasFocus ? 1 : 0 }}
    >
      <WindowHeader className="window-header">
        <span>Enter Group Members</span>
        <Button>
          <span className="close-icon">X</span>
        </Button>
      </WindowHeader>
      <WindowContent>
        <h2>Enter the potential drivers</h2>
        <p>One at a time or comma separated</p>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </label>
          <input type="submit" value="Add them!" disabled={!inputValue} />
        </form>
      </WindowContent>
    </Window>
  );
}
