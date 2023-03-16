import Button from "@mui/material/Button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NFTloader from "../Loaders/NFTloader";
import Creators from "./Creators";
import Devider from "./Devider";
import NFTSingle from "./NFTSingle";

const NFT = () => {
    const [data, setdata] = useState([]);
    const [count, setcount] = useState(4);
    const [loading, setloading] = useState(true);
    const [opt] = useState("3d%20render");

    const limiteddata = data.slice(0, count);

    useEffect(() => {
        axios
        .get(
            `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&query=${opt}&per_page=30&order_by=latest`
        )
        .then((Response) => {
            setdata(Response.data.results);
            setloading(false);
        });
    },[opt]);

    return (
        <>
            <div className="flx atop">
                <div className="w63">
                    <div className="flxspbt">
                        <h2 className="heading">Trending Auctions</h2>
                        <ul className="catag">
                            <Button>
                                <li>Art</li>
                            </Button>
                            <Button>
                                <li>Music</li>
                            </Button>
                            <Button>
                                <li>Collectibles</li>
                            </Button>
                            <Button>
                                <li>Utility</li>
                            </Button>
                        </ul>
                    </div>
                    <Devider />
                    <div className="product_container">
                        {loading ? (
                            <>
                                <NFTloader />
                                <NFTloader />
                                <NFTloader />
                                <NFTloader />
                            </>
                        ) : (
                            limiteddata.map((e, i) => (
                                <NFTSingle
                                    key={i}
                                    rnd={i}
                                    nftimg={e.urls.regular}
                                    name={e.id}
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
                                setcount(count + 4);
                            }}
                            variant="contained"
                        >
                            Load More
                        </Button>
                    </div>
                </div>
                <div className="w35 creators">
                    <Creators />
                </div>
            </div>
        </>
    );
};

export default NFT;
