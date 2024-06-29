import React, { useState } from "react";
import { ButtonComponents, InputFormComponents } from "../components";

const ContactAddPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className=" w-2/5 h-auto space-y-5">
      <h1 className=" font-heading text-xl md:text-3xl font-bold text-purple-700 text-center">
        Create Your Contact
      </h1>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-y-5">
        <InputFormComponents
          onChange={handleInputChange}
          value={formData.name}
          type={"name"}
          name={"name"}
          label={"Name :"}
          placeholder="Your Name"
        />
        <InputFormComponents
          onChange={handleInputChange}
          value={formData.email}
          type={"email"}
          name={"email"}
          label={"Email :"}
          placeholder="example@gamil.com"
        />
        <InputFormComponents
          onChange={handleInputChange}
          value={formData.phone}
          type={"number"}
          name={"phone"}
          label={"Phone :"}
          placeholder="+95979....."
        />
        <InputFormComponents
          onChange={handleInputChange}
          value={formData.address}
          type={"text"}
          name={"address"}
          label={"Address :"}
          placeholder="Your address"
        />
        <ButtonComponents type="submit">Create</ButtonComponents>
      </form>
    </div>
  );
};

export default ContactAddPage;
