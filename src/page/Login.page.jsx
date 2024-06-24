import React, { useState } from "react";
import {
  ButtonComponents,
  ContainerComponents,
  InputFormComponents,
} from "../components";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <ContainerComponents>
      <div className="Center">
        <div className=" w-2/6 h-auto space-y-7">
          <h1 className=" text-purple-500 font-bold text-xl md:text-3xl font-heading text-center">
            Login Your Contact
          </h1>
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
        </div>
      </div>
    </ContainerComponents>
  );
};

export default LoginPage;
