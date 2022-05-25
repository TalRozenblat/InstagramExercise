import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const FeedContext = React.createContext();

export function useFeedContext() {
  return useContext(FeedContext);
}

export function FeedContextProvider({ children }) {
  const [profiled_user_posts, set_profiled_user_posts] = useState([]);

  const getAllUserPosts = async (id) => {
    console.log(id);
    try {
      const response = await axios.get(`http://localhost:8080/post/user/${id}`);
      set_profiled_user_posts(response.data);
      // localStorage.setItem("profiled_posts", response.data);
    } catch (err) {
      return err;
    }
  };

  useEffect(() => console.log(profiled_user_posts), [profiled_user_posts]);

  return (
    <FeedContext.Provider value={{ getAllUserPosts, profiled_user_posts }}>
      {" "}
      {children}
    </FeedContext.Provider>
  );
}
