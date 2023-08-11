import { createContext, useContext, useState, useEffect, useRef } from "react";

import { toast } from "react-toastify";

// establishing contactAPI
const contactApi = createContext();
export function useValue() {
  const value = useContext(contactApi);
  return value;
}

function CustomeContext({ children }) {
  const [contactList, setContactList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // REF used in updating and adding in the local state of the contactList
  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();

  // fucntion whill help to fetch the contact from the List
  const fetchContactList = async () => {
    setIsLoading(true);
    let data = await fetch("https://jsonplaceholder.typicode.com/users/");
    let contact = await data.json();
    // console.log(contact);
    setContactList(contact);
    setIsLoading(false);
  };

  // delete function
  const deleteContact = (id) => {
    const index = contactList.findIndex((contact) => contact.id === id);
    if (index !== -1) {
      let newContactList = [...contactList];
      newContactList.splice(index, 1);
      toast.success("Contact Deleted Successfully !");
      setContactList(newContactList);
    }
  };
  const handleClear = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    numberRef.current.value = "";
  };

  // Componect Did Mount
  useEffect(() => {
    fetchContactList();
  }, []);

  return (
    <>
      <contactApi.Provider
        value={{
          contactList,
          setContactList,
          isLoading,
          setIsLoading,
          deleteContact,
          nameRef,
          emailRef,
          numberRef,
          handleClear,
        }}
      >
        {children}
      </contactApi.Provider>
    </>
  );
}

export default CustomeContext;
