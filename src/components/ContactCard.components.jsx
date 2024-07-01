import React from "react";
import ButtonComponents from "./Button.components";

const ContactCardComponents = ({ data }) => {
  return (
    <ButtonComponents style={"!active:scale-95 active:shadow hover:bg-purple-600"}>
      <h1 className=" font-heading font-semibold">{data.name}</h1>
      <p>{data.phone}</p>
    </ButtonComponents>
  );
};

export default ContactCardComponents;
