import React from 'react'
import SettingNav from './Setting_nav';
import Devider from './Devider';
import Navbar from './Navbar';
import Mobilemenu from './Mobilemenu';

const Security = () => {


    return (
        <>
            <div className="flx flxcol">
                <Mobilemenu />
                <div className="sml">
                    <Navbar />
                </div>
                <div className="bgc">
                    <div className="flxspbt">
                        <h2 className='heading'>Settings</h2>
                    </div>
                    <Devider />
                    <SettingNav />
                    <Devider />
                    <div className="notif w50">
                        <div className="flxspbt w100">
                            <h3>2FA</h3>
                            <input id='checkbox' type="checkbox" />
                            <label htmlFor="checkbox">
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Security
