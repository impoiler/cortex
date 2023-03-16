import Button from "@mui/material/Button";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Creator = (props) => {
  const [state, setstate] = useState(true);

  return (
    <>
      <div className="creator_single">
        <div className="flx gap20">
          <LazyLoadImage
            effect="blur"
            className="creator_img"
            src={props.imgurl}
            alt=""
          />
          <div className="creator_name">
            <h2>{props.name}</h2>
            <h3>@{props.username}</h3>
          </div>
        </div>
        <div className="follow">
          <Button
            className={state ? "Follow" : "Following"}
            onClick={() => {
              setstate(!state);
            }}
          >
            {state ? "Follow" : "Following"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Creator;
