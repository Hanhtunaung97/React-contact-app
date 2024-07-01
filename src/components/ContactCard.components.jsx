import React from "react";
import ButtonComponents from "./Button.components";
import { useNavigate } from "react-router-dom";

const ContactCardComponents = ({ data }) => {
    const nav=useNavigate();
    const handleRedirect=() => {
        nav(`/home/contact/${data.id}`)
    }
  return (
    <ButtonComponents onClick={handleRedirect} style={"!active:scale-95 active:shadow hover:bg-purple-600"}>
      <h1 className=" font-heading font-semibold">{data.name}</h1>
      <p>{data.phone}</p>
    </ButtonComponents>
  );
};

export default ContactCardComponents;
