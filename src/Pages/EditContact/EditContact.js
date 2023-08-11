import { useNavigate, useParams } from "react-router-dom";
// Imprting the Values for the ContactApi
import { useValue } from "../../context";

import { Link } from "react-router-dom";

import Style from "./EditContact.module.css";

import { toast } from "react-toastify";

function Edit() {
  // Importing Values from the contact API
  const {
    contactList,
    setContactList,
    nameRef,
    emailRef,
    numberRef,
    handleClear,
  } = useValue();
  const navigate = useNavigate();
  // taking the id form the params
  const param = useParams();

  const currentContact = contactList.find(
    (contact) => contact.id === parseInt(param.id)
  );
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = numberRef.current.value;

    if (
      name === currentContact.name &&
      email === currentContact.email &&
      phone === currentContact.phone
    ) {
      return toast.error("Please changes the values !");
    }
    const updatedContact = {
      ...currentContact,
      name,
      email,
      phone,
    };

    // Updating the list
    const updatedList = contactList.map((contact) => {
      if (contact.id === currentContact.id) {
        return updatedContact;
      }
      return contact;
    });

    toast.success("Contact Updated !");

    navigate("/");
    setContactList(updatedList);

    handleClear();
  };

  return (
    <>
      <div className={Style.container}>
        <h1>Edit Contact</h1>
        {/* this is the form in which all the action will be performing */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            defaultValue={currentContact?.name}
            placeholder="Name"
            ref={nameRef}
          />{" "}
          <br />
          <input
            type="email"
            defaultValue={currentContact?.email}
            placeholder="Email"
            ref={emailRef}
          />{" "}
          <br />
          <input
            type="tel"
            defaultValue={currentContact?.phone}
            placeholder="Number"
            ref={numberRef}
          />{" "}
          <br />
          <div className={Style.buttonDiv}>
            <button type="submit" className={Style.updateButton}>
              Update Contact
            </button>
            <Link to="/">
              <button className={Style.cancle}>Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Edit;
