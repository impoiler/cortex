// eslint-disable-next-line
import Button from "@mui/material/Button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import NFTloader from "../Loaders/NFTloader";
import Devider from "./Devider";
import Mobilemenu from "./Mobilemenu";
import Navbar from "./Navbar";
import NFTSingle from "./NFTSingle";
import TopNav from "./TopNav";

const Search = () => {
  const [data, setdata] = useState([]);
  const [count, setcount] = useState(2);
  const [loading, setloading] = useState(true);

  const { query } = useParams();

  const getdata = () => {
    if (query === undefined) {
      toast.error(`Search can't be Empty`);
    } else {
      axios
        .get(
          `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&query=${query}&per_page=30&page=${count}`
        )
        .then((Response) => {
          setdata(Response.data.results);
          setloading(false);
        });
    }
  };

  useEffect(() => {
    document.title = ` ${query} | Cortex`;
    getdata();
  }, [getdata,query]);

  return (
    <>
      <div className="flx flxcol">
        <Mobilemenu />
        <div className="sml">
          <Navbar />
        </div>
        <div className="bgc">
          <TopNav />
          {query === undefined ? (
            <div className="notfound">
              <p>Please Enter something to search</p>
            </div>
          ) : (
            <div className="sjdhjh5665">
              <div className="flxspbt" style={{ marginTop: "40px" }}>
                <h2 className="heading">
                  {query === undefined ? "Please Enter something" : query}
                </h2>
                <ul className="catag">
                  <Button>
                    <li>Art</li>
                  </Button>
                  <Button>
                    {" "}
                    <li>Music</li>
                  </Button>
                  <Button>
                    {" "}
                    <li>Collectibles</li>
                  </Button>
                  <Button>
                    {" "}
                    <li>Utility</li>
                  </Button>
                </ul>
              </div>
              <Devider />
              <div className="product_container marketpage search">
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
                    <NFTSingle
                      key={i}
                      nftimg={e.urls.regular}
                      name={e.id}
                      Key={i}
                      imgurl={
                        e.user.profile_image === undefined
                          ? null
                          : e.user.profile_image.medium
                      }
                      price={e.user.total_photos / 15}
                      likes={e.likes}
                      username={e.user.username}
                    />
                  ))
                )}
                <Button
                  className="loadmore"
                  onClick={() => {
                    setcount(count + 1);
                    getdata();
                    setloading(true);
                  }}
                  variant="contained"
                >
                  Load More
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Toaster position="bottmo right" />
    </>
  );
};

export default Search;
