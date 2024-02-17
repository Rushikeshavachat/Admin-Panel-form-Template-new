// services/firestoreService.ts
import firebase from 'firebase/app';
import 'firebase/firestore';
// import { firebaseConfig } from '../libs/firebase';

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// const db = firebase.firestore();

// export const addEntry = async (entryData: any) => {
//   await db.collection('entries').add(entryData);
// };

// export const getEntries = async () => {
//   const snapshot = await db.collection('entries').get();
//   return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// };

// export const updateEntry = async (entryId: string, entryData: any) => {
//   await db.collection('entries').doc(entryId).update(entryData);
// };

// export const deleteEntry = async (entryId: string) => {
//   await db.collection('entries').doc(entryId).delete();
// };
