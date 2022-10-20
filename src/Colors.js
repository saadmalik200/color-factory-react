import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddColor from "./pages/AddColor";
import SingleColor from "./pages/SingleColor";

function Colors() {
  const [selectColor, setSelectColor] = useState([
    { colorName: "red", value: "#FF0000" },
    { colorName: "green", value: "#00FF00" },
    { colorName: "blue", value: "#0000FF" },
  ]);
  // console.log("from colors js", selectColor);
  return (
    <Routes>
      <Route path="/colors" element={<HomePage selectColor={selectColor} />} />
      <Route
        path="/colors/new"
        element={
          <AddColor selectColor={selectColor} setSelectColor={setSelectColor} />
        }
      />
      <Route
        path="/colors/:colorname"
        element={<SingleColor selectColor={selectColor} />}
      />
      <Route path="*" element={<HomePage selectColor={selectColor} />} />
    </Routes>
  );
}

export default Colors;
