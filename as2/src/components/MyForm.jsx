import React, { useState } from 'react';

const MyForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    code: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  const [nameE, setNameE] = useState(null);
  const [idE, setIdE] = useState(null);
  const [phoneE, setPhoneE] = useState(null);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${form.name}\nEmail: ${form.email}\nCode: ${form.code}\nPhone: ${form.phone}`);
    validateName(form.name) ? setNameE(null) : setNameE('Enter name > 2 letters');
    validateID(form.code) ? setIdE(null) : setIdE('Enter ID again');
    validatePhone(form.phone) ? setPhoneE(null) : setPhoneE('Enter phone again');
  };

  const validatePhone= (phone) => /^\d{10}$/.test(phone);
  const validateName = (name) => name.length > 2;
  const validateID = (id) => /^SE\d{6}$/.test(id); 

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} />
        {nameE != null && <p>{nameE}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} />
      </div>
      <div>
        <label>Student ID:</label>
        <input type="text" name="code" value={form.code} onChange={handleChange} />
        {idE != null && <p>{idE}</p>}
      </div>
      <div>
        <label>Phone number:</label>
        <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
        {phoneE != null && <p>{phoneE}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
