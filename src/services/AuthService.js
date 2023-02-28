import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  updateProfile,
  updateEmail,
  FacebookAuthProvider,
} from "firebase/auth";
import { collection, query, getDoc, doc } from 'firebase/firestore';
import { fireAuth, fireDb } from "../config/FirebaseConfig";
import { OperationResult } from '../models/common-models';
import { Profile } from '../models/auth-models';

export class AuthService {
  register = async (email, password) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        fireAuth,
        email,
        password
      );
      return user;
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  login = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        fireAuth,
        email,
        password
      );
      return user;
    } catch (error) {
      alert(error.message);
      console.log(error);
      console.log(typeof error);
    }
  };

  logout = async () => {
    try {
      await signOut(fireAuth);
      return true;
    } catch (error) { }
  };

  // verification = async () => {
  //   try {
  //     await sendEmailVerification(fireAuth.currentUser);
  //   } catch (error) {
  //     console.log(error, "hata");
  //   }
  // };

  async getProfile() {
    try {
      const colRef = collection(fireDb, 'users');
      const userId = fireAuth.currentUser.uid;
      const docRef = doc(colRef, userId);
      const q = query(docRef);
      const userDoc = await getDoc(q);
      if (userDoc.exists()) {
        return new OperationResult({
          success: true,
          data: new Profile(userDoc.id, userDoc.data())
        });
      } else {
        return new OperationResult({
          success: false,
          message: 'Profile bilgisi bulunmuyor.'
        });
      }
    } catch (error) {
      return new OperationResult({
        success: false,
        message: error.message
      });
    }
  }

  updateProfil = async (
    name,
    photo
    // photo = "https://i.pinimg.com/originals/28/3a/b1/283ab1108ef8e379a2e555de019e1aee.jpg"
  ) => {
    try {
      updateProfile(fireAuth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    } catch (error) {
      console.log(error.message);
    }
  };


}

export default new AuthService();
