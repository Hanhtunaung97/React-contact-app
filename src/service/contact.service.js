import { api } from "./api";

export const getContactData = async () => {
  try {
    const res = await api.get("/contact");
    // console.log(res);
    if (res.data) {
      const contactData = res.data.contacts.data;
      return contactData;
    }
  } catch (error) {
    return { error: true, msg: error.message };
  }
};

export const getSingleContactData = async (id) => {
  try {
    const res = await api.get(`/contact/${id}`);
    console.log(res);
    if (res.data) {
      const singleContact = res.data.contact;
      return singleContact;
    }
  } catch (error) {
    return { error: true, msg: error.message };
  }
};

export const addNewContact = async (newData) => {
  try {
    const res = await api.post("/contact", newData);
    // console.log(res);
    if (res.data) {
      return res.data.success;
    }
  } catch (error) {
    return { error: true, msg: res.message };
  }
};

export const updateContact = async (id, putData) => {
  try {
    const res = await api.put(`/contact/${id}`, putData);
    console.log(res);
    if (res.data) {
      return res.data.success;
    }
  } catch (error) {
    return { error: true, msg: error.message };
  }
};

export const deleteContactData = async (id) => {
  try {
    const res = await api.delete(`/contact/${id}`);
    console.log(res);
    if (res.data) {
      return res.data.success;
    }
  } catch (error) {
    return { error: true, msg: error.message };
  }
};
