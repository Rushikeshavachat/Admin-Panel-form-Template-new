import React, { useState } from 'react';
import firebase from '../firebaseConfig';

const UserDataForm: React.FC = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');

  const saveUserData = async () => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      await firebase.firestore().collection('users').doc(currentUser.uid).set({
        name,
        id,
        contact,
        address,
      });
    }
  };

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="ID" />
      <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Contact" />
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
      <button onClick={saveUserData}>Save</button>
    </div>
  );
};

export default UserDataForm;
