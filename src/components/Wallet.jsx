import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Devider from "./Devider";
import Mobilemenu from "./Mobilemenu";
import Navbar from "./Navbar";
import NFT4S from "./NFT4S";

const Wallet = () => {
  const [show, setshow] = useState(false);

  const eth = (
    <svg width="" height="" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M9.88045 13.2201L9.99872 13.3372L15.4137 10.1623L9.99872 1.25L9.88045 1.64877V13.2201Z" fill="#343434" ></path> <path d="M9.99829 13.3373V1.25L4.58333 10.1623L9.99829 13.3373Z" fill="#8C8C8C" ></path> <path d="M9.93172 18.557L9.99837 18.75L15.4166 11.181L9.99841 14.3544L9.93176 14.435L9.93172 18.557Z" fill="#3C3C3B" ></path> <path d="M4.58333 11.1809L9.99829 18.75V14.3543L4.58333 11.1809Z" fill="#8C8C8C" ></path> <path d="M9.99789 7.72089V13.3372L15.4128 10.1623L9.99789 7.72089Z" fill="#141414" ></path> <path d="M9.99821 7.72089L4.58333 10.1622L9.99821 13.3372V7.72089Z" fill="#393939" ></path> </svg>
  );

  useEffect(() => {
    document.title = "Your Wallet | Cortex";
  }, []);

  return (
    <>
      <div id={show ? "showoverlay" : "hideoverlay"} className="overlay">
        <div
          onClick={() => {
            setshow(!show);
          }}
          className="closeoverlay"
        ></div>
        <div className="overlay_box">
          <div className="closebtn">
            <Button
              onClick={() => {
                setshow(!show);
              }}
            >
              <CloseIcon />
            </Button>
          </div>

          <h2>Add Funds to your Account</h2>

          <form className="addamou" action="">
            <input placeholder="0.0 $" type="number" />
            <Button className="addnow" variant="outlined">
              Go to Payment Page
            </Button>
          </form>

          <div className="payment_modes">
            <img
              src="https://ik.imagekit.io/Suresh/API/svg/discover_OF4Hr9KRR.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1657457962912"
              alt=""
            />
            <img
              src="https://ik.imagekit.io/Suresh/API/svg/mastercard_MQun5Kejia.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1657457963157"
              alt=""
            />
            <img
              src="https://ik.imagekit.io/Suresh/API/svg/visa_4sU01-9kt.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1657457964118"
              alt=""
            />
            <img
              src="https://ik.imagekit.io/Suresh/API/svg/paypal_CkQtR2ZEN.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1657457963683"
              alt=""
            />
            <img
              src="https://ik.imagekit.io/Suresh/API/svg/applepay_yO_ffgeGq.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1657457962007"
              alt=""
            />
            <img
              src="https://ik.imagekit.io/Suresh/API/svg/cash_pq0Zks6k8.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1657457962927"
              alt=""
            />
            <img
              src="https://ik.imagekit.io/Suresh/API/svg/amex_GRbfZHenN.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1657457961928"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flx flxcol">
        <Mobilemenu />
        <div className="sml">
          <Navbar />
        </div>
        <div className="bgc">
          <div className="flxspbt">
            <h2 className="heading">Your Wallet</h2>
          </div>
          <Devider />

          <div className="flx">
            <div className="bxo">
              <h3>Your Balance</h3>
              <br />
              <div className="amount">1,034.02</div>
              {eth}
              <div className="bgs">{eth}</div>
              <br />
              <Button
                onClick={() => {
                  setshow(true);
                }}
                className="btn"
                variant="outlined"
                startIcon={<AddIcon />}
              >
                Top Up Balance
              </Button>
            </div>
          </div>
          <Devider />
          <h2 className="heading">Your NFTs</h2>
          <Devider />
          <div className="grid3col">
            <NFT4S
              name="Lady cry #26365"
              price="12.06"
              imgurl="https://openseauserdata.com/files/faf799d1fff29ba3b4bb5e7817b870fa.gif"
            />
            <NFT4S
              name="Innocent ow #6533"
              price="12.06"
              imgurl="https://ik.imagekit.io/Suresh/API/1st.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657374308403"
            />
            <NFT4S
              name="Thug Owl #t45"
              price="12.06"
              imgurl="https://ik.imagekit.io/Suresh/API/2nd?ik-sdk-version=javascript-1.4.3&updatedAt=1657374324590"
            />
            <NFT4S
              name="Inten #545443"
              price="12.06"
              imgurl="https://ik.imagekit.io/Suresh/API/467dd34bc0bef1b4e8a92c7c869641d1_pZnC2xQAp.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657443368539"
            />
            <NFT4S
              name="Thug #65432"
              price="12.06"
              imgurl="https://ik.imagekit.io/Suresh/API/unnamed__2__EocHc02Ev.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657443460588"
            />
            <NFT4S
              name="Green Thug #6565"
              price="12.06"
              imgurl="https://ik.imagekit.io/Suresh/API/unnamed_AnXt761mS.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657443460684"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
