import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {

    const [theme, settheme] = useState(false);

    let Html=document.documentElement;

    const handletoggele=()=>{
        settheme(!theme)
        Html.setAttribute("data-theme",theme?"light":"dark")
        localStorage.setItem('theme',theme?"light":"dark")
    }

    useEffect(()=>{
       let cur_theme=localStorage.getItem('theme') 
       if(cur_theme==="dark"){
        Html.setAttribute("data-theme","dark")
        settheme(true)
       }else{
        Html.setAttribute("data-theme","light")
        settheme(false)
       }
    },[Html])


    return (
        <div className='navbar'>
            <div className="logo">
                <Link to='/'><Logo /></Link>
            </div>
            <div className="menu">
                <ul>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/'>
                        <li className=''><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z" fill="" stroke="" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z" stroke="" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>Dashboard
                        </li>
                    </NavLink>

                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/market'>
                        <li>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.01001 11.22V15.71C3.01001 20.2 4.81001 22 9.30001 22H14.69C19.18 22 20.98 20.2 20.98 15.71V11.22" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 12C13.83 12 15.18 10.51 15 8.68L14.34 2H9.66999L8.99999 8.68C8.81999 10.51 10.17 12 12 12Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18.31 12C20.33 12 21.81 10.36 21.61 8.35L21.33 5.6C20.97 3 19.97 2 17.35 2H14.3L15 9.01C15.17 10.66 16.66 12 18.31 12Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5.64 12C7.29 12 8.78 10.66 8.94 9.01L9.16 6.8L9.64001 2H6.59C3.97001 2 2.97 3 2.61 5.6L2.34 8.35C2.14 10.36 3.62 12 5.64 12Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 17C10.33 17 9.5 17.83 9.5 19.5V22H14.5V19.5C14.5 17.83 13.67 17 12 17Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Market
                        </li>
                    </NavLink>

                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/activebids'>
                        <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.01 18.51L15.06 13.56" stroke="" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.06 13.56L11.52 17.1C10.74 17.88 9.47 17.88 8.69 17.1L4.44999 12.86C3.66999 12.08 3.66999 10.81 4.44999 10.03L11.52 2.96C12.3 2.18 13.57 2.18 14.35 2.96L18.59 7.20002C19.37 7.98002 19.37 9.25001 18.59 10.03L15.06 13.56Z" stroke="" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 21H8" stroke="" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.56 7.92001L13.63 14.99" stroke="" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                            Active Bids</li></NavLink>
                </ul>
                <span>Profile</span>
                <ul>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/portfolio'>

                        <li>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 8.5C22 12.09 19.09 15 15.5 15C15.33 15 15.15 14.99 14.98 14.98C14.73 11.81 12.19 9.26999 9.01999 9.01999C9.00999 8.84999 9 8.67 9 8.5C9 4.91 11.91 2 15.5 2C19.09 2 22 4.91 22 8.5Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15 15.5C15 19.09 12.09 22 8.5 22C4.91 22 2 19.09 2 15.5C2 11.91 4.91 9 8.5 9C8.67 9 8.84999 9.00999 9.01999 9.01999C12.19 9.26999 14.73 11.81 14.98 14.98C14.99 15.15 15 15.33 15 15.5Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.62 14.62L8.5 13L9.38 14.62L11 15.5L9.38 16.38L8.5 18L7.62 16.38L6 15.5L7.62 14.62Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Portfolio
                        </li>
                    </NavLink>

                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/wallet'>
                        <li>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 11.15H7" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 11.15V6.53003C2 4.49003 3.65 2.84003 5.69 2.84003H11.31C13.35 2.84003 15 4.11002 15 6.15002" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17.48 12.2C16.98 12.68 16.74 13.42 16.94 14.18C17.19 15.11 18.11 15.7 19.07 15.7H20V17.15C20 19.36 18.21 21.15 16 21.15H6C3.79 21.15 2 19.36 2 17.15V10.15C2 7.94002 3.79 6.15002 6 6.15002H16C18.2 6.15002 20 7.95002 20 10.15V11.6H18.92C18.36 11.6 17.85 11.82 17.48 12.2Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 12.62V14.68C22 15.24 21.54 15.7 20.97 15.7H19.04C17.96 15.7 16.97 14.91 16.88 13.83C16.82 13.2 17.06 12.61 17.48 12.2C17.85 11.82 18.36 11.6 18.92 11.6H20.97C21.54 11.6 22 12.06 22 12.62Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Wallet
                        </li>
                    </NavLink>

                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/favourite'>
                        <li>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.86 8.09C19.86 8.51 19.83 8.92 19.78 9.31C19.32 9.11 18.82 9 18.29 9C17.07 9 15.99 9.58999 15.32 10.49C14.64 9.58999 13.56 9 12.34 9C10.29 9 8.63 10.67 8.63 12.74C8.63 15.42 10.05 17.47 11.63 18.86C11.58 18.89 11.53 18.9 11.48 18.92C11.18 19.03 10.68 19.03 10.38 18.92C7.79 18.03 2 14.35 2 8.09C2 5.33 4.21999 3.10001 6.95999 3.10001C8.58999 3.10001 10.03 3.88 10.93 5.09C11.84 3.88 13.28 3.10001 14.9 3.10001C17.64 3.10001 19.86 5.33 19.86 8.09Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 12.74C22 17.42 17.67 20.18 15.73 20.84C15.5 20.92 15.13 20.92 14.9 20.84C14.07 20.56 12.8 19.89 11.63 18.86C10.05 17.47 8.63 15.42 8.63 12.74C8.63 10.67 10.29 9 12.34 9C13.56 9 14.64 9.58999 15.32 10.49C15.99 9.58999 17.07 9 18.29 9C18.82 9 19.32 9.11 19.78 9.31C21.09 9.89 22 11.2 22 12.74Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Favourites
                        </li>
                    </NavLink>

                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/history'>
                        <li>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            History
                        </li>
                    </NavLink>

                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/settings'>
                        <li>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 9.11V14.88C3 17 3 17 5 18.35L10.5 21.53C11.33 22.01 12.68 22.01 13.5 21.53L19 18.35C21 17 21 17 21 14.89V9.11C21 7 21 7 19 5.65L13.5 2.47C12.68 1.99 11.33 1.99 10.5 2.47L5 5.65C3 7 3 7 3 9.11Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Settings
                        </li>
                    </NavLink>
                </ul>
                <span>Others</span>
                <ul>
                    <div className="modes">
                        <div onClick={handletoggele} id={theme?'toggle':null} className="themes">
                        <label htmlFor="theme">Dark mode</label>
                        <input type="checkbox" name="" className='' id="theme" />
                        <div className="theme_btn">
                        </div>
                        </div>

                        <Link onClick={()=>{localStorage.setItem("Login",'false')}} to='../start?logged_out11be2bc5-3381-4b05-b090-c3496f691425'>
                            <li>
                                <svg width="27" height="27" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.29167 16.6667L3.125 12.5M3.125 12.5L7.29167 8.33335M3.125 12.5H17.7083M11.4583 16.6667V17.7084C11.4583 18.5372 11.7876 19.332 12.3736 19.9181C12.9597 20.5041 13.7545 20.8334 14.5833 20.8334H18.75C19.5788 20.8334 20.3737 20.5041 20.9597 19.9181C21.5458 19.332 21.875 18.5372 21.875 17.7084V7.29169C21.875 6.46289 21.5458 5.66803 20.9597 5.08198C20.3737 4.49593 19.5788 4.16669 18.75 4.16669H14.5833C13.7545 4.16669 12.9597 4.49593 12.3736 5.08198C11.7876 5.66803 11.4583 6.46289 11.4583 7.29169V8.33335" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Log out
                            </li>
                        </Link>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
