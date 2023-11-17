import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import {filterData} from "./data"
import Cards from "./components/Cards";

const App = () => {
  return (
    <div className="m-0 p-0 box-border bg-[#33b644] pb-4">
      <Header />
      <Navbar filterData={filterData}/>
      <Cards/>
    </div>
  );
};

export default App;
