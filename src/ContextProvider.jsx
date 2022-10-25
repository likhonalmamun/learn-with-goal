import React, { createContext } from "react";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import app from "./firebase.init";
export const AuthContext = createContext();
const auth = getAuth(app);
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const authContextValue = { user, loading };
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;
