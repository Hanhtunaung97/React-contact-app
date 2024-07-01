import { api } from "./api";

export const getContactData = async () => {
  try {
    const res = await api.get("/contact");
    console.log(res);
    if (res.data) {
      const contactData = res.data.contacts.data;
      return contactData;
    }
  } catch (error) {
    return { error: true, msg: error.message };
  }
};
