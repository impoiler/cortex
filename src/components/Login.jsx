import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { Button } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [authenticated, setauthenticated] = useState(false);

  const notify = () => toast.error("This method is currently unavailable");

  const notify2 = () => toast.error("Wrong Username or Password");

  const notifysuccess = () =>
    toast.success("login successfull , redirecting...");

  const navigate = useNavigate();

  const handleusername = (e) => {
    setusername(e.target.value);
  };

  const handlepassword = (e) => {
    setpassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "demo" && password === "demo") {
      notifysuccess();
      setauthenticated(true);
      setTimeout(() => {
        navigate("/");
        localStorage.setItem("Login", true);
      }, 2000);
    } else {
      notify2();
    }
  };

  const checkloggedin = () => {
    let islogeddin = localStorage.getItem("Login");

    if (islogeddin === "true") {
      navigate(
        "/?LoggedIn&&sdkjfhsdiuhfiuer33egida2ga3dk88zp8ow6t6wzh872fdt8ptqy1bqrx40l"
      );
    }
  };

  useEffect(() => {
    document.title = "Log in or Sign up | Cortex";
    checkloggedin();
  });

  return (
    <div className="loginpage">
      <div className="cir1"></div>
      <div className="cir2"></div>

      <div className="credbox">
        <h4>Use This</h4>
        <p>Username : demo</p>
        <p>Password : demo</p>
      </div>

      <div className="loginbox">
        <div className="llog">
          <Logo />
        </div>
        <h2>Login or Sign up</h2>
        <form>
          <input onChange={handleusername} placeholder="Username" type="text" />

          <input
            onChange={handlepassword}
            placeholder="Password"
            type="password"
          />

          {authenticated ? (
            <div className="loadingbtn"></div>
          ) : (
            <Button type="submit" onClick={handleSubmit} className="submit_btn">
              Submit
            </Button>
          )}
        </form>
        <h3>OR</h3>

        <div className="sociallogin">
          <Button onClick={notify}>
            {" "}
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.0962 15.4502C28.2497 16.2564 28.3333 17.0992 28.3333 17.9787C28.3333 24.8582 23.6348 29.75 16.5382 29.75C14.9244 29.7505 13.3262 29.4394 11.8351 28.8344C10.344 28.2294 8.9892 27.3424 7.84803 26.2242C6.70687 25.1059 5.80175 23.7783 5.18438 22.3171C4.56702 20.8559 4.24951 19.2898 4.25 17.7084C4.24951 16.1269 4.56702 14.5608 5.18438 13.0996C5.80175 11.6385 6.70687 10.3108 7.84803 9.19253C8.9892 8.07427 10.344 7.1873 11.8351 6.58232C13.3262 5.97734 14.9244 5.66621 16.5382 5.66669C19.8562 5.66669 22.6286 6.86303 24.7557 8.80555L21.2917 12.2001V12.1915C20.0022 10.9878 18.3657 10.3701 16.5382 10.3701C12.4837 10.3701 9.18825 13.7267 9.18825 17.701C9.18825 21.6741 12.4837 25.0381 16.5382 25.0381C20.2169 25.0381 22.721 22.9769 23.2353 20.1463H16.5382V15.4502H28.0974H28.0962Z"
                fill=""
              />
            </svg>
          </Button>
          <Button onClick={notify}>
            {" "}
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9791 29.7457V18.1347H22.8962L23.4784 13.5887H18.9791V10.693C18.9791 9.38116 19.3446 8.483 21.2273 8.483H23.613V4.42991C22.4522 4.30552 21.2855 4.24545 20.1181 4.25C16.6557 4.25 14.2786 6.36366 14.2786 10.2439V13.5802H10.387V18.1262H14.2871V29.7457H18.9791Z"
                fill=""
              />
            </svg>
          </Button>
          <Toaster position="bottom-right" />
        </div>
      </div>
    </div>
  );
};

export default Login;
