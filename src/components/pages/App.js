import React, { useEffect, useState } from 'react';
import { AppContext } from '../context/appContext';
import Recipes from './Recipes';
import { GoogleAuthProvider, signInWithRedirect, signInWithPopup, getRedirectResult } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { getRecipes } from '../../services/recipeService';

const provider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState('None');

  const authenticate = async () => {
    const result = await getRedirectResult(auth);

    if (!result) {
      signInWithRedirect(auth, provider);
      return
    }

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const { accessToken, user } = credential;
    setUser(user);
  }

  const auth2 = async () => {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const { user } = result;
    setUser(user);
  }

  useEffect(() => {
    getRecipes().then((result) => console.log(result));
  }, []);

  return (
    <AppContext>
      <button onClick={() => {
        auth2();
      }}>Login</button>
      <Recipes />
    </AppContext>
  );
}

export default App;
