"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// import { auth, firestore } from '../firebaseconfig';

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const [adminData, setAdminData] = useState<any[]>([]);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (!user) {
  //       router.push('/login');
  //     }
  //   });
  //   return () => unsubscribe();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data: any[] = [];
  //     const snapshot = await firestore.collection('admins').get();
  //     snapshot.forEach((doc) => {
  //       data.push({ id: doc.id, ...doc.data() });
  //     });
  //     setAdminData(data);
  //   };

  //   fetchData();
  // }, []);

  const handleUpdate = (id: string) => {
    // Implement update logic
  };

  const handleDelete = async (id: string) => {
    // await firestore.collection('admins').doc(id).delete();
    const updatedData = adminData.filter((admin) => admin.id !== id);
    setAdminData(updatedData);
  };

  const handleView = (id: string) => {
    // Implement view logic
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {adminData.map((admin) => (
            <tr key={admin.id}>
              <td>{admin.id}</td>
              <td>{admin.name}</td>
              <td>{admin.contact}</td>
              <td>{admin.address}</td>
              <td>
                <button onClick={() => handleUpdate(admin.id)}>Update</button>
                <button onClick={() => handleDelete(admin.id)}>Delete</button>
                <button onClick={() => handleView(admin.id)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPage;


