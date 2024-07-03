import React, { useEffect, useState } from "react";
import { ButtonComponents, InputFormComponents } from "../components";
import { addNewContact, updateContact } from "../service/contact.service";
import { useLocation, useNavigate } from "react-router-dom";

const ContactAddPage = () => {
  const nav = useNavigate();
  const location = useLocation();
  // console.log(location);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    if (location.state?.edit) {
      const { name, phone, email, address } = location.state.data;
      setFormData({ name, phone, email, address });
    }
  }, [location]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    let res;
    if (location.state?.edit) {
      res = await updateContact(location.state.id, formData);
    } else {
      res = await addNewContact(formData);
    }
    // console.log(res);
    if (res) {
      nav("/home");
    }
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
