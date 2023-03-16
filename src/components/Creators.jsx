import axios from "axios";
import React, { useEffect, useState } from "react";
import Creatorloader from "../Loaders/Creatorloader";
import Creator from "./Creator";

const Creators = () => {
  const [state, setstate] = useState([]);
  const [loading, setloading] = useState(true);

  const getdata = () => {
    axios
      .get("https://randomuser.me/api?results=8")
      .then((Response) => {
        setstate(Response.data.results);
        setloading(false);
      })
      .catch(Error);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <h2 className="heading">Top Creator</h2>

      {loading ? (
        <>
          <Creatorloader />
          <Creatorloader />
          <Creatorloader />
          <Creatorloader />
          <Creatorloader />
          <Creatorloader />
        </>
      ) : (
        state.map((e, i) => (
          <Creator
            key={i}
            imgurl={e.picture.large}
            name={e.name.first + e.name.last}
            username={e.name.first}
          />
        ))
      )}
    </>
  );
};

export default Creators;
