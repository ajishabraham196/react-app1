import React, { useRef, useState } from "react";

const Form = () => {
  //const [name, setName] = useState("");
  const [value, setValue] = useState(0);

  const nameRef = useRef("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);

    // const newUser = Object.fromEntries(formData);
    // e.currentTarget.reset();
    // console.log(newUser);
    console.log(nameRef.current.value);
  };
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <h4>Contolled Input</h4>
      <div className="form-row">
        <label htmlFor="name"> name</label>
        <input type="text" id="name" ref={nameRef} />
        <button type="submit"> submit</button>
      </div>
    </form>
  );
};

export default Form;
