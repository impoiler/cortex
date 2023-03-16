import { Button } from "@mui/material";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import Devider from "./Devider";
import Mobilemenu from "./Mobilemenu";
import Navbar from "./Navbar";
import SettingNav from "./Setting_nav";

const Account = () => {
  const handlesubmit = (e) => {
    e.preventDefault();
    toast("Saved Succuesfulluy");
  };

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
          <div className="profile">
            <div className="name">
              <form onSubmit={handlesubmit} action="">
                <input type="text" value={"Suresh Chaudhary"} />
                <textarea
                  type="text"
                  value={
                    "Hello People of the internet , I am Suresh a Front-end Web Developer"
                  }
                />
                <Button variant="contained" type="submit">
                  Submit
                </Button>
                <Toaster position="bottom-right" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
