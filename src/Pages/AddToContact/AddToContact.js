import Style from "./AddToContact.module.css";

// Importing context from CntactAPI
import { useValue } from "../../context";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

function AddToContact() {
  const {
    contactList,
    setContactList,
    nameRef,
    emailRef,
    numberRef,
    handleClear,
  } = useValue();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // assigning values to the name form the nameRef
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const number = numberRef.current.value;
    // Checking if rhe numbeer is already present or not
    const checkNumber = contactList.find(
      (contact) => contact.number === parseInt(number) && number
    );

    if (checkNumber) {
      return toast.warning("Data not Changed !");
    }

    const newContactList = [...contactList];
    newContactList.push({
      id: contactList[contactList.length - 1].id + 1,
      name,
      email,
      phone: number,
    });
    toast.success("New Contact added !");
    setContactList(newContactList);
    navigate("/");
    // console.log(nameRef.current.value);
    handleClear();
  };

  return (
    <>
      <div className={Style.container}>
        <h1>Add to Contact</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" ref={nameRef} required /> <br />
          <input
            type="email"
            placeholder="Email"
            ref={emailRef}
            required
          />{" "}
          <br />
          <input
            type="tel"
            placeholder="Phone Number"
            ref={numberRef}
            required
          />{" "}
          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default AddToContact;
