import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Bids = (props) => {
  const eth = (
    <svg
      width="30"
      height="30"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.88045 13.2201L9.99872 13.3372L15.4137 10.1623L9.99872 1.25L9.88045 1.64877V13.2201Z"
        fill="#343434"
      ></path>
      <path
        d="M9.99829 13.3373V1.25L4.58333 10.1623L9.99829 13.3373Z"
        fill="#8C8C8C"
      ></path>
      <path
        d="M9.93172 18.557L9.99837 18.75L15.4166 11.181L9.99841 14.3544L9.93176 14.435L9.93172 18.557Z"
        fill="#3C3C3B"
      ></path>
      <path
        d="M4.58333 11.1809L9.99829 18.75V14.3543L4.58333 11.1809Z"
        fill="#8C8C8C"
      ></path>
      <path
        d="M9.99789 7.72089V13.3372L15.4128 10.1623L9.99789 7.72089Z"
        fill="#141414"
      ></path>
      <path
        d="M9.99821 7.72089L4.58333 10.1622L9.99821 13.3372V7.72089Z"
        fill="#393939"
      ></path>
    </svg>
  );

  return (
    <>
      <div className="bid_single">
        <LazyLoadImage
          effect="blur"
          className="bids_img"
          src={props.img}
          alt=""
        />
        <div className="md">
          <h2>Art # {props.title.substr(0, 5)}</h2>
          <h3>
            Transferred from <span>@ {props.username}</span> to{" "}
            <span>@{props.to}</span>
          </h3>
          <h4>{props.time}</h4>
        </div>
        <div className="lst">
          {eth}
          <h2>{props.price.toFixed(2)}</h2>
          <div id={props.staus > 2500 ? "redbg" : "greenbg"} className="status">
            <p>{props.staus > 2500 ? "Completed" : "Processing"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bids;
