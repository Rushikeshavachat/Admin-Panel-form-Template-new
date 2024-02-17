// otherFile.ts
import firebaseApp from '../firebaseConfig';
import { getFirestore } from 'firebase/firestore';

const db = getFirestore(firebaseApp);

// Now you can use `db` to interact with Firestore