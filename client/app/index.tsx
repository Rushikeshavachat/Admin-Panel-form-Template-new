// pages/index.tsx

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { firestore } from '../libs/firebase';

interface DataItem {
  id: string;
  name: string;
  contact: string;
  address: string;
}

const FormPage: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await firestore.collection('data').get();
        const items: DataItem[] = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setData(items);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);
router.push("/login")
  const handleDelete = async (id: string) => {
    try {
      await firestore.collection('data').doc(id).delete();
      setData(data.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };

  const handleEdit = (id: string) => {
    router.push(`/edit/${id}`);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Data List</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Contact</th>
            <th className="py-2 px-4 border">Address</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td className="py-2 px-4 border">{item.id}</td>
              <td className="py-2 px-4 border">{item.name}</td>
              <td className="py-2 px-4 border">{item.contact}</td>
              <td className="py-2 px-4 border">{item.address}</td>
              <td className="py-2 px-4 border">
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2" onClick={() => handleEdit(item.id)}>Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormPage;
