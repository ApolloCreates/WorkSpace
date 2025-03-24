import React, { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // ✅ Moved navigate inside component

  const login = (userData) => {
    localStorage.setItem("token", userData.token);
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  useEffect(()=>{
    const verifyUser = async ()=>{
      try{
        const token = localStorage.getItem("token");
        if(token){
          const response = await axios.get(
            "http://localhost:3000//api/auth/verify",{
              headers:{
                Authorisation:`Bearer${token}`,
              },
            }
          );
          if(response.data.success){
            setUser(response.data.user);
          }
        }else{
          setUser(null);
          setLoading(false);
        }
      } catch(error){
        if(error.response && !error.response.data.error) {
          console.error("An error occurred:", error.response.data.error);
        }
      } finally{
        setLoading(false);
      }
    };

    verifyUser(); // Call the function here
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};

const useAuth = () => useContext(UserContext);

export { AuthContext, useAuth };
