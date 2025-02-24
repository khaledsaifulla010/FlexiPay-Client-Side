import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import AuthContext from "./AuthContext";
import auth from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  // Register With Email & Pin //

  const createUser = (email, pin) => {
    return createUserWithEmailAndPassword(auth, email, pin);
  };

  // Update User Profile //

  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const authInfo = {
    createUser,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
