import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import AuthContext from "./AuthContext";
import auth from "../firebase/firebase.config";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register With Email & Pin //
  const createUser = (email, pin) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pin);
  };

  // Update User Profile //
  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  // Current User Observer //
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("Logged in User", currentUser);
    });
    return () => {
      unSubscribe;
    };
  }, []);

  const authInfo = {
    createUser,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
