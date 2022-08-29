import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase-config'

const provider = new GoogleAuthProvider();

export const authenticate = async () => {
    const result = await signInWithPopup(auth, provider);
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    const { user } = result;
    return user;
}