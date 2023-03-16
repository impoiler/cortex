import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const Mobilemenu = () => {
  const [state, setstate] = useState(false);

  return (
    <>
      <div id={state ? "heigh100vh" : null} className="mmenu">
        <div className="flxspbt toptp">
          <Link to="/">
            <Logo />
          </Link>

          {state ? (
            <svg onClick={() => { setstate(!state); }} width="23" height="23" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M25.18 0L14 11.18L2.82 0L0 2.82L11.18 14L0 25.18L2.82 28L14 16.82L25.18 28L28 25.18L16.82 14L28 2.82L25.18 0Z" fill="" /> </svg> ) : ( <svg onClick={() => { setstate(!state); }} width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M0 7.91667H18.75V11.0833H0V7.91667ZM0 0H25V3.16667H0V0ZM0 19H11.3047V15.8333H0V19Z" fill="" /> </svg>
          )}
        </div>

        {state ? (
          <div className="menu">
            <ul>
              <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/" > <li className=""> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z" fill="" stroke="" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /> <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /> <path d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z" stroke="" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /> <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /> </svg> Dashboard </li> </NavLink>

              <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/market" > <li> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M3.01001 11.22V15.71C3.01001 20.2 4.81001 22 9.30001 22H14.69C19.18 22 20.98 20.2 20.98 15.71V11.22" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M12 12C13.83 12 15.18 10.51 15 8.68L14.34 2H9.66999L8.99999 8.68C8.81999 10.51 10.17 12 12 12Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M18.31 12C20.33 12 21.81 10.36 21.61 8.35L21.33 5.6C20.97 3 19.97 2 17.35 2H14.3L15 9.01C15.17 10.66 16.66 12 18.31 12Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M5.64 12C7.29 12 8.78 10.66 8.94 9.01L9.16 6.8L9.64001 2H6.59C3.97001 2 2.97 3 2.61 5.6L2.34 8.35C2.14 10.36 3.62 12 5.64 12Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M12 17C10.33 17 9.5 17.83 9.5 19.5V22H14.5V19.5C14.5 17.83 13.67 17 12 17Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg> Market </li> </NavLink>

              <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/activebids" > <li> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M20.01 18.51L15.06 13.56" stroke="" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /> <path d="M15.06 13.56L11.52 17.1C10.74 17.88 9.47 17.88 8.69 17.1L4.44999 12.86C3.66999 12.08 3.66999 10.81 4.44999 10.03L11.52 2.96C12.3 2.18 13.57 2.18 14.35 2.96L18.59 7.20002C19.37 7.98002 19.37 9.25001 18.59 10.03L15.06 13.56Z" stroke="" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /> <path d="M2 21H8" stroke="" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /> <path d="M6.56 7.92001L13.63 14.99" stroke="" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /> </svg> Active Bids </li> </NavLink>
            </ul>
            <span>Profile</span>
            <ul>
              <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/portfolio" > <li> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M22 8.5C22 12.09 19.09 15 15.5 15C15.33 15 15.15 14.99 14.98 14.98C14.73 11.81 12.19 9.26999 9.01999 9.01999C9.00999 8.84999 9 8.67 9 8.5C9 4.91 11.91 2 15.5 2C19.09 2 22 4.91 22 8.5Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M15 15.5C15 19.09 12.09 22 8.5 22C4.91 22 2 19.09 2 15.5C2 11.91 4.91 9 8.5 9C8.67 9 8.84999 9.00999 9.01999 9.01999C12.19 9.26999 14.73 11.81 14.98 14.98C14.99 15.15 15 15.33 15 15.5Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M7.62 14.62L8.5 13L9.38 14.62L11 15.5L9.38 16.38L8.5 18L7.62 16.38L6 15.5L7.62 14.62Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg> Portfolio </li> </NavLink>

              <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/wallet" > <li> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M13 11.15H7" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M2 11.15V6.53003C2 4.49003 3.65 2.84003 5.69 2.84003H11.31C13.35 2.84003 15 4.11002 15 6.15002" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M17.48 12.2C16.98 12.68 16.74 13.42 16.94 14.18C17.19 15.11 18.11 15.7 19.07 15.7H20V17.15C20 19.36 18.21 21.15 16 21.15H6C3.79 21.15 2 19.36 2 17.15V10.15C2 7.94002 3.79 6.15002 6 6.15002H16C18.2 6.15002 20 7.95002 20 10.15V11.6H18.92C18.36 11.6 17.85 11.82 17.48 12.2Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M22 12.62V14.68C22 15.24 21.54 15.7 20.97 15.7H19.04C17.96 15.7 16.97 14.91 16.88 13.83C16.82 13.2 17.06 12.61 17.48 12.2C17.85 11.82 18.36 11.6 18.92 11.6H20.97C21.54 11.6 22 12.06 22 12.62Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg> Wallet </li> </NavLink>

              <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/favourite" > <li> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M19.86 8.09C19.86 8.51 19.83 8.92 19.78 9.31C19.32 9.11 18.82 9 18.29 9C17.07 9 15.99 9.58999 15.32 10.49C14.64 9.58999 13.56 9 12.34 9C10.29 9 8.63 10.67 8.63 12.74C8.63 15.42 10.05 17.47 11.63 18.86C11.58 18.89 11.53 18.9 11.48 18.92C11.18 19.03 10.68 19.03 10.38 18.92C7.79 18.03 2 14.35 2 8.09C2 5.33 4.21999 3.10001 6.95999 3.10001C8.58999 3.10001 10.03 3.88 10.93 5.09C11.84 3.88 13.28 3.10001 14.9 3.10001C17.64 3.10001 19.86 5.33 19.86 8.09Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M22 12.74C22 17.42 17.67 20.18 15.73 20.84C15.5 20.92 15.13 20.92 14.9 20.84C14.07 20.56 12.8 19.89 11.63 18.86C10.05 17.47 8.63 15.42 8.63 12.74C8.63 10.67 10.29 9 12.34 9C13.56 9 14.64 9.58999 15.32 10.49C15.99 9.58999 17.07 9 18.29 9C18.82 9 19.32 9.11 19.78 9.31C21.09 9.89 22 11.2 22 12.74Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg> Favourites </li> </NavLink>

              <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/history" > <li> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg> History </li> </NavLink>

              <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/settings" > <li> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M3 9.11V14.88C3 17 3 17 5 18.35L10.5 21.53C11.33 22.01 12.68 22.01 13.5 21.53L19 18.35C21 17 21 17 21 14.89V9.11C21 7 21 7 19 5.65L13.5 2.47C12.68 1.99 11.33 1.99 10.5 2.47L5 5.65C3 7 3 7 3 9.11Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg> Settings </li> </NavLink>
            </ul>
            <span>Others</span>
            <ul>
              <div className="modes">
                <input type="checkbox" name="" id="theme" />

                <label htmlFor="theme">
                  <li
                    className="flx20gap"
                    onClick={() => {
                      setstate(!state);
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M20.354 15.354C18.7172 16.0122 16.9231 16.1748 15.1946 15.8217C13.4662 15.4686 11.8796 14.6153 10.6322 13.3678C9.38472 12.1204 8.53139 10.5338 8.17827 8.80535C7.82514 7.0769 7.98779 5.28277 8.64599 3.646C6.7077 4.42673 5.10135 5.85739 4.10232 7.69272C3.10328 9.52805 2.77378 11.6537 3.17031 13.7054C3.56683 15.757 4.66467 17.6069 6.27565 18.9378C7.88662 20.2687 9.91037 20.9977 12 21C13.7969 21.0001 15.5527 20.4624 17.0415 19.4562C18.5303 18.45 19.684 17.0213 20.354 15.354Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M20.9807 12.5891C21.0638 11.3226 20.878 10.0528 20.4357 8.86319C19.9933 7.67354 19.3043 6.59091 18.4139 5.68638C17.5235 4.78185 16.4519 4.07588 15.2694 3.61482C14.0868 3.15375 12.8202 2.94802 11.5525 3.01113" stroke="" strokeWidth="1.5" strokeLinecap="round" /> </svg>
                    Light Mode
                    <span
                      id={state ? "light_theme" : "dark_theme"}
                      className="theme_btn"
                    ></span>
                  </li>
                </label>
              </div>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Mobilemenu;
