import axios from "axios";
import React, { useEffect, useState } from "react";
import NFTloader from "../Loaders/NFTloader";
import Devider from "./Devider";
import Mobilemenu from "./Mobilemenu";
import Navbar from "./Navbar";
import NFT4S from "./NFT4S";

const Favourite = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  const getdata = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&query=3d%20reenders&per_page=15&order_by=latest1`
      )
      .then((Response) => {
        setdata(Response.data.results);
        setloading(false);
      });
  };

  useEffect(() => {
    document.title = "Favourite | Cortex";
    getdata();
  }, []);

  return (
    <>
      <div className="flx flxcol">
        <Mobilemenu />
        <div className="sml">
          <Navbar />
        </div>
        <div className="bgc">
          <div className="flxspbt">
            <h2 className="heading">Your Favourite</h2>
          </div>
          <Devider />
          <div className="grid3col">
            {loading ? (
              <>
                <NFTloader />
                <NFTloader />
                <NFTloader />
                <NFTloader />
                <NFTloader />
                <NFTloader />
              </>
            ) : (
              data.map((e, i) => (
                <NFT4S
                  key={i}
                  fav="true"
                  price={e.width / 1231.65}
                  imgurl={e.urls.regular}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Favourite;
