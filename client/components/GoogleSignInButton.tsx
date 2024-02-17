import React from 'react';
// import firebase from '../firebaseConfig';

const GoogleSignInButton: React.FC = () => {
  const signInWithGoogle = async () => {
    // const provider = new firebase.auth.GoogleAuthProvider();
    // await firebase.auth().signInWithPopup(provider);
  };

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  );
};

export default GoogleSignInButton;

