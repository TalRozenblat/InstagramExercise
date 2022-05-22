import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const FeedContext = React.createContext();

export function useFeedContext() {
  return useContext(FeedContext);
}

export function FeedContextProvider({ children }) {
  return <FeedContext.Provider> {children}</FeedContext.Provider>;
}
