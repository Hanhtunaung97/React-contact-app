// import { deleteContactData, getContactData } from "../service/contact.service";
import { useEffect, useState } from "react";
import { ContactCardComponents, LoadingComponents } from "../components";
import ErrorComponents from "../components/Error.components";
import {
  useGetContactsQuery,
  useRemoveContactMutation,
} from "../store/services/endpoints/contact.endpoints";

const ContactPage = () => {
  const { isLoading, isError, data, isSuccess } = useGetContactsQuery();
  console.log(isLoading, isError, data, isSuccess);
  const [deleteFun, deleteData] = useRemoveContactMutation();
  const [deleteItem, setDeleteItem] = useState(false);
  // console.log(deleteData);
  // const [items, setItems] = useState({
  //   loading: true,
  //   data: null,
  //   error: null,
  // });
  // useEffect(() => {
  //   (async () => {
  //     setItems((pre) => ({ ...pre, loading: true }));
  //     const res = await getContactData();
  //     // console.log(res);
  //     if (res) {
  //       setItems((pre) => ({ ...pre, loading: false, data: res }));
  //     } else {
  //       setItems((pre) => ({ ...pre, loading: false, error: res.msg }));
  //     }
  //   })();
  // }, [deleteItem]);
  useEffect(() => {
    (async () => {
      const res = await data;
    })();
  }, [data, deleteItem]);
  const deleteContact = async (id) => {
    console.log("delete id", id);
    const res = await deleteFun(id);
    if (res) {
      setDeleteItem((pre) => !pre);
    }
  };
  return (
    <div className=" w-full h-full">
      {isLoading ? (
        <LoadingComponents />
      ) : (
        <div className="flex flex-col gap-y-5 w-full h-full justify-center items-center">
          {isError ? (
            <ErrorComponents>{isError.message}</ErrorComponents>
          ) : (
            data.contacts.data.map((el) => (
              <ContactCardComponents
                deleteContact={deleteContact}
                key={el.id}
                data={el}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ContactPage;
