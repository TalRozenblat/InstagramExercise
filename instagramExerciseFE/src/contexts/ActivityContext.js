import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const ActivityContext = React.createContext();

export function useActivityContext() {
  return useContext(ActivityContext);
}

export function ActivityContextProvider({ children }) {
  const createPost = () => {
    console.log("post_created");
  };

  return (
    <ActivityContext.Provider value={{ createPost }}>
      {" "}
      {children}
    </ActivityContext.Provider>
  );
}
