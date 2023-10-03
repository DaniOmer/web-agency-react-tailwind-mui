import React from "react";
import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setLanguage,
  setSwitchLanguage,
} from "../../redux/language/languageSlice";

export default function CustomSwitch() {
  const dispatch = useDispatch();

  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const switchLanguage = useSelector((state) => state.language.switchLanguage);

  const handleCustomSwitchClick = async () => {
    dispatch(setSwitchLanguage(switchLanguage ? false : true));
    dispatch(setLanguage(currentLanguage === "en" ? "fr" : "en"));
  };

  return (
    <div
      className="flex border-2 border-black rounded-3xl relative cursor-pointer dark:border-blue-600"
      onClick={handleCustomSwitchClick}
    >
      <span
        className="absolute top-0 h-full w-1/2 bg-black dark:bg-slate-800"
        style={{
          top: "0",
          right: switchLanguage ? "0" : "50%",
          left: switchLanguage ? "50%" : "0",
          borderRadius: "50%",
          transition: "0.3s",
          zIndex: "2",
        }}
      ></span>
      <span
        style={{
          display: "block",
          padding: "5px 8px",
          zIndex: "10",
          color: switchLanguage ? "black" : "white",
          transition: "0.3s",
        }}
      >
        En
      </span>
      <span
        style={{
          display: "block",
          padding: "5px 8px",
          zIndex: "10",
          color: switchLanguage ? "white" : "black",
          transition: "0.3s",
        }}
      >
        Fr
      </span>
    </div>
  );
}
