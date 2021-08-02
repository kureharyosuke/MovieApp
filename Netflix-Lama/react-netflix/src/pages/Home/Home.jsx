import React from "react";
import "./home.scss";
import { Navbar } from "../../components/Navbar/Navbar";
import { Featured } from "../../components/Featured/Featured";
// import { AcUnit } from "@material-ui/icons";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
    </div>
  );
};
