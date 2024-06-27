import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PreventComponents = ({ children, go }) => {
  const nav = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      nav(go);
    } else {
      nav("/");
    }
  });
  return <div>{children}</div>;
};

export default PreventComponents;
