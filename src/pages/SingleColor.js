import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleColor = ({ selectColor }) => {
  const { colorname } = useParams();
  const navigate = useNavigate();
  console.log(selectColor);

  const color = selectColor.filter((item) => item.colorName === colorname)[0];
  console.log("Color", color.value);

  return (
    <div
      className="flex justify-center h-screen items-center "
      style={{ backgroundColor: `${color.value}` }}
    >
      <div className="text-[3rem] text-center text-white">
        <p>THIS IS {colorname.toUpperCase()}</p>
        <p className="my-[10rem]">ISNT IT BEAUTIFUL?</p>
        <p className="underline" onClick={() => navigate("/colors")}>
          GO BACK
        </p>
      </div>
    </div>
  );
};

export default SingleColor;
