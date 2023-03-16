import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./components/Account";
import ActiveBids from "./components/Active_bids";
import Error from "./components/Error";
import Favourite from "./components/Favourite";
import History from "./components/History";
import Home from "./components/Home";
import Login from "./components/Login";
import Market from "./components/Market";
import Mobilemenu from "./components/Mobilemenu";
import Notification from "./components/Notification";
import Portfolio from "./components/Portfolio";
import Search from "./components/Search";
import Security from "./components/Security";
import Settings from "./components/Settings";
import User from "./components/User";
import Wallet from "./components/Wallet";
import "./styles/App.css";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/activebids" element={<ActiveBids />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/account" element={<Account />} />
          <Route path="/settings/notification" element={<Notification />} />
          <Route path="/settings/security" element={<Security />} />
          <Route path="/history" element={<History />} />
          <Route path="/user/:username" element={<User />} />
          <Route path="/start" element={<Login />} />
          <Route path="/menu" element={<Mobilemenu />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
