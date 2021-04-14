import React from 'react';
import {DarkModeButton} from "../DarkModeButton";
import {Theme} from "../Trid";
import '../../styles/hamburger.css'

type Props = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const Hamburger = (props: Props) => {

  return (
    <div id={props.theme === Theme.LIGHT ? "menuToggle" : "menuToggle-dark-mode"}>
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <DarkModeButton theme={props.theme} setTheme={props.setTheme}/>
      </ul>
    </div>
  );
};
