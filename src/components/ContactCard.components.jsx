import React from "react";
import ButtonComponents from "./Button.components";
import { useNavigate } from "react-router-dom";
import { CiEdit, CiTrash } from "react-icons/ci";

const ContactCardComponents = ({ data }) => {
  const nav = useNavigate();
  const handleRedirect = () => {
    nav(`/home/contact/${data.id}`);
  };
  return (
    <div className=" w-full shadow p-4 hover:bg-white hover:text-purple-500 hover:border-purple-400 flex items-center justify-between">
      <ButtonComponents
        onClick={handleRedirect}
        style={
          "!w-1/2 bg-purple-400  mx-0 hover:bg-white hover:text-purple-400 hover:border-purple-300 "
        }
      >
        <h1 className=" font-heading font-semibold">{data.name}</h1>
        <p>{data.phone}</p>
      </ButtonComponents>
      <div className="flex items-center gap-x-3">
        <ButtonComponents
          style={
            "!group w-auto duration-200 bg-purple-50  active:bg-purple-400  hover:bg-white hover:border-purple-400 group"
          }
        >
          <CiEdit className=" stroke-purple-500 stroke-2 group-active:stroke-purple-50 " />
        </ButtonComponents>
        <ButtonComponents
          style={
            "!group w-auto duration-200 bg-purple-50  active:bg-purple-400  hover:bg-white hover:border-purple-400 group"
          }
        >
          <CiTrash className=" stroke-purple-500 stroke-2 group-active:stroke-purple-50" />
        </ButtonComponents>
      </div>
    </div>
  );
};

export default ContactCardComponents;
