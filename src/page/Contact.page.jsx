import React, { useEffect, useState } from "react";
import { getContactData } from "../service/contact.service";
import { ContactCardComponents, LoadingComponents } from "../components";
import ErrorComponents from "../components/Error.components";

const ContactPage = () => {
  const [items, setItems] = useState({
    loading: true,
    data: null,
    error: null,
  });
  useEffect(() => {
    (async () => {
      setItems((pre) => ({ ...pre, loading: true }));
      const res = await getContactData();
      console.log(res);
      if (res) {
        setItems((pre) => ({ ...pre, loading: false, data: res }));
      } else {
        setItems((pre) => ({ ...pre, loading: false, error: res.msg }));
      }
    })();
  }, []);
  return (
    <div className=" w-full">
      {items.loading ? (
        <LoadingComponents />
      ) : (
        <div className="flex flex-col gap-y-5">
          {items.error ? (
            <ErrorComponents>{items.error}</ErrorComponents>
          ) : (
            items.data.map((el) => (
              <ContactCardComponents key={el.id} data={el} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ContactPage;
