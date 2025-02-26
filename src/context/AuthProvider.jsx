import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import AuthContext from "./AuthContext";
import auth from "../firebase/firebase.config";
import { useEffect, useState } from "react";
import axios from "axios";

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

  // Login with Email & pin
  const loginUser = (email, pin) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pin);
  };

  // Current User Observer //
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Logged in User", currentUser);
      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios
          .post("https://flexi-pay-server-side.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            setLoading(false);
            console.log(res.data);
          });
      } else {
        axios
          .post(
            "https://flexi-pay-server-side.vercel.app/logout",
            { user },
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            setLoading(false);
            console.log("Logout", res.data);
          });
      }
    });
    return () => {
      unSubscribe;
    };
  }, []);

  // Logout User //

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    createUser,
    updateUserProfile,
    user,
    loading,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
