import React from "react";

const NavComponents = ({ children }) => {
  return (
    <nav className=" py-3 px-2 border shadow mb-10 fixed w-full bg-white">
      <div className=" container mx-auto flex justify-between items-center">
        <h1 className=" font-heading text-xl font-semibold text-purple-600">Contact App</h1>
        {children}</div>
    </nav>
  );
};

export default NavComponents;
