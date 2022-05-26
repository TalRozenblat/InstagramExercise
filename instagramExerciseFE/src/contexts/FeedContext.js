import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const FeedContext = React.createContext();

export function useFeedContext() {
  return useContext(FeedContext);
}

export function FeedContextProvider({ children }) {
  const [profiled_user_posts, set_profiled_user_posts] = useState([]);
  const [profiledUser, setProfiledUser] = useState();
  const [publicFeed, setPublicFeed] = useState([]);

  const getAllUserPosts = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/post/user/${id}`);
      set_profiled_user_posts(response.data);
      // localStorage.setItem("profiled_posts", response.data);
    } catch (err) {
      return err;
    }
  };

  const getAllPosts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/post");
      console.log(res);
      setPublicFeed(res.data);
    } catch (err) {
      return err;
    }
  };

  useEffect(() => getAllPosts(), []);

  return (
    <FeedContext.Provider
      value={{
        getAllUserPosts,
        profiled_user_posts,
        getAllPosts,
        publicFeed,
        profiledUser,
        setProfiledUser,
      }}
    >
      {" "}
      {children}
    </FeedContext.Provider>
  );
}
