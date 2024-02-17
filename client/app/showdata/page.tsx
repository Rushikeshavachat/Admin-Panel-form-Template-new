// pages/index.tsx
"use client"
import { useEffect, useState } from 'react';
// import { firestore } from '../../libs/firebase';
import { useRouter } from 'next/navigation';

const ShowData: React.FC = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        address: '',
        id:"",
      });
      
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
        //   const docRef = await firestore.collection('data').add(formData);
        //   console.log('Document written with ID: ', docRef.id);
          router.push('/');
        } catch (error) {
          console.error('Error adding document: ', error);
        }
      };
    
  

  return (
    <div className="container mx-auto mt-8">
    <h1 className="text-2xl font-bold mb-4">Create New Entry</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-1">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full" required />
      </div>
      <div>
        <label htmlFor="name" className="block mb-1">ID</label>
        <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full" required />
      </div>
      <div>
        <label htmlFor="contact" className="block mb-1">Contact</label>
        <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full" required />
      </div>
      <div>
        <label htmlFor="address" className="block mb-1">Address</label>
        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full" required />
      </div>
      <button type="submit"  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
    </form>
  </div>
  );
};

export default ShowData;

