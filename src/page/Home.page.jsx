import React from "react";
import { ButtonComponents, PreventComponents } from "../components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../store/action/auth.action";

const HomePage = () => {
  const store=useSelector((store) =>store.auth )
  const dispatch=useDispatch()
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    nav("/");
    logoutAction(dispatch)
  };
  return (
    <PreventComponents go={"/"} check={!localStorage.getItem("auth")}>
      <div>
        HomePage
        <div className="Center">
          <ButtonComponents
            onClick={handleLogout}
            style={
              "! bg-white border-red-500 w-auto text-red-500 duration-200 active:text-white active:bg-red-500 active:scale-90"
            }
          >
            Logout
          </ButtonComponents>
        </div>
      </div>
     </PreventComponents>
  );
};

export default HomePage;
