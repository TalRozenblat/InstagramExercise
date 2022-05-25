import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const ActivityContext = React.createContext();

export function useActivityContext() {
  return useContext(ActivityContext);
}

export function ActivityContextProvider({ children }) {
  const createPost = async (new_post) => {
    console.log(new_post.userId);
    let formData = new FormData();
    formData.append("description", new_post.description);
    formData.append("userId", new_post.userId);
    formData.append("img", new_post.img);
    console.log(formData);
    try {
      const res = await axios.post("http://localhost:8080/post/", formData);
      return res.data;
    } catch (err) {
      return { error: err };
    }
  };

  return (
    <ActivityContext.Provider value={{ createPost }}>
      {" "}
      {children}
    </ActivityContext.Provider>
  );
}
