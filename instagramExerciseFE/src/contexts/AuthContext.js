import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [profiledUser, setProfiledUser] = useState(
    JSON.parse(localStorage.getItem("profiled_user"))
  );

  const navigate = useNavigate();

  const login = async (user) => {
    try {
      const existing_user = await axios.post(
        "http://localhost:8080/user/login",
        user
      );
      console.log(existing_user);
      if (existing_user) {
        // localStorage.setItem("token", existing_user.data.token);
        localStorage.setItem("user", JSON.stringify(existing_user.data));
        localStorage.setItem(
          "profiled_user",
          JSON.stringify(existing_user.data)
        );
        setProfiledUser(existing_user.data);
        setCurrentUser(existing_user.data);
        navigate("/profile");
      }
    } catch (err) {
      return { error: err };
    }
  };

  const getUserData = async (id) => {
    const res = await axios.get(`http://localhost:8080/user/${id}`);
    setProfiledUser(res.data);
    localStorage.setItem("profiled_user", JSON.stringify(res.data));
    return res.data;
  };

  const signUp = async (new_user) => {
    try {
      const user = await axios.post(
        "http://localhost:8080/user/signup",
        new_user
      );
      return user;
    } catch (err) {
      return { error: err };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isAdmin");
    setCurrentUser("");
    window.location.pathname = "/";
  };

  const resetPassword = async (user) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/forgot_password/get_link",
        { email: user }
      );
      console.log(response);
      return response;
    } catch (err) {
      return { error: err };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        signUp,
        resetPassword,
        currentUser,
        getUserData,
        profiledUser,
        setProfiledUser,
      }}
    >
      {" "}
      {children}
    </AuthContext.Provider>
  );
}
