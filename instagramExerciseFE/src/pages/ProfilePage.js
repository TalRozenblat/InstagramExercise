import React from "react";

import NavBar_bottom_fixed from "../components/NavBar_bottom_fixed.tsx";

export default function ProfilePage() {
  return (
    <>
      {/* <NavBar /> */}
      <NavBar_bottom_fixed highlight={"/profile"} />
    </>
  );
}
