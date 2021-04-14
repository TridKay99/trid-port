import React from 'react';
import {DarkModeButton} from "../DarkModeButton";
import {Theme} from "../Trid";

type Props = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const Hamburger = (props: Props) => {

  return (
    <>
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <DarkModeButton theme={props.theme} setTheme={props.setTheme}/>
        </ul>
      </div>
    </nav>
    </>
  );
};
