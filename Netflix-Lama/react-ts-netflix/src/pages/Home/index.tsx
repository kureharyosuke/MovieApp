import React from "react";
import "./index.scss";
import Navbar from "../../components/Navbar";
import Featured from "../../components/Featured";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured />
    </div>
  );
}
