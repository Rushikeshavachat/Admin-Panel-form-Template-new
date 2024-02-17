"use client"
import React, { useState } from 'react';
import {useRouter} from "next/navigation" 
const IndexPage: React.FC = ({ }) => {
  const router=useRouter()
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    contact: '',
    address: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    id: '',
    contact: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let newErrors = {
      name: '',
      id: '',
      contact: '',
      address: '',
    };

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.id) {
      newErrors.id = 'ID is required';
    }

    if (!formData.contact) {
      newErrors.contact = 'Contact is required';
    }

    if (!formData.address) {
      newErrors.address = 'Address is required';
    }
    router.push("/showdata")
    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === '')) {
      // All fields are valid, submit the form
      // You can add your Firebase submission logic here
      console.log('Form submitted:', formData);
    }
  };

  return (
<div className="container mx-auto mt-8 w-full h-full overflow-hidden bg-sky-500 relative">
<h1 className="text-2xl font-bold mb-4 text-center text-sky-600 leading-10 underline md:underline-offset-8 md:text-sky-800">User Registration Admin Panel Form</h1>      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-8  pt-6 pb-8 mb-4">
<label htmlFor="id" className="block mt-6 font-extrabold text-2xl">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="border border-gray-300 rounded px-3 py-2 w-full "
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
        <label htmlFor="id" className="block mt-6 font-extrabold text-2xl">ID</label>

        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="ID"
          className="border border-gray-300 rounded px-3 py-2 w-full "
        />
        {errors.id && <p className="text-red-500">{errors.id}</p>}
        <label htmlFor="id" className="block mt-6 font-extrabold text-2xl">Contact</label>

        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Contact"
          className="border border-gray-300 rounded px-3 py-2 w-full "
        />
        {errors.contact && <p className="text-red-500">{errors.contact}</p>}
        <label htmlFor="id" className="block mt-6 font-extrabold text-2xl">Address</label>

        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="border border-gray-300 rounded px-3 py-2 w-full "
        />
        {errors.address && <p className="text-red-500">{errors.address}</p>}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-10">Submit</button>
      </form>
    </div>
  );
};

export default IndexPage;

