import React from 'react'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from './Logo'
import axios from 'axios';

const TopNav = (props) => {

    const [show, setshow] = useState(false);
    const [state, setstate] = useState(false);
    const [spanbg, setspanbg] = useState(true);
    const [query, setquery] = useState("");
    const [suggestion, setsuggestion] = useState([]);
    const [brds, setbrds] = useState(false);
    const [menushow, setmenushow] = useState(false);
    const navigate = useNavigate();

    const handlesubmit=(e)=>{
        navigate(`/search/${query}`)
    }

    const handlechange=(v)=>{
        v.preventDefault();
        setquery(v.target.value)
             
       axios.request(`https://api.datamuse.com/sug?s=${v.target.value}`).then((response)=> {
        setsuggestion(response.data)
        setbrds(true)
      })
        }

        var slided=suggestion.slice(0,5)

        return (
        <>
            <div id={props.cls} className="topnav">
                <div className="logoforsm">
                    <svg width="160" height="60" viewBox="0 0 196 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.064 36.248C2.064 32.984 2.8 30.056 4.272 27.464C5.744 24.84 7.744 22.792 10.272 21.32C12.832 19.848 15.664 19.112 18.768 19.112C22.416 19.112 25.6 19.992 28.32 21.752C31.04 23.512 33.024 26.008 34.272 29.24H29.04C28.112 27.224 26.768 25.672 25.008 24.584C23.28 23.496 21.2 22.952 18.768 22.952C16.432 22.952 14.336 23.496 12.48 24.584C10.624 25.672 9.168 27.224 8.112 29.24C7.056 31.224 6.528 33.56 6.528 36.248C6.528 38.904 7.056 41.24 8.112 43.256C9.168 45.24 10.624 46.776 12.48 47.864C14.336 48.952 16.432 49.496 18.768 49.496C21.2 49.496 23.28 48.968 25.008 47.912C26.768 46.824 28.112 45.272 29.04 43.256H34.272C33.024 46.456 31.04 48.936 28.32 50.696C25.6 52.424 22.416 53.288 18.768 53.288C15.664 53.288 12.832 52.568 10.272 51.128C7.744 49.656 5.744 47.624 4.272 45.032C2.8 42.44 2.064 39.512 2.064 36.248ZM52.2461 53.432C49.7821 53.432 47.5421 52.872 45.5261 51.752C43.5421 50.632 41.9741 49.048 40.8221 47C39.7021 44.92 39.1421 42.52 39.1421 39.8C39.1421 37.112 39.7181 34.744 40.8701 32.696C42.0541 30.616 43.6541 29.032 45.6701 27.944C47.6861 26.824 49.9421 26.264 52.4381 26.264C54.9341 26.264 57.1901 26.824 59.2061 27.944C61.2221 29.032 62.8061 30.6 63.9581 32.648C65.1421 34.696 65.7341 37.08 65.7341 39.8C65.7341 42.52 65.1261 44.92 63.9101 47C62.7261 49.048 61.1101 50.632 59.0621 51.752C57.0141 52.872 54.7421 53.432 52.2461 53.432ZM52.2461 49.592C53.8141 49.592 55.2861 49.224 56.6621 48.488C58.0381 47.752 59.1421 46.648 59.9741 45.176C60.8381 43.704 61.2701 41.912 61.2701 39.8C61.2701 37.688 60.8541 35.896 60.0221 34.424C59.1901 32.952 58.1021 31.864 56.7581 31.16C55.4141 30.424 53.9581 30.056 52.3901 30.056C50.7901 30.056 49.3181 30.424 47.9741 31.16C46.6621 31.864 45.6061 32.952 44.8061 34.424C44.0061 35.896 43.6061 37.688 43.6061 39.8C43.6061 41.944 43.9901 43.752 44.7581 45.224C45.5581 46.696 46.6141 47.8 47.9261 48.536C49.2381 49.24 50.6781 49.592 52.2461 49.592ZM75.8453 30.968C76.6133 29.464 77.7013 28.296 79.1093 27.464C80.5493 26.632 82.2933 26.216 84.3413 26.216V30.728H83.1893C78.2933 30.728 75.8453 33.384 75.8453 38.696V53H71.4773V26.696H75.8453V30.968ZM94.7115 30.296V45.8C94.7115 47.08 94.9835 47.992 95.5275 48.536C96.0715 49.048 97.0155 49.304 98.3595 49.304H101.576V53H97.6395C95.2075 53 93.3835 52.44 92.1675 51.32C90.9515 50.2 90.3435 48.36 90.3435 45.8V30.296H86.9355V26.696H90.3435V20.072H94.7115V26.696H101.576V30.296H94.7115ZM130.868 38.84C130.868 39.672 130.82 40.552 130.724 41.48H109.7C109.86 44.072 110.74 46.104 112.34 47.576C113.972 49.016 115.94 49.736 118.244 49.736C120.132 49.736 121.7 49.304 122.948 48.44C124.228 47.544 125.124 46.36 125.636 44.888H130.34C129.636 47.416 128.228 49.48 126.116 51.08C124.004 52.648 121.38 53.432 118.244 53.432C115.748 53.432 113.508 52.872 111.524 51.752C109.572 50.632 108.036 49.048 106.916 47C105.796 44.92 105.236 42.52 105.236 39.8C105.236 37.08 105.78 34.696 106.868 32.648C107.956 30.6 109.476 29.032 111.428 27.944C113.412 26.824 115.684 26.264 118.244 26.264C120.74 26.264 122.948 26.808 124.868 27.896C126.788 28.984 128.26 30.488 129.284 32.408C130.34 34.296 130.868 36.44 130.868 38.84ZM126.356 37.928C126.356 36.264 125.988 34.84 125.252 33.656C124.516 32.44 123.508 31.528 122.228 30.92C120.98 30.28 119.588 29.96 118.052 29.96C115.844 29.96 113.956 30.664 112.388 32.072C110.852 33.48 109.972 35.432 109.748 37.928H126.356ZM150.362 53L144.122 43.208L138.122 53H133.562L142.058 39.944L133.562 26.696H138.506L144.746 36.44L150.698 26.696H155.258L146.81 39.704L155.306 53H150.362Z" fill=""></path><path d="M171.66 27H169.266L165.262 20.938V27H162.868V17.172H165.262L169.266 23.262V17.172H171.66V27ZM183.293 17.172V19.09H179.289V21.162H182.285V23.024H179.289V27H176.895V17.172H183.293ZM195.122 17.172V19.09H192.518V27H190.124V19.09H187.52V17.172H195.122Z" fill=""></path></svg>
                </div>
                <div className="search hideinsm">
                    <form className={brds?'brds0':null} onSubmit={handlesubmit} action="">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#7A797D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 22L20 20" stroke="#7A797D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <input onChange={handlechange} type="text" placeholder='Search Item, Collection and Account..' />
                        
                        <ul className='autosuggestion'>
                            {
                                slided===undefined?null:slided.map===undefined?null:slided.map((e,i)=><>
                                <a href={`/search/${e.word}`}><li key={i}>{e.word}</li></a>
                            </>)
                            }
                        </ul>

                    </form>
                </div>
                <div className="profile-sec">
                    <div className="search hideinbd">
                        <form  action="">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#7A797D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 22L20 20" stroke="#7A797D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </form>
                    </div>
                    <div  onClick={()=>{setspanbg(!spanbg)}} className="uscre">
                        <span className={spanbg?'wbg':null}>User</span>
                        <span className={spanbg?null:'wbg'}>Creator</span>
                    </div>
                    <IconButton className='notif'>
                        <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3399 13.49L14.3399 11.83C14.1299 11.46 13.9399 10.76 13.9399 10.35V7.82C13.9399 5.47 12.5599 3.44 10.5699 2.49C10.0499 1.57 9.08994 1 7.98994 1C6.89994 1 5.91994 1.59 5.39994 2.52C3.44994 3.49 2.09994 5.5 2.09994 7.82V10.35C2.09994 10.76 1.90994 11.46 1.69994 11.82L0.689943 13.49C0.289943 14.16 0.199943 14.9 0.449943 15.58C0.689943 16.25 1.25994 16.77 1.99994 17.02C3.93994 17.68 5.97994 18 8.01994 18C10.0599 18 12.0999 17.68 14.0399 17.03C14.7399 16.8 15.2799 16.27 15.5399 15.58C15.7999 14.89 15.7299 14.13 15.3399 13.49Z" fill="#7A797D" />
                            <path d="M10.8301 19.01C10.4101 20.17 9.30005 21 8.00005 21C7.21005 21 6.43005 20.68 5.88005 20.11C5.56005 19.81 5.32005 19.41 5.18005 19C5.31005 19.02 5.44005 19.03 5.58005 19.05C5.81005 19.08 6.05005 19.11 6.29005 19.13C6.86005 19.18 7.44005 19.21 8.02005 19.21C8.59005 19.21 9.16005 19.18 9.72005 19.13C9.93005 19.11 10.1401 19.1 10.3401 19.07C10.5001 19.05 10.6601 19.03 10.8301 19.01Z" fill="#7A797D" />
                            <circle cx="13" cy="4" r="3.5" fill="#FC8B23" stroke="white" />
                        </svg>
                    </IconButton>

                    <div onClick={() => { setshow(!show) }} className="user">
                        <img src="https://i.pravatar.cc/300" alt="" />
                        {
                            show ? <div className="profileoption">
                                <ul>
                                    <Link to='/user/imsuresh'> <li>My Account</li></Link>
                                    <Link to='/settings/notification'><li>Preference</li></Link>
                                    <Link to='/settings'> <li>Settings</li></Link>
                                    <li onClick={() => { navigate('/start?Loggedout_&&LoC%a7IoIVxZ_NM|M{s:a7IoIVxZ_NM|M{s:%hRjWAo0') 
                                    localStorage.setItem("Login",'false')
                                    }} >Log out</li>
                                </ul>
                            </div> : null
                        }
                    </div>

                    <div onClick={() => { setmenushow(!menushow) }} className="menuicon">
                        <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 7.91667H18.75V11.0833H0V7.91667ZM0 0H25V3.16667H0V0ZM0 19H11.3047V15.8333H0V19Z" fill="" />
                        </svg>
                    </div>

                </div>
            </div >


            <div id={menushow ? 'mobilemenubgshow' : null} className="sml mobilemenubg"> <div className='navbar mobilemenu'>
                <div className="logo">
                    <Logo />
                    <svg onClick={() => { setmenushow(!menushow) }} className='closemenu' width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.18 0L14 11.18L2.82 0L0 2.82L11.18 14L0 25.18L2.82 28L14 16.82L25.18 28L28 25.18L16.82 14L28 2.82L25.18 0Z" fill="" />
                    </svg>

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

                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/active-bids'>
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
                            <input type="checkbox" name="" id="theme" />

                            <label htmlFor="theme">

                                <li className='flx20gap' onClick={() => { setstate(!state) }}>


                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.354 15.354C18.7172 16.0122 16.9231 16.1748 15.1946 15.8217C13.4662 15.4686 11.8796 14.6153 10.6322 13.3678C9.38472 12.1204 8.53139 10.5338 8.17827 8.80535C7.82514 7.0769 7.98779 5.28277 8.64599 3.646C6.7077 4.42673 5.10135 5.85739 4.10232 7.69272C3.10328 9.52805 2.77378 11.6537 3.17031 13.7054C3.56683 15.757 4.66467 17.6069 6.27565 18.9378C7.88662 20.2687 9.91037 20.9977 12 21C13.7969 21.0001 15.5527 20.4624 17.0415 19.4562C18.5303 18.45 19.684 17.0213 20.354 15.354Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M20.9807 12.5891C21.0638 11.3226 20.878 10.0528 20.4357 8.86319C19.9933 7.67354 19.3043 6.59091 18.4139 5.68638C17.5235 4.78185 16.4519 4.07588 15.2694 3.61482C14.0868 3.15375 12.8202 2.94802 11.5525 3.01113" stroke="" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    Light Mode
                                    <span id={state ? 'light_theme' : 'dark_theme'} className='theme_btn'>
                                    </span>
                                </li></label>
                        </div>
                    </ul>
                </div>
            </div>
            </div>
        </>
    )
}

export default TopNav
