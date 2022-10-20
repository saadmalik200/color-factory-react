import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = ({ selectColor }) => {
  //   console.log("from homepage", selectColor);
  return (
    <div className="">
      <div className="gap-5 flex flex-col justify-center items-center  bg-black h-[20rem] text-white">
        <h3 className="text-[2rem]">Welcome to the color factory.</h3>
        <Link to="/colors/new">
          <h1 className="text-[3rem] border-b-2">Add a color</h1>
        </Link>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <p className="my-4">Please select a color.</p>
        {selectColor &&
          selectColor.map((item, i) => (
            <Link to={`/colors/${item.colorName}`} key={i}>
              <p className="underline">{item.colorName}</p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
