import React, { useEffect, useState } from "react";
import {
  ButtonComponents,
  ContainerComponents,
  InputFormComponents,
  LoadingComponents,
  ErrorComponents,
  PreventComponents,
} from "../components";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../store/services/endpoints/auth.endpoints";
// import useApi from "../hook/useApi";
// import { Login } from "../service/auth.service";
// import { useDispatch, useSelector } from "react-redux";
// import { loginAction } from "../store/action/auth.action";
// import { issue, login, processing } from "../store/slice/auth.slice";

const LoginPage = () => {
  const [loginFun, { isLoading, isError, data, isSuccess }] =
    useLoginMutation();
  console.log(isLoading, isError, data, isSuccess);
  // const { loading, data, error, auth } = useSelector((store) => store.auth);
  // const dispatch = useDispatch();
  // const { dealingApi, loading, error, data } = useApi(Login);
  const nav = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginFun(formData);
    if (res) {
      localStorage.setItem("auth", JSON.stringify(res.data.token));
    }
    // dispatch(processing());
    // const res = await Login(formData);
    // if (res.data) {
    //   dispatch(login(res.data));
    // } else {
    //   dispatch(issue(res.msg));
    // }
    // loginAction(dispatch,formData)
    // dealingApi(formData);
    // console.log(formData);
  };
  useEffect(() => {
    data && nav("/home");
  }, [data]);
  // console.log(loading, error, data);
  return (
    <PreventComponents go={"/home"} check={localStorage.getItem("auth")}>
      <ContainerComponents>
        {isLoading ? (
          <LoadingComponents />
        ) : (
          <div className="Center">
            <div className=" w-2/5 h-auto space-y-5">
              <h1 className=" text-purple-500 font-bold text-xl md:text-3xl font-heading text-center">
                Login Your Contact
              </h1>
              {isError && <ErrorComponents>{isError.message}</ErrorComponents>}
              <form onSubmit={handleSubmit} className=" flex flex-col gap-y-5">
                <InputFormComponents
                  onChange={handleInputChange}
                  value={formData.email}
                  type={"email"}
                  name={"email"}
                  label={"Enter Your Email :"}
                  placeholder="example@gmail.com"
                />
                <InputFormComponents
                  onChange={handleInputChange}
                  value={formData.password}
                  type={"password"}
                  name={"password"}
                  label={"Password :"}
                  placeholder="password"
                />
                <ButtonComponents type="submit">Login</ButtonComponents>
              </form>
              <p className=" text-purple-500 font-heading">
                You haven't account yet ! plz sign up{" "}
                <button
                  onClick={() => nav("/register")}
                  className=" underline active:underline-offset-4 duration-300 font-semibold active:scale-90"
                >
                  Register
                </button>
              </p>
            </div>
          </div>
        )}
      </ContainerComponents>
    </PreventComponents>
  );
};

export default LoginPage;
