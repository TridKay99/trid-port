import React from 'react';
import { HiLightBulb } from 'react-icons/hi';
import {Theme} from "./Trid";

type Props = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const DarkModeButton = (props: Props) => {

  const setTheme = () => {
    props.theme === Theme.DARK
      ? props.setTheme(Theme.LIGHT)
      : props.setTheme(Theme.DARK)
  };

  return (
    <div className={"flex"}>
      <button onClick={setTheme}
              className={
        "border-2 " +
        "border-black dark:border-white " +
        "shadow-md dark:shadow-inner " +
        "items-center " +
        "justify-center " +
        "rounded-full " +
        "py-1.5 " +
        "px-2.5 " +
        "font-bold " +
        "bg-white " +
        "text-black " +
        "dark:bg-black " +
        "dark:text-white"
      }>
        <HiLightBulb className={"inline w-8 h-8"} />
      </button>
      <p className={"m-1 font-bold"}> Dark Mode </p>
    </div>
  );
};
