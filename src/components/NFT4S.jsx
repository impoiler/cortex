import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Button, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

const NFT4S = (props) => {
  const [fav, setfav] = useState(true);

  const eth = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M9.88045 13.2201L9.99872 13.3372L15.4137 10.1623L9.99872 1.25L9.88045 1.64877V13.2201Z" fill="#343434" /> <path d="M9.99829 13.3373V1.25L4.58333 10.1623L9.99829 13.3373Z" fill="#8C8C8C" /> <path d="M9.93172 18.557L9.99837 18.75L15.4166 11.181L9.99841 14.3544L9.93176 14.435L9.93172 18.557Z" fill="#3C3C3B" /> <path d="M4.58333 11.1809L9.99829 18.75V14.3543L4.58333 11.1809Z" fill="#8C8C8C" /> <path d="M9.99789 7.72089V13.3372L15.4128 10.1623L9.99789 7.72089Z" fill="#141414" /> <path d="M9.99821 7.72089L4.58333 10.1622L9.99821 13.3372V7.72089Z" fill="#393939" /> </svg>
  );

  return (
    <>
      <div
        ke={props.key}
        id={fav ? null : "hide"}
        className="product_box wide_product_box"
      >
        <div
          id={fav ? "fav_yes" : null}
          onClick={() => {
            setfav(!fav);
          }}
          className="fav"
        >
          {props.fav === "true" ? (
            <IconButton aria-label="Fav">
              <FavoriteIcon />
            </IconButton>
          ) : null}
        </div>
        <div className="imgbox">
          <LazyLoadImage
            effect="blur"
            className="prod_img"
            src={props.imgurl}
            alt=""
          />
          <Button className="placebidbtn">View Details</Button>
        </div>
        <div className="flxspbt">
          <h2 className="prod_name">{props.name}</h2>
        </div>
        <Link to="/user/imsuresh">
          <div className="author">
            <LazyLoadImage
              effect="blur"
              className="author_img"
              src="https://ik.imagekit.io/Suresh/API/Suresh_iucqqMp4l.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657442783423"
              alt=""
            />
            <p className="author_name">@Suresh</p>
          </div>
        </Link>
        <div className="price flxspbt">
          <h3>Price</h3>
          <div className="pricetag">
            {eth}
            <p>{props.price}</p>
            <span>ETH</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NFT4S;
