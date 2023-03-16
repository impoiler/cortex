import axios from "axios";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link, useParams } from "react-router-dom";
import NFTloader from "../Loaders/NFTloader";
import Profileloader from "../Loaders/Profileloader";
import Devider from "./Devider";
import NFT4S from "./NFT4S";

const User = () => {
  const [state, setstate] = useState({});
  const [photos, setphoto] = useState({});
  const [fstloading, setfstloading] = useState(true);
  const [loading, setloading] = useState(true);
  const { username } = useParams();

  const fetchdata = () => {
    axios
      .get(
        `https://api.unsplash.com/users/${username}/?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&per_page=10`
      )
      .then((Response) => {
        setstate(Response.data);
        setfstloading(false);
      });
  };

  const getphotos = () => {
    axios
      .get(
        `https://api.unsplash.com/users/${username}/photos?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&per_page=10`
      )
      .then((Response) => {
        setphoto(Response.data);
        setloading(false);
      });
  };

  useEffect(() => {
    document.title = username + " ! Cortex";
    fetchdata();
    getphotos();
  });

  return (
    <>
      <div className="userpage">
        <Link to="/">
          <div className="goback">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M0.738432 9.738C0.851437 9.622 1.27813 9.126 1.6756 8.718C4.00585 6.152 10.0848 1.952 13.2664 0.67C13.7496 0.464 14.9713 0.028 15.624 0C16.2494 0 16.8456 0.144 17.4145 0.436C18.1237 0.844 18.6926 1.486 19.0044 2.244C19.2051 2.77 19.5168 4.344 19.5168 4.372C19.8285 6.094 20 8.892 20 11.984C20 14.93 19.8285 17.614 19.5733 19.362C19.5441 19.39 19.2323 21.346 18.8914 22.016C18.266 23.24 17.0443 24 15.737 24H15.624C14.7725 23.97 12.982 23.21 12.982 23.182C9.97175 21.898 4.03312 17.904 1.64637 15.25C1.64637 15.25 0.974184 14.568 0.681929 14.142C0.226011 13.53 0 12.772 0 12.014C0 11.168 0.255236 10.38 0.738432 9.738Z" fill="#747475" /> </svg>
            Go Back
          </div>
        </Link>

        {fstloading ? (
          <Profileloader />
        ) : (
          <div className="userinfo">
            <div className="userbanner">
              <LazyLoadImage effect="blur" src={ state.photos === undefined ? null : state.photos[0] === undefined ? "https://images.unsplash.com/photo-1620353089115-0e8e8e603ae9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80" : state.photos[0].urls.regular } alt="" />
            </div>
            <div className="user_profile">
              <div className="profile_photo">
                <LazyLoadImage
                  effect="blur"
                  src={
                    state.profile_image === undefined
                      ? null
                      : state.profile_image.large
                  }
                  alt=""
                />
              </div>
              <div className="user_details">
                <h2>{state.name}</h2>
                <h3>{username}</h3>
                <p>{state.bio}</p>
              </div>
              <div className="user_stats">
                <h2>
                  {state.followers_count} <span>Followers</span>
                </h2>
                <h2>
                  {state.following_count} <span>Following</span>
                </h2>
              </div>
            </div>
          </div>
        )}

        <Devider />
        <Devider />
        <Devider />
        <h2 className="Collections_heading">Collections</h2>
        <Devider />
        <Devider />
        <Devider />

        {photos.length === 0 ? (
          <h2 className="nocolfound">0 Collections</h2>
        ) : (
          <div className="collection grid4col">
            {loading ? (
              <>
                <NFTloader />
                <NFTloader />
                <NFTloader />
                <NFTloader />
              </>
            ) : photos.map === undefined ? null : (
              photos.map((e, i) => (
                <>
                  <NFT4S key={i} name={e.id} imgurl={e.urls.small} />
                </>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default User;
