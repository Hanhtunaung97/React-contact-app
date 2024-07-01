import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleContactData } from "../service/contact.service";
import { LoadingComponents } from "../components";
import ErrorComponents from "../components/Error.components";

const DetailContactPage = () => {
  const { id } = useParams();
  //   console.log(id);
  const [items, setItems] = useState({
    loading: true,
    data: null,
    error: null,
  });
  useEffect(() => {
    (async () => {
      setItems((pre) => ({ ...pre, loading: true }));
      const res = await getSingleContactData(id);
      console.log(res);
      if (res) {
        setItems((pre) => ({ ...pre, loading: false, data: res }));
      } else {
        setItems((pre) => ({ ...pre, loading: false, error: res.msg }));
      }
    })();
  }, [id]);
  return (
    <div className="w-full flex flex-col gap-y-2 items-center justify-center">
      {items.loading ? (
        <LoadingComponents />
      ) : (
        <>
          {items.error ? (
            <ErrorComponents>{items.error}</ErrorComponents>
          ) : (
            <div className=" text-center border shadow w-2/3 p-3 rounded-lg space-y-3 text-purple-500 duration-300 hover:scale-110 hover:bg-purple-50 hover:border-0">
              <h1 className=" font-heading font-semibold">{items.data.name}</h1>
              <p>{items.data.phone}</p>
              <p>{items.data.email}</p>
              <p>{items.data.address}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DetailContactPage;
