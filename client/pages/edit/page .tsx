"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// import { firebaseConfig } from '../../libs/firebase';

const EditPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    address: ''
  });
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = firestore.collection('data').doc(id as string);
        const doc = await docRef.get();
        if (doc.exists) {
          const data = doc.data();
          setFormData(data);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document: ', error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    router.push(`/showdata`);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await firestore.collection('data').doc(id as string).update(formData);
     
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Edit Entry</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full" required />
        </div>
        <div>
          <label htmlFor="contact" className="block mb-1">Contact</label>
          <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full" required />
        </div>
        <div>
          <label htmlFor="address" className="block mb-1">Address</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default EditPage;



