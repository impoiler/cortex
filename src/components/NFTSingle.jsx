import { Button } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const NFTSingle = (props) => {
    const eth = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M9.88045 13.2201L9.99872 13.3372L15.4137 10.1623L9.99872 1.25L9.88045 1.64877V13.2201Z" fill="#343434" /> <path d="M9.99829 13.3373V1.25L4.58333 10.1623L9.99829 13.3373Z" fill="#8C8C8C" /> <path d="M9.93172 18.557L9.99837 18.75L15.4166 11.181L9.99841 14.3544L9.93176 14.435L9.93172 18.557Z" fill="#3C3C3B" /> <path d="M4.58333 11.1809L9.99829 18.75V14.3543L4.58333 11.1809Z" fill="#8C8C8C" /> <path d="M9.99789 7.72089V13.3372L15.4128 10.1623L9.99789 7.72089Z" fill="#141414" /> <path d="M9.99821 7.72089L4.58333 10.1622L9.99821 13.3372V7.72089Z" fill="#393939" /> </svg>
    );

    return (
        <>
            <div key={props.rmd} className="product_box">
                <div className="imgbox">
                    <LazyLoadImage
                        effect="blur"
                        className="prod_img"
                        src={props.nftimg}
                        alt=""
                    />
                    <Button className="placebidbtn">Place a Bid</Button>
                </div>
                <div className="flxspbt">
                    <h2 className="prod_name">Art #{props.name.substr(0, 3)}</h2>
                    <p className="likes">{props.likes} Likes</p>
                </div>
                <Link to={"/user/" + props.username}>
                    <div className="author">
                        <LazyLoadImage
                            effect="blur"
                            className="author_img"
                            src={props.imgurl}
                            alt=""
                        />
                        <p className="author_name">{props.username}</p>
                    </div>
                </Link>
                <div className="price flxspbt">
                    <h3>Current Bid</h3>
                    <div className="pricetag">
                        {eth}
                        <p>{props.price.toFixed(2)}</p>
                        <span>ETH</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NFTSingle;
