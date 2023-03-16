import React from "react";
import SettingNav from "./Setting_nav";
import Devider from "./Devider";
import Navbar from "./Navbar";
import Mobilemenu from "./Mobilemenu";

const Notification = () => {
  return (
    <>
      <div className="flx flxcol">
        <Mobilemenu />
        <div className="sml">
          <Navbar />
        </div>
        <div className="bgc">
          <div className="flxspbt">
            <h2 className="heading">Settings</h2>
          </div>
          <Devider />
          <SettingNav />
          <Devider />
          <div className="notif w50">
            <div className="flxspbt w100">
              <h3>Email Notification</h3>
              <input id="checkbox" type="checkbox" />
              <label htmlFor="checkbox"></label>
            </div>
            <div className="flxspbt w100">
              <h3>Sale And Offer</h3>
              <input id="checkbox2" type="checkbox" />
              <label htmlFor="checkbox2"></label>
            </div>
            <div className="flxspbt w100">
              <h3>Account Updates</h3>
              <input id="checkbox3" type="checkbox" />
              <label htmlFor="checkbox3"></label>
            </div>
            <div className="flxspbt w100">
              <h3>Billing</h3>
              <input id="checkbox4" type="checkbox" />
              <label htmlFor="checkbox4"></label>
            </div>
            <div className="flxspbt w100">
              <h3>Monitoring </h3>
              <input id="checkbox5" type="checkbox" />
              <label htmlFor="checkbox5"></label>
            </div>
            <div className="flxspbt w100">
              <h3>New Message</h3>
              <input id="checkbox6" type="checkbox" />
              <label htmlFor="checkbox6"></label>
            </div>
            <div className="flxspbt w100">
              <h3>Featured NFTs</h3>
              <input id="checkbox7" type="checkbox" />
              <label htmlFor="checkbox7"></label>
            </div>
            <div className="flxspbt w100">
              <h3>Likes</h3>
              <input id="checkbox8" type="checkbox" />
              <label htmlFor="checkbox8"></label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
