import React, { useEffect } from "react";
import Devider from "./Devider";
import Mobilemenu from "./Mobilemenu";
import Navbar from "./Navbar";
import NFT4S from "./NFT4S";

const Portfolio = () => {

  useEffect(() => {
    document.title = "Portfolio | Cortex";
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
            <h2 className="heading">Portfolio</h2>
          </div>
          <Devider />

          <div className="grid3col">
            <NFT4S
              name="Alek_Common_1925"
              price="0.075"
              imgurl="https://ik.imagekit.io/Suresh/API/c7e606afc45e7688972918477e6eb8bb_A31nnIcMo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657517546833"
            />

            <NFT4S
              name="Mr. me"
              price="0.075"
              imgurl="https://ik.imagekit.io/Suresh/API/QmZJLoQKNf5s2Lt8DSkdpvKZfqHzCaDCaqzMnBMuR38ib9_Y4wII5IFP.avif?ik-sdk-version=javascript-1.4.3&updatedAt=1657517730684"
            />

            <NFT4S
              name="Lord_Shiva"
              price="0.075"
              imgurl="https://ik.imagekit.io/Suresh/API/QmP8VJ5XtfXbYtJJVSW5DHvhy8D2WBuzNQYeH5L9qBqa2T_LPVof1XBE.avif?ik-sdk-version=javascript-1.4.3&updatedAt=1657517654503"
            />

            <NFT4S
              name="BAATEIN "
              price="0.075"
              imgurl="https://ik.imagekit.io/Suresh/API/Tiger22_BrsZGkXIQ.avif?ik-sdk-version=javascript-1.4.3&updatedAt=1657517730559"
            />

            <NFT4S
              name="1657517654338"
              price="0.075"
              imgurl="https://ik.imagekit.io/Suresh/API/QmeKu6cFeGh9o89esUsizJHW2XPV2g5DdNaWHrzz5sQbZs_Y7oV4fqt_Y.avif?ik-sdk-version=javascript-1.4.3&updatedAt=1657517654338"
            />

            <NFT4S
              name="Alive ?"
              price="0.075"
              imgurl="https://ik.imagekit.io/Suresh/API/QmcdGk35sXjnXKGgFJAoM7ggsWDx6JqwJdLxcseB4fqJok_gaaLc8Q9d.avif?ik-sdk-version=javascript-1.4.3&updatedAt=1657517832757"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
