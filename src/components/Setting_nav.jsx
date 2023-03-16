import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Setting_nav = () => {
  return (
    <>
      <div className="flx setting_menu">
        <ul className="flx flxgap30">
          <Button>
            <Link to="/settings/account">
              <li>Account</li>
            </Link>
          </Button>
          <Button>
            <Link to="/settings/notification">
              <li>Notification</li>
            </Link>
          </Button>
          <Button>
            <Link to="/settings/security">
              <li>Security</li>
            </Link>
          </Button>
        </ul>
      </div>
    </>
  );
};

export default Setting_nav;
