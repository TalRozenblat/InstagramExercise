import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const ActivityContext = React.createContext();

export function useActivityContext() {
  return useContext(ActivityContext);
}

export function ActivityContextProvider({ children }) {
  return <ActivityContext.Provider> {children}</ActivityContext.Provider>;
}
