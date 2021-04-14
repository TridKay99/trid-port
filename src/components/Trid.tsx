import React, {useEffect, useState} from 'react';
import '../styles/hamburger.css'
import {Hamburger} from "./Navigator/Hamburger";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export const Trid = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  useEffect(() => {
   const localStorageTheme = localStorage.getItem('theme');

   if(localStorageTheme === null) {
     return localStorage.setItem('theme', Theme.LIGHT)
   } else if(localStorageTheme === (Theme.DARK || Theme.LIGHT)) {
     return setTheme(localStorageTheme)
   } else {
     return localStorage.setItem('theme', Theme.LIGHT)
   }
  }, []);

  const setAppTheme = (theme: Theme) => {
    localStorage.setItem("theme", theme);
    setTheme(theme)
  };
  return (
    <div className={theme === Theme.DARK ? "dark" : ""}>
      <div className={"bg-white dark:bg-grey-dark h-screen overflow-x-hidden"}>
        <Hamburger theme={theme} setTheme={setAppTheme}/>
        <div className={"flex flex-col mt-16 justify-center items-center"}>
          <p className={"text-white mr-14 text-5xl"}>Tristan</p><p className={"text-or-gold ml-28 text-5xl"}>Kay</p>
        </div>
      </div>
    </div>
  );
};
