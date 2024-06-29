import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PreventComponents = ({ children, go, check }) => {
  const nav = useNavigate();
  useEffect(() => {
    if (check) {
      nav(go);
    }
  });
  return <div>{children}</div>;
};

export default PreventComponents;
