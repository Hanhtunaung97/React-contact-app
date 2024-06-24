import React, { useState } from "react";
import {
  ButtonComponents,
  ContainerComponents,
  InputFormComponents,
} from "../components";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
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
          <h1 className=" font-heading text-xl md:text-3xl font-bold text-purple-700 text-center">
            Register Your Contact
          </h1>
          <form onSubmit={handleSubmit} className=" flex flex-col gap-y-5">
            <InputFormComponents
              onChange={handleInputChange}
              value={formData.name}
              type={"name"}
              name={"name"}
              label={"Enter UserName :"}
              placeholder="Your Name"
            />
            <InputFormComponents
              onChange={handleInputChange}
              value={formData.email}
              type={"email"}
              name={"email"}
              label={"Enter Your Email :"}
              placeholder="example@gamil.com"
            />
            <InputFormComponents
              onChange={handleInputChange}
              value={formData.password}
              type={"password"}
              name={"password"}
              label={"Password :"}
              placeholder="Password"
            />
            <InputFormComponents
              onChange={handleInputChange}
              value={formData.password_confirmation}
              type={"password"}
              name={"password_confirmation"}
              label={"Confirm Password :"}
              placeholder="Password Confirm"
            />
            <ButtonComponents type="submit">Register</ButtonComponents>
          </form>
        </div>
      </div>
    </ContainerComponents>
  );
};

export default RegisterPage;
