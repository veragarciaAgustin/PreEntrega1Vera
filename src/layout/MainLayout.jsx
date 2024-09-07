import { useRef } from "react";
import { Navbar } from "../components";

const MainLayout = ({ children }) => {
  return (
    <>
      {/* Children esta importando los componentes product y itemList */}
      {children}

    </>
  );
};

export default MainLayout;
